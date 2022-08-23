---
id: 20220823060529-open-in-gipod
---

I like to add [Gitpod](https://www.gitpod.io/) buttons to the README files of GitHub repos that are good for using with Gitpod (ie not developing desktop GUI software), so I, or any potential other contributors, can get an environment up and running quickly.

I always have to look up the correct syntax for the Markdown embed, pretty button graphic and Gitpod URL, so here's the snippet.

```md
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#<your-repository-url>)
```

Here's an example, to open the code for this repo in Gitpod:

```md
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/caro401/public-notes)
```

and the resulting button

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/caro401/public-notes)

### Sources

- [Gitpod's docs](https://www.gitpod.io/docs/getting-started#open-in-gitpod-button)