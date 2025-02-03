# altinn-components

The next frontend of altinn.no is developed by multiple product teams, all working toward the shared goal of delivering a seamless, unified experience for the end users — ensuring they perceive it as a single and robust product.
This package represents a collaborative effort between designers and developers across these teams, consolidating solutions to shared challenges. 
It provides Altinn-specific React components tailored to address the common UI needs of these specific teams.   

Today these teams are [Team Arbeidsflate](https://github.com/digdir/dialogporten-frontend), [Team authorization](https://github.com/Altinn/altinn-access-management-frontend), and Team Portal.

Note that this package is specifically designed to meet the unique needs of the aforementioned teams and is not intended to serve as a general-purpose library. 
We already have the amazing [Norwegian public sector's Design System](https://designsystemet.no/), and we aim to incorporate its elements wherever it makes sense, ensuring alignment and leveraging its strengths while adapting to the specific requirements of Altinn.

Currently, we do not use components from the design system _directly_ but rely on its token structure and continue to explore opportunities for deeper integration. 
This approach helps us align with brand guidelines and the broader vision of a unified Altinn product. 

## Feedback and questions
Keep in mind that this package is a work in progress and will be updated continuously. 
If you have any feedback or questions, please reach out to us on Github.

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

The main motivation behind having tags is relieving the pressure of having to make everything stable before releasing it for use. 
It also allows us to get feedback on the components in an early stage.

## Storybook test runner (accessibility)
Config for the storybook test runner is placed under .storybook/test-runner.ts


First you will need to run the storybook: 
```
pnpm storybook
```
-

When that is done, in another terminal run following command to test all the stories for accessibility
```
pnpm test-storybook
```
 - 

To test a specific file, run... 
```
pnpm test-storybook --watch
```
...and press 'p' to choose filtering by file name. Then start typing the name of the storybook file f.ex. 'badge'. The helper will list all the files matching your input. 

Hit enter to test the file. 

If there is more files matching your input, they will also be tested.

- 
If the storybook cli runs all the tests even with --watch flag, alternatively you can simply run: 

```
pnpm test-storybook --watch 'MyComponent.stories.tsx'
```

- 
To skip the test add 'skip-test' string into the tags array for the test you want to exclude. That option is defined in the test-runner.ts file. 
Currently all the tests under stories/Demo and docs are excluded as the accessibility test is not needed there.