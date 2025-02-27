import type { Meta, StoryObj } from '@storybook/react';
import { TimelineFooter } from '..';

const meta = {
  title: 'Timeline/TimelineFooter',
  component: TimelineFooter,
  tags: ['autodocs'],
  parameters: {},
  args: {
    children: 'Footer text',
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
