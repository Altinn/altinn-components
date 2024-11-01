import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import ThemeProvider from "storybook-addon-theme-provider";
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
      //      attributeName: "data-theme",
    }),

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
  ],
  /*
  decorators: [
    withThemeByDataAttribute({
      themes: {
        global: "global",
        neutral: "neutral",
        company: "company",
        person: "person",
      },
      defaultTheme: "neutral",
      attributeName: "data-theme",
    }),
  ],
  /*
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { parameters }) => {
      // 👇 Make it configurable by reading from parameters
      const { pageLayout } = parameters;
      switch (pageLayout) {
        case "page":
          return (
            // Your page layout is probably a little more complex than this ;)
            <div className="page-layout">
              <Story />
            </div>
          );
        case "page-mobile":
          return (
            <div className="page-mobile-layout">
              <Story />
            </div>
          );
        default:
          // In the default case, don't apply a layout
          return <Story />;
      }
    },
  ],
  */
};

export default preview;
