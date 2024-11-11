import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { type FilterState, Toolbar } from './Toolbar';

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
    menu: {
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
    filters: [
      {
        removable: true,
        name: 'from',
        optionType: 'checkbox',
        label: 'Velg avsender',
        options: [
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
        removable: true,
        name: 'to',
        optionType: 'radio',
        label: 'Velg mottaker',
        options: [
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
        removable: true,
        name: 'status',
        optionType: 'radio',
        label: 'Velg status',
        options: [
          {
            groupId: '1',
            value: 'draft',
            label: 'Utkast',
          },
          {
            groupId: '1',
            value: 'sent',
            label: 'Sendt',
          },
          {
            groupId: '2',
            value: 'in-progress',
            label: 'Under arbeid',
          },
          {
            groupId: '2',
            value: 'requires-attention',
            label: 'Krever handling',
          },
          {
            groupId: '2',
            value: 'completed',
            label: 'Avsluttet',
          },
        ],
      },
    ],
  },
};

export const CustomFilterLabel: Story = {
  args: {
    ...Default.args,
    getFilterLabel: (name, value) => {
      return Array.isArray(value) && value.length > 1 ? `${value.length} selected` : value;
    },
  },
};

export const NoFilters: Story = {
  args: {
    ...Default.args,
    filters: [],
  },
};

export const StaticFilters: Story = {
  args: {
    filters: Default?.args?.filters?.map((item) => {
      return {
        ...item,
        removable: false,
      };
    }),
  },
};

export const ControlledStateFilters = () => {
  const [filterState, setFilterState] = React.useState<FilterState>({
    from: ['skatt', 'brreg'],
  });
  return <Toolbar filters={Default.args!.filters} filterState={filterState} onFilterStateChange={setFilterState} />;
};

export const FilterAndSearch: Story = {
  args: {
    search: {
      placeholder: 'Søk etter filter',
    },
    filters: [
      {
        name: 'status',
        optionType: 'checkbox',
        label: 'Velg status',
        options: [
          {
            groupId: '1',
            value: 'draft',
            label: 'Utkast',
          },
          {
            groupId: '1',
            value: 'sent',
            label: 'Sendt',
          },
          {
            groupId: '2',
            value: 'in-progress',
            label: 'Under arbeid',
          },
          {
            groupId: '2',
            value: 'requires-attention',
            label: 'Krever handling',
          },
          {
            groupId: '2',
            value: 'completed',
            label: 'Avsluttet',
          },
        ],
      },
    ],
  },
};
