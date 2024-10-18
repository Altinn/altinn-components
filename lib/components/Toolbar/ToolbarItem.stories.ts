import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ToolbarItem } from './ToolbarItem';

const meta = {
  title: 'Toolbar/ToolbarItem',
  component: ToolbarItem,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof ToolbarItem>;

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
