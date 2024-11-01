import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "./ThemeProvider";
import "../lib/css/global.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        global: "global",
        neutral: "neutral",
        company: "company",
        person: "person",
      },
      defaultTheme: "neutral",
      Provider: ThemeProvider,
    }),
    /*
    (Story: StoryFn, data) => {
      const { tags, parameters } = data;

      console.log("DATA", data);

      const isStable = (tags || []).includes("stable");
      const state = isStable ? "stable" : "experimental";
      return (
        <>
          <span className="preview-container-stage-tag" data-tag={state}>
            {state}
          </span>
          <Story />
        </>
      );
    },
    */
  ],
};

export default preview;
