import type { Meta, StoryObj } from '@storybook/react';
import { ToolbarFilter } from './ToolbarFilter';

const meta = {
  title: 'Toolbar/ToolbarFilter',
  component: ToolbarFilter,
  tags: ['autodocs'],
  parameters: {},
  args: {
    label: 'Velg avsender',
    options: [
      {
        label: 'Skatteetaten',
        value: 'skatt',
      },
      {
        label: 'Digdir',
        value: 'digdir',
      },
      {
        label: 'Helstilsynet',
        value: 'helse',
      },
    ],
  },
} satisfies Meta<typeof ToolbarFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    name: 'single',
    optionType: 'radio',
  },
};

export const Multiple: Story = {
  args: {
    name: 'multiple',
    optionType: 'checkbox',
  },
};
