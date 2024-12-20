import type { Meta, StoryObj } from '@storybook/react';
import { dialogListItems } from '../../../examples';
import { DialogList } from './DialogList';
const meta = {
  title: 'Dialog/DialogList',
  component: DialogList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    items: dialogListItems,
  },
} satisfies Meta<typeof DialogList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Grouped: Story = {
  args: {
    groups: {
      '2023-01': {
        title: 'Januar 2023',
      },
      '2023-02': {
        title: 'Februar 2023',
      },
      '2023-10': {
        title: 'Oktober 2023',
      },
    },
  },
};
