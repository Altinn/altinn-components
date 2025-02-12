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
        badge: {
          label: '23',
        },
      },
      {
        label: 'Digdir',
        value: 'digdir',
        badge: {
          label: '21',
        },
      },
      {
        label: 'Helstilsynet',
        value: 'helse',
        badge: {
          label: '12',
        },
      },
      {
        label: 'Arbeids og velferdsetaten (NAV)',
        value: 'nav',
        badge: {
          label: '2',
        },
      },
      {
        label: 'Direktoratet for byggkvalitet',
        value: 'nav',
        badge: {
          label: '2',
        },
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
