import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ToolbarFilter } from './ToolbarFilter';

const meta = {
  title: 'Toolbar/ToolbarFilter',
  component: ToolbarFilter,
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
} satisfies Meta<typeof ToolbarFilter>;

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
