import type { Meta, StoryObj } from '@storybook/react';

import { ToolbarDaterange } from './ToolbarDaterange';

const meta = {
  title: 'Toolbar/ToolbarDaterange',
  component: ToolbarDaterange,
  tags: ['autodocs'],
  parameters: {},
  args: {
    label: 'Velg dato',
  },
} satisfies Meta<typeof ToolbarDaterange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Expanded: Story = {
  args: {
    expanded: true,
  },
};
