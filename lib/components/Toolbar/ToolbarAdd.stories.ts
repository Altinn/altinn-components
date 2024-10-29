import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ToolbarAdd } from './ToolbarAdd';

const meta = {
  title: 'Toolbar/ToolbarAdd',
  component: ToolbarAdd,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof ToolbarAdd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        label: 'Velg dato',
      },
    ],
  },
};
