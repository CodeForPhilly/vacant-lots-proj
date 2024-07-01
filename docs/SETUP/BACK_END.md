# Setup Instructions

## Overview

If you are planning to contribute to the data wrangling and database management on this project and will need to run the Python script, follow the installation and setup instructions below.

### TL;DR
Here's the short version of the setup:
1. Fork the repo; clone a local copy of your fork
2. Create a .env file in the `/data` subdirectory. Add the following:
    ```
    POSTGRES_PASSWORD=a-strong-password-here
    VACANT_LOTS_DB=postgresql://postgres:${POSTGRES_PASSWORD}@localhost/vacantlotdb
    ```
3. Create a free Google Cloud Platform account. Generate an API key under APIs and Services -> Credentials. Copy and paste it into your `/data/,env` file as CLEAN_GREEN_GOOGLE_KEY. Go to Cloud storage -> Buckets and create a new bucket.  Name it logically, e.g. cleanandgreenphl-{your_initials}.  It has to be globally unique.  Grant access to at least write to the bucket to your service account.  Put your bucket name in the GOOGLE_CLOUD_BUCKET_NAME variable.  Make sure the tiles file in your bucket is publicly accessible by following Google's instructions online. Under APIs and Services -> Credentials, create a service account.  After you create the service account you will download the service account private key file named like encoded-keyword-ddd-xxx.json.  Copy that to ~/.config/gcloud/application_default_credentials.json.  This path is specified by default in the volumes section of the docker compose file. Your `/data/.env` file should now look like this:
    ```
    POSTGRES_PASSWORD=a-strong-password-here
    VACANT_LOTS_DB=postgresql://postgres:${POSTGRES_PASSWORD}@localhost/vacantlotdb
    CLEAN_GREEN_GOOGLE_KEY=your-api-key-here
    OOGLE_CLOUD_BUCKET_NAME=your-bucket-name-here
    ```
4. Make sure everything is saved. Open a terminal and navigate to the `/data` subdirectory. Run `docker-compose build` to build the container for the first time. When this has finished, also run `docker-compose build postgres` to build the postgres container.
5. When both processes have finished, run `docker-compose up -d postgres` to connect to the PG database in the container. If this is your first time running this script, set `FORCE_RELOAD=True` in `/data/config/config.py` to populate the database tables with fresh data. Then, run `docker-compose run vacant-lots-proj`. 
6. To run the streetview images script, run `docker-compose run streetview`.

Formatting is implemented in `black` using `docker-compose run formatter`. Data differences are calculated automatically in the vacant-lots-proj script using `data-diff`.

To shut off the Docker container, run docker-compose down.

## Setup

### Fork the Repository

1. Navigate to [our GitHub repository](https://github.com/CodeForPhilly/vacant-lots-proj).
2. Create a fork of the repository by clicking the "Fork" button in the top right corner of the page. This will create a copy of the repository in your own GitHub account.
3. Clone your fork of the repository to your local machine using `git clone`.

Note: make sure to keep your fork up to date with the original repository by following the instructions [here](https://docs.github.com/en/get-started/quickstart/fork-a-repo#keep-your-fork-synced).

### Set Environment Variables

The project needs certain specific and sensitive pieces of information to run.  We store these in the user's development environment and not in source control.

For Mac and Linux, you can permanently store the environmental variables in your command line shell's configuration file, e.g. `~/.bashrc`, `~/.bash_profile`, `~/.zshrc` or `~/.profile`.  Add a line `export VAR_NAME=VALUE` in your file and run `source file` to read it in when newly created.  Any new shells will automatically have the new environment.

For Windows, you can set environmental variables under System -> Advanced or you can download a terminal emulator such as [Git Bash](https://gitforwindows.org/) and follow the instructions for Mac and Linux above.  A terminal emulator is reccommended.

All of your local environmental variables will be passed through to docker-compose so if you have them locally you should not have to hard-code them as indicated below.

#### PostgreSQL

Create an environmental variable called `POSTGRES_PASSWORD` and set its value to a new, strong password to use for your local postgres installation in Docker.  After that, add the below variable to configure the full postgres connection string:
`VACANT_LOTS_DB="postgresql://postgres:${POSTGRES_PASSWORD}@localhost/vacantlotdb"`

### Docker Build

Docker is a platform that allows you to containerize and run applications in isolated environments, making it easier to manage dependencies and ensure consistent deployments. Download the [latest version of Docker Desktop for your operating system](https://www.docker.com/products/docker-desktop/).

We use [docker-compose](https://docs.docker.com/compose/) to manage the backend Docker services.  The `data/docker-compose.yaml` file defines the services.  The only service that runs perpetually in Docker is `postgres`.  The other services are one-time batch jobs to build the data sets.

The first time you set up your backend, or any time either of the two Docker files change, you should build the Docker services by running `docker-compose build`.  It may take a while to install the dependencies but you will only need to do this once.  You can rebuild only one container, such as `postgres`, with `docker-compose build postgres`.  For first-time runs, you should set `FORCE_RELOAD = True` in `config.py` and optionally `log_level: int = logging.DEBUG` to get more verbose output.

All Docker commands should be run from the `data/` directory.  There is one main `Dockerfile` for the batch scripts and one called `Dockerfile-pg` for the PostgreSQL and postgis installation.  There is also a file called `init_pg.sql` that is run one time by Docker when the postgres data volume is empty to create the database and install postgis.  You should not have to touch any of the above three files.

#### Windows

1. Make sure Docker is running by opening the Docker Desktop app.
2. Open the command prompt. Navigate to the location of the `vacant-lots-proj` repository. Run `cd data` and then `docker-compose run vacant-lots-proj`.
3. When the script is done running, you’ll get a notification. When you’re done, to shut off the Docker container (which uses memory), run `docker-compose down`.

#### Linux

1. In the terminal, navigate to your repository location using `cd path/to/repository`. Then run `cd data` to move into the `data` directory.
2. Run `docker-compose run vacant-lots-proj`. Enter your password if requested. If you run into an error message related to "KEY_ID" or something like similar, you may have to do the following:

- Hard-code your VACANT_LOTS_DB variable in `docker-compose.yml`.

The backend also works on WSL Ubuntu running Docker for Linux on Windows 10.

3. When you're finished, and you want to shut down the Docker container, run `docker-compose down`.

#### macOS

In the terminal, use the `cd` command to navigate to your repository location, and then into the `data` directory. Run `docker-compose run vacant-lots-proj`. This command starts Docker Compose and sets up your environment as defined in your `docker-compose.yml` file. When you're finished and want to shut down the Docker containers, run `docker-compose down`.

### PostgreSQL

[PostgreSQL](https://www.postgresql.org/) AKA postgres, pg, psql is an open-source relational database management system.  It is used in this project only by the data load script to stage data and by the data diff process to compare new data with backed up data.  It is not needed by the front-end to run.  We run Postgres with the [Postgis](https://postgis.net/) extension for geospatial data in a Docker container.

To start the postgres Docker container, run:
`docker compose up -d postgres`.  You can access the psql command line in your container to work with the database with this command: `docker exec -it cagp-postgres psql -U postgres -d vacantlotdb`.  To stop the postgres container run `docker compose down postgres`.

## Python Development

You can set up your local Python environment so you can develop and run the backend `script.py` and create and run unit tests outside of Docker.  Build your local environment to match what is defined in the `Dockerfile`.  Install the same python version as is in the Dockerfile, using `pyenv` to manage multiple distributions if needed.  Use `pipenv` to create a virtual environment.  Install the pip dependencies that are defined in the `Pipfile` into your virtual environment.  Install the executables with `apt-get`.  Now you can develop in Python in your terminal and IDE and run unit tests with `pytest`. 

## Configuration

There are numerous configuration variables in `data/src/config/config.py`.  See the documentation in that file for each variable.  You will also have to set up environmental variables for keys and database connection parameters as defined throughout this document.

There are the following secrets that may be securely shared with you by the project leads:
- The password for the project's Google account to access the cloud platform.  For development purposes you can work in your personal cloud account, see the GCP section below.
- The Slack API key to post diff reports to the project Slack via the messenger bot.  See the 'Backup and difference reporting' section below.  You can set up your own Slack bot for your personal workspace and use that API key for local testing.  See [this link](https://www.datacamp.com/tutorial/how-to-send-slack-messages-with-python) for instructions or do a Google search on how to do it.

#### Making code changes

Changes to our codebase should always address an [issue](https://github.com/CodeForPhilly/vacant-lots-proj/issues) and need to be requested to be merged by submitting a pull request that will be reviewed by at least the team lead or tech lead.

#### Formatting

Format all python files by running:

```
docker-compose run formatter
```

#### Google Cloud (GCP)

The map data is converted to the [pmtiles](https://docs.protomaps.com/pmtiles/) format and served from Google Cloud. For access to production credentials, contact the project lead.

You can run the tile build locally with `docker-compose run vacant-lots-proj` to create a tile file and upload it to your own GCP bucket.  First, create your own GCP account using their free trial.  You will need to create the following assets in your GCP account and configure them in the environment variables in docker-compose.yml:
- Under APIs and Services -> Credentials, create an API key and put that in the CLEAN_GREEN_GOOGLE_KEY variable
- Under APIs and Services -> Credentials, create a service account.  After you create the service account you will download the service account private key file named like encoded-keyword-ddd-xxx.json.  Copy that to ~/.config/gcloud/application_default_credentials.json.  This path is specified by default in the volumes section of the docker compose file.
- Go to Cloud storage -> Buckets and create a new bucket.  Name it logically, e.g. cleanandgreenphl-{your_initials}.  It has to be globally unique.  Grant access to at least write to the bucket to your service account.  Put your bucket name in the GOOGLE_CLOUD_BUCKET_NAME variable.  Make sure the tiles file in your bucket is publicly accessible by following Google's instructions online.

The python script loads the tiles to Google Cloud as `vacant_properties_tiles_staging.pmtiles`. You can check this tileset by changing the config setting on the frontend `useStagingTiles` to `true`. If the tiles look OK, manually change the name in Google Cloud to remove the `_staging` and archive the previous copy.

#### Google Streetview

To update streetview images, after running the full data script run:

```
docker-compose run streetview
```

The script should only load new images that aren't in the bucket already (new properties added to list).

#### Backup and difference reporting
Whenever the data load script is run in force reload mode, the old data set is backed up and a report of any differences is sent to the team via Slack.  Differences in data are calculated using the [data-diff](https://github.com/datafold/data-diff) package. See [issue 520](https://github.com/CodeForPhilly/clean-and-green-philly/issues/520) in Github.

Backups are done in PostgreSQL in the vacantlotsdb database by copying the whole public schema to a backup schema named backup_{timestamp}.  Besides the original tables, the backup schema includes a '{table_name}_diff' table with details of the differences from data-diff for each table.

Backup schemas are only kept for one year by default.  Backup schemas older than a year are deleted at the end of the load script.

After all runs of the back-end script, the tiles file is backed up to the backup/ directory in the GCP bucket with a timestamp.  If the main tiles file ever gets corrupted, it can be rolled back to a backup file.

When a diff is performed, an html file of the contents of the '{table_name}_diff' table is generated for each table and uploaded to the public GCP bucket so it can be viewed in a web browser.  The location of the html files is in the format: https://storage.googleapis.com/cleanandgreenphl/diff/{backup_timestamp}/{table_name}.html  The link to the detail diff page is included in the Slack report message.

The `CAGP_SLACK_API_TOKEN` environmental variable must be set with the API key for the Slack app that can write messages to the channel as configured in the config.py `report_to_slack_channel` variable.

The report will also be emailed to any emails configured in the config.py `report_to_email` variable.
