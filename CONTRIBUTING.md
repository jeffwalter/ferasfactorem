# Contributing

We can use help in a bunch of areas and any help is appreciated. Our [GitHub issues](https://github.com/jeffwalter/ferasfactorem/issues) serve as a place for any discussion, whether it's bug reports, questions, project direction etc. As the project grows this policy may change.

## Getting Started

Getting started with developing Rome takes only two commands. You will only need Node v12 or above.

```bash
git clone https://github.com/jeffwalter/ferasfactorem
cd ferasfactorem
```

### User files

If files specific to your local development environment should be ignored, please add these files to a global git ignore file rather than to a git ignore file within Rome.

You can find more information on this process [here](https://help.github.com/en/github/using-git/ignoring-files#configuring-ignored-files-for-all-repositories-on-your-computer).

## Website

The [ferasfactorem website](https://ferasfactorem.dev/) is built with [Eleventy](https://www.11ty.dev/). To start a development server you can run the following commands:

```bash
cd website
npm install
npm start
```

## Checks

When working on ferasfactorem you will want to run the tests and linter to validate your changes. You can do both of these with a single command:

```bash
npm test
```

This is the main command we run when you submit a PR, so running it locally and making sure it passes will make it easier to review and merge your changes.

### Linting

To run just the linter use:

```bash
npm run lint
```

And to automatically apply formatting and autofixes:

```bash
npm run lintfix
```

### Testing

If you would like to run only the test runner:

```bash
./rome run unit
```
