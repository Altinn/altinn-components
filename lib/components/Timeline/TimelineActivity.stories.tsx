import type { Meta, StoryObj } from '@storybook/react';
import { TimelineActivity } from '..';

const meta = {
  title: 'Timeline/TimelineActivity',
  component: TimelineActivity,
  tags: ['autodocs'],
  parameters: {},
  args: {
    datetime: '2024-12-12 11:15',
    byline: '12. desember 2024 kl 11.15',
    children: 'An activity',
  },
} satisfies Meta<typeof TimelineActivity>;

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
