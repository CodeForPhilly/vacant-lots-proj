import logging as log
import os
import re
import smtplib
import subprocess
from email.mime.text import MIMEText

from classes.backup_archive_database import backup_schema_name
from classes.featurelayer import google_cloud_bucket
from config.config import (
    from_email,
    log_level,
    report_to_email,
    report_to_slack_channel,
    smtp_server,
)
from config.psql import conn, local_engine, url
from data_utils.utils import mask_password
from slack_sdk import WebClient
from sqlalchemy import inspect

log.basicConfig(level=log_level)


class DiffReport:
    """
    Class to manage computing data differences for all tables between the newly imported schema and the last schema.  Build a report of summary differences for all tables.  Log detailed differences to a table in the old backed-up schema.  Post difference summary to Slack and or email.
    """

    def __init__(self, timestamp_string: str = None):
        """constructor

        Args:
            timestamp_string (str, optional): This should be the same timestamp used in the backup to keep things consistent.  We only use this as the folder name for the diff detail files in GCP. Defaults to None.
        """
        self.tables = self._list_tables()
        self.timestamp_string = timestamp_string
        self.report: str = "Diff report\ntable A/1 = new data, table B/2 = old data\n\n"

    def run(self):
        """
        run the report and slack or email it.
        """

        for table in self.tables:
            pks = self.find_primary_keys(table)
            log.debug("Process table %s with pks %s", table, str(pks))
            summary = table + "\n" + self.compare_table(table, pks)
            # if no differences, do not report.
            if self._summary_shows_differences(summary):
                self.report += summary
                self.report += "Details: " + self.detail_report(table) + "\n"
            else:
                self.report += table + "\nNo difference\n"
            self.report += "\n"
        log.debug("\n")
        log.debug(self.report)
        self.send_report_to_slack()
        self.email_report()

    def _summary_shows_differences(self, summary: str) -> bool:
        """check the data-diff summary report to see if there are any differences

        Args:
            summary (str): the summary output

        Returns:
            bool: whether any add, deletes or updates were reported
        """
        return not (
            "0 rows exclusive to table A" in summary
            and "0 rows exclusive to table B" in summary
            and "0 rows updated" in summary
        )

    def detail_report(self, table: str) -> str:
        """Generate the html from the detail diff report and upload to Google cloud as an html file
        Args:
            table (str): the name of the core table being compared

        Returns:
            str: the full url of the report
        """
        return self._save_detail_report_to_cloud(
            self.generate_table_detail_report(table), table
        )

    def _save_detail_report_to_cloud(self, html: str, table: str) -> str:
        """Save this html to a public cloud folder in Google named with the timestamp of the backup

        Args:
            html (str): the html content
            table (str): the name of the core table being compared

        Returns:
            str: the full url of the report
        """
        path: str = "diff/" + self.timestamp_string + "/" + table + ".html"
        bucket = google_cloud_bucket()
        blob = bucket.blob(path)
        blob.upload_from_string(html, content_type="text/html")
        return "https://storage.googleapis.com/" + bucket.name + "/" + path

    def generate_table_detail_report(self, table: str) -> str:
        """
        generate an html table of the details of differences in this table from the materialized diff table in the backup schema from data-diff
        """
        sql: str = "select * from " + backup_schema_name + "." + table + "_diff"
        cur = conn.connection.cursor()
        cur.execute(sql)
        html: str = "<table border=1><tr>"

        column_names = [desc[0] for desc in cur.description]
        for column in column_names:
            html += "<th>" + column + "</th>"
        html += "</tr>"
        for row in cur.fetchall():
            html += "<tr>"
            for value in row:
                html += "<td>" + str(value) + "</td>"
            html += "</tr>"
        html += "</table>"
        return html

    def find_primary_keys(self, table: str) -> list[str]:
        """
        introspect on the db to find the primary key columns for this table
        """
        return (
            inspect(local_engine)
            .get_pk_constraint(table_name=table)
            .get("constrained_columns")
        )

    def _list_tables(self) -> list[str]:
        """
        list tables to do the diff on
        """
        # return inspect(local_engine).get_table_names(schema='public')
        return [
            "vacant_properties",
            "li_complaints",
            "li_violations",
            "opa_properties",
            "property_tax_delinquencies",
        ]

    def compare_table(self, table: str, pks: list[str]) -> str:
        """
        run data-diff to compare the newly imported table in the public schema to the table in the backup schema.
        We could use the data-diff python API but the cl is much clearer and has features I could not find in the API.
        """
        # compare the tables and output the summary stats to include in the report.  Materialize the details
        # of the differences to a table in the backup schema named table_name_diff
        data_diff_command = (
            "data-diff "
            + url
            + " public."
            + table
            + " "
            + backup_schema_name
            + "."
            + table
            + " -k "
            + " -k ".join(pks)
            + " -c '%' -m "
            + backup_schema_name
            + "."
            + table
            + "_diff --stats"
            + " --table-write-limit 100000"
        )
        log.debug(mask_password(data_diff_command))

        complete_process = subprocess.run(
            data_diff_command, check=False, shell=True, capture_output=True
        )

        if complete_process.returncode != 0 or complete_process.stderr:
            raise RuntimeError(
                "data-diff command did not exit with success. "
                + complete_process.stderr.decode()
            )
        output = complete_process.stdout.decode()
        return re.sub(r"\nExtra-Info:.*", "", output, flags=re.DOTALL)

    def send_report_to_slack(self):
        """
        post the summary report to the slack channel if configured.
        """
        if report_to_slack_channel:
            token = os.environ["CAGP_SLACK_API_TOKEN"]
            client = WebClient(token=token)

            # Send a message
            client.chat_postMessage(
                channel=report_to_slack_channel,
                text=self.report,
                username="CAGP Diff Report Bot",
            )

    def email_report(self):
        """
        email the summary report if configured.
        """
        if report_to_email:
            # Create a text/plain message
            msg = MIMEText(self.report)
            msg["Subject"] = "Clean & Green Philly: Data difference report"
            msg["From"] = from_email
            msg["To"] = report_to_email

            # Send the message via our own SMTP server
            s = smtplib.SMTP(smtp_server)
            s.sendmail(from_email, [report_to_email], msg.as_string())
            s.quit()