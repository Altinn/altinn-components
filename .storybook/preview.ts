import { withThemeByDataAttribute } from "@storybook/addon-themes";
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
};

export default preview;
