# Contributing to altinn-components

Thank you for contributing to altinn 3 components! 

This project is a collection of reusable components for building web applications for [Altinn 3](https://docs.altinn.studio/nb/community/about/), and not a general-purpose library.
If you are looking for a more general-purpose library, you might be looking for [Norwegian public sector's Design system](https://designsystemet.no/).

We appreciate your help in making this project better, and keep in mind that the project is in an early development stage, and we are actively working to improve both the documentation and the codebase.

## Share your feedback and report issues

You can report bugs or suggest new features by going to our [Github Issue Templates](https://github.com/Altinn/altinn-components/issues/new/choose).
We also welcome questions and feedback. 

## I Want To Contribute

### Getting started with development
Follow these steps to set up Storybook and the necessary tools for development.

#### Prerequisites for local development and storybook

- The project uses `pnpm` as package manager. It is recommended to use install and use correct version of `pnpm` by using `corepack`, cf. [Using corepack section](https://pnpm.io/installation).
- Install dependencies with `pnpm install`
- Required node version is `20.x` or higher.

#### Storybook
Run storybook with `pnpm storybook` and navigate to `http://localhost:6006/` in your browser.

#### Testing
Run tests using `pnpm test-storybook` (requires Storybook to be running).
This command runs the tests through [Storybook's Test Runner](https://storybook.js.org/docs/writing-tests/test-runner).

When adding new components or features, it’s encouraged to write tests as separate play functions in the corresponding Storybook stories. This approach is particularly recommended for complex components. For examples, refer to:

- `src/components/Searchbar/Searchbar.stories.tsx`
- `src/components/ContextMenu/ContextMenu.stories.tsx`

### Pull requests
A lot has been written already about how to write good pull requests. [Here are some](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/best-practices-for-pull-requests) tips to make the process smoother.

## Style guides

### Code Style
This project uses [`Biome`](https://biomejs.dev/) for linting and formatting. The configuration is found in the `biome.jsonc` file.
We recommend using the `biome` CLI to lint and format your code before committing, or using the `biome` extension in your IDE.

Use `pnpm format` to format staged files.

### Commit Messages

This project uses Changesets with the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
specification in order to generate changelogs, communicating the nature of changes.

To include commits in the changelog, please ensure that you include the following keywords:

- Start the commit with `fix:` to trigger a patch (0.0.x) version.
- Start the commit with `feat:` to trigger a minor (0.x.0) version.

Other keywords are also supported, but will not trigger a version bump. These keywords include:
- `chore:` for changes that do not affect the end user, such as refactoring or updating dependencies.
- `docs:` for changes to the documentation.
- `refactor:` for changes that neither fixes a bug nor adds a feature. but improves the codebase.

To make the changelog more specific, you have the option to scope your commits by adding a keyword in parentheses that indicates the area or aspect you are working on. 
For example:
- Modifying documentation for contributing: `docs(contributing): add a section on commit messages`.
- Fixing a bug in the Avatar component: `fix(avatar): fix bug with incorrect image size`.

