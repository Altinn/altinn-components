import { definePreview } from "@storybook/react-vite";
import addonA11y from "@storybook/addon-a11y";

import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Decorator } from "@storybook/react-vite";

import type { A11yParameters } from "@storybook/addon-a11y";
import type { Rule } from "axe-core";
import { getRules } from "axe-core";

import { StoryDecorator } from "./StoryDecorator";

import "../lib/css/global.css";
import "./preview.css";

const enabledTags = [
  "wcag2a",
  "wcag2aa",
  "wcag21a",
  "wcag21aa",
  "wcag22aa",
  "best-practice",
] as const;

const enabledRules: Rule[] = getRules([...enabledTags]).map((ruleMetadata) => ({
  id: ruleMetadata.ruleId,
  enabled: true,
}));

const a11yParameters = {
  context: "#story-in-story-decorator-root",
  config: {
    rules: enabledRules,
  },
} satisfies A11yParameters;

const storyDecorator: Decorator = (Story, context) => {
  const { tags, globals } = context;
  return (
      <StoryDecorator tags={tags} theme={globals?.theme}>
        <Story />
      </StoryDecorator>
  );
};

export default definePreview({
  addons: [addonA11y()],

  parameters: {
    docs: {
      source: { type: "code" },
    },
    a11y: a11yParameters,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Docs",
          "Layout",
          "Account",
          "Search",
          "Menu",
          "List",
          "Timeline",
          "Dialog",
          [
            "Dialog",
            "DialogHeader",
            "DialogBody",
            "DialogHistory",
            "DialogMetadata",
            "DialogList",
            "DialogListItem",
          ],
        ],
      },
    },
  },

  decorators: [
    storyDecorator,
    withThemeByDataAttribute({
      themes: {
        neutral: "neutral",
        company: "company",
        person: "person",
      },
      defaultTheme: "company",
    }),
  ],
});
