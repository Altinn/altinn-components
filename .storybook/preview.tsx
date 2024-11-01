import "../lib/css/global.css";
import "./preview.css";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { Preview, StoryFn } from "@storybook/react";

/** @type { import('@storybook/react').Preview } */
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: StoryFn, data) => {
      const { tags, globals } = data;

      const isStable = (tags || []).includes("stable");
      const state = isStable ? "stable" : "experimental";

      console.log("Data", data);

      return (
        <div data-theme={globals?.theme}>
          <span className="preview-container-stage-tag" data-tag={state}>
            {state}
          </span>
          <Story />
        </div>
      );
    },
    withThemeByDataAttribute({
      themes: {
        global: "global",
        neutral: "neutral",
        company: "company",
        person: "person",
      },
      defaultTheme: "neutral",
    }),
  ],
};

export default preview;
