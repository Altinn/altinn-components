import type { Meta, StoryObj } from '@storybook/react';
import { MetaList } from './MetaList';

const meta = {
  title: 'Meta/MetaList',
  component: MetaList,
  tags: ['autodocs'],
  parameters: {},
  args: {
    items: [
      {
        label: 'Meta 1',
      },
      {
        label: 'Meta 2',
      },
      {
        label: 'Meta 3',
      },
    ],
  },
} satisfies Meta<typeof MetaList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
