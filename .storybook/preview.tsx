import "../lib/css/global.css";
import "./preview.css";
import {StoryFn} from "@storybook/react";

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
    (Story: StoryFn, { tags }: { tags: string[]}) => {
    const isStable = (tags || []).includes('stable');
    const state = isStable ? 'stable' : 'experimental';
    return (
        <>
          <span className='preview-container-stage-tag' data-tag={state}>
            {state}
          </span>
          <Story />
        </>
    );
    },
  ],
};



export default preview;
