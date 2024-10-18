import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ToolbarOptions } from './ToolbarOptions';

const meta = {
  title: 'Toolbar/ToolbarOptions',
  component: ToolbarOptions,
  tags: ['autodocs'],
  parameters: {},
  args: {
    items: [
      {
        label: 'Skatteetaten',
        value: '1',
      },
      {
        label: 'Digdir',
        value: '2',
      },
      {
        label: 'Helstilsynet',
        value: '3',
      },
    ],
  },
} satisfies Meta<typeof ToolbarOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    label: 'Single',
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
    label: 'Multiple',
  },
};
