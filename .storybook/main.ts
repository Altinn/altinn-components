import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../lib/components/**/*.@(mdx)",
    "../lib/components/**/*.stories.@(ts|tsx)",
    "../lib/stories/**/*.stories.@(ts|tsx)",
    "../lib/stories/**/*.@(mdx)",
  ],

  addons: [
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-vitest",
    "@chromatic-com/storybook",
    "storybook-addon-tag-badges",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  typescript: { reactDocgen: false },
};

export default config;
