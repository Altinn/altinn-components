import { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: [
    "../lib/components/**/*.@(mdx)",
    "../lib/components/**/*.stories.@(ts|tsx)",
    "../lib/stories/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-themes",
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "storybook-addon-tag-badges",
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: false,
  },
  docs: {},
};
export default config;
