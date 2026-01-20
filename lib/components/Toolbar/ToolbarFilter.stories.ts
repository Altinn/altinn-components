import type { Meta, StoryObj } from '@storybook/react-vite';
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
        count: 23,
      },
      {
        label: 'Digdir',
        value: 'digdir',
        count: 21,
      },
      {
        label: 'Helstilsynet',
        value: 'helse',
        count: 12,
      },
      {
        label: 'Arbeids og velferdsetaten (NAV)',
        value: 'nav',
        count: 2,
      },
      {
        label: 'Direktoratet for byggkvalitet',
        value: 'nav',
        count: 2,
      },
    ],
    search: {
      placeholder: 'Søk etter avsender',
      name: 'search-sender',
      clearButtonAltText: 'Tøm søkefelt',
    },
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
