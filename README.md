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

## Requirements

`React` `>=18`in your project as a peer dependency. And `react-dom` if needed.

## Usage
Wrap your application in RootProvider to enable shared context across all components. Here’s a basic setup:

```tsx
import { RootProvider } from '@altinn/components';

function App() {
  return (
    <RootProvider>
      { /* Your application here */ }
    </RootProvider>
  );
}
```

To use the components in your application, you need to import the components you want to use from the package. For example:

```tsx
// example: import the Avatar component and type
import { Avatar, type AvatarVariant } from '@altinn/components';
```
and import the css file in your application once, e.g. in your css:
```ts
import '@altinn/altinn-components/lib/css/global.css';
```
for correct `font-family` and minimal collection of resets.


## Documentation
The documentation for the components can be found in the [Storybook](https://altinn.github.io/altinn-components)
Components are decorated with tags to show the current status of the component. 

The tags are:
- `@outdated` - The component is out of sync with latest design.
- `@beta` - The component is in beta and is more likely to have flaws or missing features.
- `@experimental` - The component is experimental and is work in progress. Recommended not to use.
- `@deprecated` - The component is deprecated and should not be used.

The main motivation behind having tags relives the pressure of having to make everything perfect before releasing it for use. 
It also allows us to get feedback on the components in an early stage.