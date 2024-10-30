import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ToolbarMenu } from './ToolbarMenu';

const meta = {
  title: 'Toolbar/ToolbarMenu',
  component: ToolbarMenu,
  tags: ['autodocs'],
  parameters: {},
  args: {
    label: 'Skattetetaten',
    value: 'skatt',
    items: [
      {
        title: 'Skatteetaten',
      },
      {
        title: 'Digdir',
      },
      {
        title: 'Helstilsynet',
      },
    ],
  },
} satisfies Meta<typeof ToolbarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Expanded: Story = {
  args: {
    expanded: true,
  },
};
