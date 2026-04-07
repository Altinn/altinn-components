import type { StorybookConfig } from "@storybook/react-vite";

// In screenshot mode, only include component stories (not full-page demo stories)
const screenshotMode = !!process.env.SCREENSHOT_MODE;

const config: StorybookConfig = {
  stories: [
    "../lib/components/**/*.@(mdx)",
    "../lib/components/**/*.stories.@(ts|tsx)",
    ...(screenshotMode
      ? []
      : ["../lib/stories/**/*.stories.@(ts|tsx)", "../lib/stories/**/*.@(mdx)"]),
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
