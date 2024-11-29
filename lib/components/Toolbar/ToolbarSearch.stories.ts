import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ToolbarSearch } from './ToolbarSearch';

const meta = {
  title: 'Toolbar/ToolbarSearch',
  component: ToolbarSearch,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof ToolbarSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClear: fn(),
  },
};
