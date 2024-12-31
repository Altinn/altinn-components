import type { Meta, StoryObj } from '@storybook/react';

import { ToolbarDaterange } from './ToolbarDaterange';

const meta = {
  title: 'Toolbar/ToolbarDaterange',
  component: ToolbarDaterange,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    label: 'Velg dato',
    value: '2021-05-26',
    title: 'Dato',
  },
} satisfies Meta<typeof ToolbarDaterange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
