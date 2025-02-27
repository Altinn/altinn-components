import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { Preview, StoryFn } from "@storybook/react";
import { StoryDecorator } from "./StoryDecorator";
import "../lib/css/global.css";
import "./preview.css";
import { A11yParameters } from "@storybook/addon-a11y";
import { Rule, getRules } from "axe-core";

/** @type { import('@storybook/react').Preview } */

const enabledTags = [
  "wcag2a",
  "wcag2aa",
  "wcag21a",
  "wcag21aa",
  "wcag22aa",
  "best-practice",
];

const enabledRules: Rule[] = getRules(enabledTags).map((ruleMetadata) => ({
  id: ruleMetadata.ruleId,
  enabled: true,
}));

const a11y: A11yParameters = {
  config: {
    rules: enabledRules,
  },
  element: "#story-in-story-decorator-root",
};

const preview: Preview = {
  parameters: {
    a11y,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Docs", "Layout", "Search", "Menu", "List", "Timeline", "Dialog", ["Dialog", "DialogHeader", "DialogBody", "DialogHistory", "DialogMetadata", "DialogList", "DialogListItem"]],
      },
    },
  },
  decorators: [
    (Story: StoryFn, data) => {
      const { tags, globals } = data;
      return (
        <StoryDecorator tags={tags} theme={globals?.theme}>
          <Story />
        </StoryDecorator>
      );
    },
    withThemeByDataAttribute({
      themes: {
        neutral: "neutral",
        company: "company",
        person: "person",
      },
      defaultTheme: "company",
    }),
  ],
};

export default preview;
