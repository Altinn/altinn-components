import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { Preview, StoryFn } from "@storybook/react";
import { StoryDecorator } from "./StoryDecorator";
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