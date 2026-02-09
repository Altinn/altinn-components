# altinn-components

The next frontend of altinn.no is developed by multiple product teams, all working toward the shared goal of delivering a seamless, unified experience for the end users — ensuring they perceive it as a single and robust product.
This package represents a collaborative effort between designers and developers across these teams, consolidating solutions to shared challenges.
It provides Altinn-specific React components tailored to address the common UI needs of these specific teams.

Today these teams are [Team Arbeidsflate](https://github.com/digdir/dialogporten-frontend), [Team Authorization](https://github.com/Altinn/altinn-access-management-frontend), and Team Portal.

Note that this package is specifically designed to meet the unique needs of the aforementioned teams and is not intended to serve as a general-purpose library.
We already have the amazing [Norwegian public sector's Design System](https://designsystemet.no/), and we aim to incorporate its elements wherever it makes sense, ensuring alignment and leveraging its strengths while adapting to the specific requirements of Altinn.


## Strategy for Adopting Designsystemet

As of April 10th, 2025, we’ve decided to start importing components from the [Norwegian public sector’s Design System](https://designsystemet.no/) as needed. These components will be exported from our own library using the `DS<Component>` prefix.
Consumers of `altinn-components` will be able to use these components directly, without needing `@digdir/designsystemet` as a dependency.

This approach allows us to:

- Avoid conflicts with existing components during the transition phase.
- Experiment with and adapt the appearance and behavior to fit the Altinn brand.
- Gradually replace legacy components: once a `DS<Component>` has been sufficiently customized and tested, we will remove the `DS` prefix and promote it to a first-class component.
- Leverage the strengths of the Design System while maintaining full control over the visual consistency of our solutions.
- Maintain a curated and well-integrated selection of components from the `@digdir/designsystemet` with the look and feel of Altinn.

This strategy is a natural progression from our previous approach, where we did not use components from `@digdir/designsystemet` directly but relied on its token structure and explored opportunities for deeper integration.
That approach helped us move faster and build understanding — and now we're ready to take the next step.

## Design tokens and CSS build process

This package builds on the Norwegian public sector’s Design System by combining
upstream design tokens with Altinn-specific extensions and overrides.

To support this, we maintain a small internal build script that:

- Imports and syncs tokens from `@digdir/designsystemet`
- Applies Altinn brand specifics and overrides (from `./lib/css/tokens/altinn-design-tokens`)
- Builds the final CSS and tokens used by this library

### How to use

1. Go to https://theme.designsystemet.no/no/
2. Select "Continue from config file".
3. Paste the config from `./lib/css/tokens/designsystemet.config.json` and load theme.
4. Do your magic
5. Settings (cog) and "Ta i bruk tema", and replace updated content with `./lib/css/tokens/designsystemet.config.json`
6. Run `pnpm build-tokens` - This will generate updated tokens and css in the `design-tokens-build` directory.

CSS is already loaded through `./lib/css/global.css`. You are good to go!

### Directory structure

```txt
lib/css/tokens/
  base/         # Tokens originating from @digdir/designsystemet
  extensions/   # Altinn-specific additions and overrides
  build/        # Generated output (CSS + tokens)


## Feedback and questions

Keep in mind that this package is a work in progress and will be updated continuously.
If you have any feedback or questions, please reach out to us on Github.

## Installation

To install the package, run the following command:

```bash
# for npm users
npm install @altinn/altinn-components
# for yarn users
yarn add @altinn/altinn-components
# for pnpm users
pnpm add @altinn/altinn-components
```

Tested with Node.js 20.x <

## Requirements

`React` `>=18`in your project as a peer dependency. And `react-dom` if needed. We do strongly recommend using `React` `>=19`.

## Usage

Wrap your application in RootProvider to enable shared context across all components. Here’s a basic setup:

```tsx
import { RootProvider } from "@altinn/components";

function App() {
  return <RootProvider>{/* Your application here */}</RootProvider>;
}
```

To use the components in your application, you need to import the components you want to use from the package. For example:

```tsx
// example: import the Avatar component and type
import { Avatar, type AvatarVariant } from "@altinn/components";
```

and import the css file in your application once, e.g. in your css:

```ts
import "@altinn/altinn-components/lib/css/global.css";
```

for correct and minimal collection of global resets and variables.

Ensure that you have the font faces for the Inter font family properly loaded:

```html
  <link rel="stylesheet" href="https://altinncdn.no/fonts/inter/v4.1/inter.css" integrity="sha384-OcHzc/By/OPw9uJREawUCjP2inbOGKtKb4A/I2iXxmknUfog2H8Adx71tWVZRscD" crossorigin="anonymous">  
```

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

- If the storybook cli runs all the tests even with --watch flag, alternatively you can simply run:

```
pnpm test-storybook --watch 'MyComponent.stories.tsx'
```

- To skip the test add 'skip-test' string into the tags array for the test you want to exclude. That option is defined in the test-runner.ts file.
  Currently all the tests under stories/Demo and docs are excluded as the accessibility test is not needed there.

## Screenshot Testing

Screenshot tests catch visual regressions automatically by comparing component screenshots to baseline images.

```bash
# Run all screenshot tests
pnpm test:screenshots

# Test specific component
pnpm test:screenshots:filter "Button"

# Update baselines after intentional changes
pnpm test:screenshots-update
```


## Skipping Screenshot Testing

Some cases are not possible to screenshot tests. An example is virtualized list where we are generating randomized content every render. In such cases the screenshot: { skip: true } parameter should be added in the component/demo story. 
#### Example: VirtualizedMenu.stories.tsx
```bash
export const Virtualized = () => {
  const { items, groups } = useMemo(() => useRandomMenuItems(10000), []);
  return <Menu virtualized searchable items={items as MenuItemProps[]} groups={groups} size="md" />;
};
Virtualized.parameters = {
  //can't screenshot tests with useRandomMenuItems
  screenshot: { skip: true },
};
```


