import type { Meta, StoryFn } from '@storybook/react-vite';
import { skipLink as skipLinkExample } from '../../../examples/layout';
import { Typography } from '../Typography';
import { SkipLink } from './SkipLink.tsx';

type Story = StoryFn<typeof SkipLink>;

export default {
  title: 'Layout/SkipLink',
  component: SkipLink,
  args: skipLinkExample,
} satisfies Meta;

export const Preview: Story = (args) => (
  <>
    <Typography>
      Tab to be able to skip to <kbd>tab</kbd>.
      <SkipLink {...args} href="#main">
        Jump to #main
      </SkipLink>
    </Typography>
    <main id="main" tabIndex={-1}>
      Område som skal motta fokus
    </main>
  </>
);
