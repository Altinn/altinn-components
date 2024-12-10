import type { Meta, StoryObj } from '@storybook/react';
import { ToolbarSearch } from './ToolbarSearch';

const meta = {
  title: 'Toolbar/ToolbarSearch',
  component: ToolbarSearch,
  tags: ['autodocs'],
  parameters: {},
  args: {
    name: 'search',
  },
} satisfies Meta<typeof ToolbarSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
