import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect } from 'react';
import { type AccountMenuProps, type FilterState, Toolbar } from '..';
import {
  accountMenu,
  accountMenuWithLongList,
  inboxFilters,
  inboxStatusFilter,
  useAccountMenu,
} from '../../../examples';

const meta = {
  title: 'Toolbar/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  parameters: {},
  args: {
    showResultsLabel: `Vis alle treff`,
  },
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accountMenu: {
      ...accountMenu,
      currentAccount: accountMenu.items?.[0],
    } as AccountMenuProps,
    filters: inboxFilters,
  },
};

export const CustomFilterLabel: Story = {
  args: {
    ...Default.args,
    getFilterLabel: (_, value) => {
      return (Array.isArray(value) && value.length > 1 ? `${value.length} selected` : value) as string;
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

export const HiddenFilters: Story = {
  args: {
    filters: inboxFilters,
  },
};

export const WithAccountMenu: Story = {
  args: {
    accountMenu: {
      ...accountMenu,
      currentAccount: accountMenu.items?.[0],
    } as AccountMenuProps,
    filters: inboxFilters,
  },
};

export const WithSearch: Story = {
  args: {
    search: {
      name: 'search',
      placeholder: 'Søk i listen',
    },
    filters: [inboxStatusFilter],
  },
};

export const LongListAccounts: Story = {
  args: {
    accountMenu: {
      ...accountMenuWithLongList,
      currentAccount: accountMenu.items?.[0],
      menuItemsVirtual: {
        isVirtualized: true,
        scrollRefStyles: {
          maxHeight: 'calc(90vh - 8rem)',
        },
      },
    } as AccountMenuProps,
  },
};

export const ControlledStateFilters = (args: typeof Toolbar) => {
  const [filterState, setFilterState] = React.useState<FilterState>({});

  useEffect(() => {
    setTimeout(() => {
      setFilterState({
        from: ['skatt', 'brreg'],
      });
    }, 1);
  }, []);

  return (
    <Toolbar
      {...args}
      filters={Default.args!.filters}
      filterState={filterState}
      onFilterStateChange={setFilterState}
      removeButtonAltText="remove"
    />
  );
};

export const ControlledStateAccount = () => {
  const accountMenu = useAccountMenu({
    accountId: 'company',
  });

  const [filterState, setFilterState] = React.useState<FilterState>({
    from: ['skatt', 'brreg'],
  });

  return (
    <Toolbar
      accountMenu={accountMenu as AccountMenuProps}
      filters={Default.args!.filters}
      filterState={filterState}
      onFilterStateChange={setFilterState}
      removeButtonAltText="remove"
    />
  );
};

export const CombinedRadioCheckboxFilter = () => {
  const accountMenu = useAccountMenu({
    accountId: 'company',
  });

  const [filterState, setFilterState] = React.useState<FilterState>({});

  return (
    <Toolbar
      accountMenu={accountMenu as AccountMenuProps}
      filters={[
        {
          name: 'custom',
          label: 'Custom',
          options: [
            {
              groupId: '1',
              type: 'radio',
              label: 'Radio 1',
              value: 'radio-1',
            },
            {
              groupId: '1',
              type: 'radio',
              label: 'Radio 2',
              value: 'radio-2',
            },
            {
              groupId: '1',
              type: 'radio',
              label: 'Radio 3',
              value: 'radio-3',
            },
            {
              groupId: '2',
              name: 'show-hidden',
              type: 'checkbox',
              label: 'Show hidden',
              value: 'hidden',
            },
            {
              groupId: '2',
              name: 'show-deleted',
              type: 'checkbox',
              label: 'Show deleted',
              value: 'deleted',
            },
          ],
          optionType: 'radio',
        },
      ]}
      filterState={filterState}
      onFilterStateChange={setFilterState}
      removeButtonAltText="remove"
    />
  );
};
