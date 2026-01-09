import type { Preview, Decorator } from "@storybook/react-vite";
import * as storybookAddonTagBadges from "storybook-addon-tag-badges/preview";
import addonDocs from "@storybook/addon-docs";
import addonA11y from "@storybook/addon-a11y";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { A11yParameters } from "@storybook/addon-a11y";
import type { Rule } from "axe-core";
import { getRules } from "axe-core";

import { StoryDecorator } from "./StoryDecorator";

import "../lib/css/global.css";
import "./preview.css";

const enabledTags = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"] as const;

const enabledRules: Rule[] = getRules([...enabledTags]).map((ruleMetadata) => ({
  id: ruleMetadata.ruleId,
  enabled: true,
}));

export const parameters = {
  docs: { source: { type: "code" } },
  a11y: {
    context: "#story-in-story-decorator-root",
    config: { rules: enabledRules },
    test: "todo",
  } satisfies A11yParameters,
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
} satisfies Preview["parameters"];

export const decorators: Decorator[] = [
  (Story, context) => {
    const { tags, globals } = context;
    return (
        <StoryDecorator tags={tags} theme={globals?.theme}>
          <Story />
        </StoryDecorator>
    );
  },
  withThemeByDataAttribute({
    themes: { neutral: "neutral", company: "company", person: "person" },
    defaultTheme: "company",
  }),
];

export const addons = [addonA11y(), addonDocs(), storybookAddonTagBadges];

const preview: Preview = { parameters, decorators, addons };
export default preview;
