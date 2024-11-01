<<<<<<< HEAD
import React from "react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { Preview, StoryFn } from "@storybook/react";
import { StoryDecorator } from "./StoryDecorator";
=======
import { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "./ThemeProvider";
>>>>>>> 6df61e2 (etc)
import "../lib/css/global.css";

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
<<<<<<< HEAD
    (Story: StoryFn, data) => {
      const { tags, globals } = data;

      return (
        <StoryDecorator tags={tags} theme={globals?.theme}>
          <Story />
        </StoryDecorator>
      );
    },
    withThemeByDataAttribute({
=======
    /*
    withThemeFromJSXProvider({
>>>>>>> 6df61e2 (etc)
      themes: {
        global: "global",
        neutral: "neutral",
        company: "company",
        person: "person",
      },
      defaultTheme: "neutral",
    }),
<<<<<<< HEAD
=======
  */
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
>>>>>>> 6df61e2 (etc)
  ],
};

export default preview;
