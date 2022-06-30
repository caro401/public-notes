---
id: 22041117062357-github-actions
title: GitHub Actions is a workflow automation tool
---

Actions provide a way to automate, customize, and execute your software development workflows within your GitHub repository. Detailed documentation is available in the [GitHub Actions Documentation](https://docs.github.com/en/actions).

- free unlimited minutes on public repos, 2000 minutes/month on private repos on free plan. [More pricing details](https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration)
- there's loads of actions from the community or official from github that you can just use, search [here](https://github.com/marketplace?type=actions). Pretty much everything uses the [checkout V3 action](https://github.com/marketplace/actions/checkout)

> GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.
>
> Kick off workflows with GitHub events like push, issue creation, or a new release. Combine and configure actions for the services you use, built and maintained by the community. Whether you want to build a container, deploy a web service, or automate welcoming new users to your open source projects—there's an action for that. Pair GitHub Packages with Actions to simplify package management - <cite><https://github.com/features/actions></cite>

Loads of things can trigger actions, most useful is `push`, `pull_request` for normal development things, and [`schedule`](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule) for regular/cron jobs.

### Sources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
