---
id: 20220825022342-gitops-is-devops
---

[OpenGitOps](https://opengitops.dev/#principles) states that there are 4 principles of GitOps:

> 1. Declarative
> A [system](https://github.com/open-gitops/documents/blob/v1.0.0/GLOSSARY.md#software-system) managed by GitOps must have its desired state expressed [declaratively](https://github.com/open-gitops/documents/blob/v1.0.0/GLOSSARY.md#declarative-description).
> 2. Versioned and Immutable
> Desired state is [stored](https://github.com/open-gitops/documents/blob/v1.0.0/GLOSSARY.md#state-store) in a way that enforces immutability, versioning and retains a complete version history.
> 3. Pulled Automatically
> Software agents automatically pull the desired state declarations from the source.
> 4. Continuously Reconciled
> Software agents [continuously](https://github.com/open-gitops/documents/blob/v1.0.0/GLOSSARY.md#continuous) observe actual system state and [attempt to apply](https://github.com/open-gitops/documents/blob/v1.0.0/GLOSSARY.md#reconciliation) the desired state.

Principle 1 basically means you need to be using Infrastructure as Code (IaC) to define your infrastructure, and you deploy your infrastructure and application code using the same processes and tools.

Git commit hashes are the key to principle 2, and related, the only way to change the state of your system should be by adding a commit, no SSHing into servers and changing things on the fly unless something has gone horribly wrong. This is great for making things auditable, and for making the state of your system really clear.

Principle 3 closely ties your code review and merging process to your deployments - once something is merged to your main branch, your GitOps systems and tools will immediately pull those changes. This means there's no questions as to whether some code in main is live or not - anything in main is live - and forces you to make sure that only stuff you are confident in makes it into main.

Principle 4 is essentially Continuous Deployment - your GitOps system tries to make your live infrastructure and code match the very latest state, automatically once changes are merged.

Implementing GitOps and the associated CI/CD and automation practices can really help ensure you have good safety processes in place, and manage your changes well, as well as speeding up your delivery and saving engineers time on manual deploys and the like. It fits well with how I like to work, with lots of automated checks and manual review on branches, then [[Github Actions]] to immediately build and deploy the code that makes it to the main branch.

### Sources

- [GitOps: An implementation of DevOps](https://chrisshort.net/gitops-an-implementation-of-devops/) from Chris Short of the [DevOps'ish](https://devopsish.com/) newsletter
- [OpenGitOps](https://opengitops.dev/#principles)
