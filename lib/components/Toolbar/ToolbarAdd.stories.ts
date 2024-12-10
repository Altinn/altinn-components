import type { Meta, StoryObj } from '@storybook/react';
import { ToolbarAdd } from './ToolbarAdd';

const meta = {
  title: 'Toolbar/ToolbarAdd',
  component: ToolbarAdd,
  tags: ['autodocs'],
  parameters: {},
  args: {
    id: 'toolbar-add',
  },
} satisfies Meta<typeof ToolbarAdd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 'choose-date',
        label: 'Velg dato',
      },
    ],
  },
};
