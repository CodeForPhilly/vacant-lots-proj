# Guidelines for contributing

## Overview

🎉 First off, thanks for taking the time to contribute! 🎉 Clean & Green Philly wouldn't be possible without volunteers like you.

This document will outline guidelines for contributing to the Clean & Green Philly [codebase](https://github.com/CodeForPhilly/vacant-lots-proj).

Before contributing, we encourage you to read our [LICENSE](https://github.com/CodeForPhilly/vacant-lots-proj/blob/main/LICENSE) and [README](https://github.com/CodeForPhilly/vacant-lots-proj/blob/main/README.md) files. If you have any questions not answered by the content of this repository, please contact us via [our Slack channel](https://codeforphilly.slack.com/archives/C05H9QBMP96).

## Joining the regular meetings

We hold weekly meetings via Zoom, plus the monthly in-person Code for Philly hack night. During these meetings, we cover recent progress, next steps for the week, and any outstanding challenges. Participating in these meetings is the best way to get up to speed on the project. The best way to find out about when they're happening is joining the [#clean-and-green-philly](https://codeforphilly.slack.com/archives/C05H9QBMP96) channel on the [Code for Philly](https://www.codeforphilly.org/) [Slack](https://www.codeforphilly.org/chat/).

## How can I contribute?

We welcome all kinds of contributions, big or small. The best way to start is to look through the [issues page](https://github.com/CodeForPhilly/vacant-lots-proj/issues) to see what's available to be working on. If you're not sure which issue to tackle, consider filtering them by tags or asking in the [Slack channel](https://codeforphilly.slack.com/archives/C05H9QBMP96).

Once you've found an issue you'd like to work on, please comment on it to let us know you're interested. We'll do our best to assign it to you ASAP. If you're unable to complete the issue in a timely manner (a week or two), please let us know so we can reassign it. If we see an issue with no activity for 3 or more days, we'll reach out via GitHub and Slack to the person to whom it's assigned. If there is no activity at all on the issue for 1 week, we'll reassign it. If there is some activity (e.g., a draft PR or a message to let us know that you're out of town), then you're free to continue working on the issue for another week. However, in the interest of avoiding bottlenecks and giving everyone a fair chance to contribute, we ask that everyone try to complete all issues within 2 weeks of assignment.

For info on how to get the codebase setup, see the [SETUP](/SETUP) folder, which contains instructions for setting up the front end, back end, and full stack, depending on your interest. If you have questions about the process, please ask in the [Slack channel](https://codeforphilly.slack.com/archives/C05H9QBMP96).

To make sure the repo is protected and organized, merges to `main` are not allowed. All changes must be made through pull requests to the `staging` branch. Once you have commits ready to merge, please create a new branch named in the format of `<github-username>`/`<issue-number>`-`<kebab-case-description>`. For example vimusds/1069-fix-territory-on-mobile. Your PR will need to be approved by at least one required reviewer (see [CODEOWNERS](https://github.com/CodeForPhilly/vacant-lots-proj/blob/main/.github/CODEOWNERS)) and must pass all required status checks. When these are complete, it will be merged to the `staging` branch and then eventually reviwed by our design team and merged to `main` for deployment. To help them in this, please provide clear instructions on how to test/view the changes you've made, and tag the issues you're addressing. You can do this when writing the PR by writing `#<number>` in the `Does this close any currently open issues` section.

If you're unclear on the precise implementation of a ticket, please refer to [the prototype](https://www.figma.com/proto/NAFkgq34abW6uJ0R7PW24T/Prototype---Clean-%26-Green-Philly?page-id=187%3A12602&type=design&node-id=2592-30019&viewport=-657%2C-623%2C0.1&t=fqZvOvLyE9qv7AAV-8&scaling=min-zoom&starting-point-node-id=2592%3A30019&hide-ui=1).

Note: when you have completed an issue and are ready to close it, please tag the appropriate reviewe(s). It it's a front-end issue, tag @paulhchoi and @thansidwell (plus @brandonfcohen1 if it involves the map). If it's a back-end issue, tag @brandonfcohen1. Feel free to drop a message in the Slack channel if you have questions.

## Open an Issue

To report a bug, request a feature, or suggest an enhancement, please open an issue on the [issues page](https://github.com/CodeForPhilly/vacant-lots-proj/issues). We ask that you provide as much detail as possible, including steps to reproduce the issue, expected behavior, and any relevant screenshots or logs. We provide issue templates to help guide you through this process.

## Contribute to Documentation

As this project grows, building our documentation is an important part of making sure it's accessible and sustainable. We welcome contributions to our documentation, ranging from refining existing content for better clarity, adding examples and tutorials for complex features, to ensuring inclusivity in language and presentation. In particular, we welcome suggestions for any of the documents in [docs][../docs] and [SETUP](/SETUP).

## Suggesting Something Else

Got an idea for another way in which you could contribute to our project? Maybe you want to write an article for us, or help us with research or graphic design. If you have an idea for a way to improve the project that we aren't currently including, [reach out via Slack](https://codeforphilly.slack.com/archives/C05H9QBMP96) and let us know how you'd like to get involved.
