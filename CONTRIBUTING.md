# Contributing

## How to contribute code

### Commit messages

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) to automatically release when changes are merged to `main`.

In order for this to work, commit messages must use [Angular Commit Message Conventions](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format), which in the simplest form looks like `<type>: <short summary>`. Below are some examples:

- `feat: added new component`
- `fix: fixed a bug`
- `docs: updated documentation`

If your change is a breaking change, this must be stated in the message, for example:

```
feat: updated some component

BREAKING CHANGE: removes the '.subcomponent' class.
```

### What is a breaking change?

A breaking change is any "incompatible API change". In the context of this design system, the API consists of CSS classes and SASS variables/functions/mixins etc.

Breaking changes include the following:

- Any change which removes or renames a part of the API must be labelled a breaking change.
- Any change which would require a downstream consumer to change their HTML.
