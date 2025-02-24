import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './';

const meta = {
  title: 'Timeline/Timeline',
  component: Timeline,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    items: [
      {
        children: 'Timeline section',
      },
      {
        datetime: '2024-12-12 11:15',
        dateline: '12. desember 2024',
        children: 'With byline',
      },
      {
        size: 'sm',
        avatar: {
          name: 'Per Person',
        },
        datetime: '2024-12-12 11:15',
        dateline: '12. desember 2024',
        children: 'XS avatar and byline',
      },
      {
        size: 'sm',
        avatar: {
          name: 'Per Person',
        },
        datetime: '2024-12-12 11:15',
        dateline: '12. desember 2024',
        children: 'Small avatar and byline',
      },
      {
        size: 'lg',
        avatar: {
          type: 'company',
          name: 'Bergen bar',
        },
        byline: 'Bergen bar',
        datetime: '2024-12-12 11:15',
        dateline: '12. desember 2024',
        children: 'Large avatar and byline',
      },
    ],
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const ActivityLog: Story = {
  args: {
    items: [{}],
  },
};
