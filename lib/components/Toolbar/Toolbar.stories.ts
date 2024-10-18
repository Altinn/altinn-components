import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Toolbar } from './Toolbar';

const meta = {
  title: 'Toolbar/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        expanded: true,
        label: 'Ola Nordmann',
        value: 'ola',
        items: [
          {
            avatar: {
              name: 'Ola Nordmann',
            },
            label: 'Ola Nordmann',
          },
          {
            avatar: {
              name: 'Kari Nordmann',
            },
            label: 'Kari Nordmann',
          },
        ],
      },
      {
        name: 'from',
        type: 'filter',
        label: 'Velg avsender',
        multiple: true,
        items: [
          {
            value: 'skatt',
            label: 'Skatteetaten',
          },
          {
            value: 'brreg',
            label: 'Brønnøysund',
          },
          {
            value: 'nav',
            label: 'NAV',
          },
          {
            value: 'oslo',
            label: 'Oslo kommune',
          },
        ],
      },
      {
        name: 'to',
        type: 'filter',
        label: 'Velg mottaker',
        items: [
          {
            value: 'ola',
            label: 'Ola Nordmann',
          },
          {
            value: 'kari',
            label: 'Kari Nordmann',
          },
        ],
      },
      {
        name: 'status',
        type: 'filter',
        label: 'Velg status',
        multiple: true,
        items: [
          {
            group: 1,
            value: 'draft',
            label: 'Utkast',
          },
          {
            group: 1,
            value: 'sent',
            label: 'Sendt',
          },
          {
            group: 2,
            value: 'in-progress',
            label: 'Under arbeid',
          },
          {
            group: 2,
            value: 'requires-attention',
            label: 'Krever handling',
          },
          {
            group: 2,
            value: 'completed',
            label: 'Avsluttet',
          },
        ],
      },
    ],
  },
};

export const ExpandedFilters: Story = {
  args: {
    items: Default?.args?.items?.map((item) => {
      return {
        ...item,
        expanded: true,
      };
    }),
  },
};

export const ExpandedSearch: Story = {
  args: {
    items: [
      {
        expanded: true,
        name: 'status',
        type: 'filter',
        label: 'Velg status',
        multiple: true,
        items: [
          {
            group: 1,
            value: 'draft',
            label: 'Utkast',
          },
          {
            group: 1,
            value: 'sent',
            label: 'Sendt',
          },
          {
            group: 2,
            value: 'in-progress',
            label: 'Under arbeid',
          },
          {
            group: 2,
            value: 'requires-attention',
            label: 'Krever handling',
          },
          {
            group: 2,
            value: 'completed',
            label: 'Avsluttet',
          },
        ],
      },
      {
        type: 'search',
        expanded: true,
      },
    ],
  },
};
