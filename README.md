# altinn-components
This package is a set of reusable components for building web applications for [Altinn 3](https://docs.altinn.studio/nb/community/about/).
This is *not* a general purpose library, but a library of components that are specifically designed for the Altinn platform, to ensure
a consistent look and feel across all applications. It also contains a storybook with stories explaining the purpose and usage of each component, and
with real examples of how to use them separately or together (composition).

## Installation
To install the package, run the following command:

```bash
# for npm users
npm install @altinn/components
# for yarn users
yarn add @altinn/components 
# for pnpm users
pnpm add @altinn/components
```
Tested with Node.js 20.x <

## Usage
To use the components in your application, you need to import the components you want to use from the package. For example:

```tsx
// example: import the Avatar component and type
import { Avatar, type AvatarVariant } from '@altinn/components';
```
and import the css file in your application once:
```ts
import '@altinn/components/dist/index.css';
```
for correct `font-family` and minimal collection of resets.

## Documentation
The documentation for the components can be found in the [Storybook](https://altinn.github.io/altinn-components)