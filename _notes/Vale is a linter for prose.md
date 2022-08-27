---
---

[Vale](https://vale.sh/) is a tool for enforcing an editorial style guide on prose in various plain-text formats. There's some pre-defined styles, for example based on the [Microsoft](https://docs.microsoft.com/en-us/style-guide/welcome/) and [Google](https://developers.google.com/style/) style guides, [write-good](https://www.npmjs.com/package/write-good) and [alex](https://github.com/get-alex/alex), but you can edit these to create a configuration to suit your needs.

Vale can be integrated into writing workflows in the same way as you would a linter  for your code - it is a command-line tool, so can be run in a pre-commit hook or [[Github Actions]] (there's even an [official one](https://github.com/errata-ai/vale-action)), and there's probably an [integration](https://vale.sh/docs/integrations/guide/) for your editor of choice.

I tend to use the same config for all projects, and often work on external things that don't really want true vale setup, so I have a global ini file and set of styles in my home directory, and tell the [Vale VSCode extension](https://marketplace.visualstudio.com/items?itemName=errata-ai.vale-server) to read that ini file by default.