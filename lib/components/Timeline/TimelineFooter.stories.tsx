import type { Meta, StoryObj } from '@storybook/react-vite';
import { TimelineFooter } from '..';

const meta = {
  title: 'Timeline/TimelineFooter',
  component: TimelineFooter,
  tags: ['autodocs'],
  parameters: {},
  args: {
    children: 'Footer text',
    as: 'footer',
  },
} satisfies Meta<typeof TimelineFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
