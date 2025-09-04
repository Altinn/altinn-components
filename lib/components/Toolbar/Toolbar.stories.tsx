import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useEffect, useState } from 'react';
import {
  AccountMenu,
  type AccountMenuProps,
  DrawerOrDropdown,
  type FilterState,
  Menu,
  type MenuProps,
  Toolbar,
  ToolbarBase,
  ToolbarButton,
  ToolbarFilterBase,
} from '..';
import {
  accountMenu,
  accountMenuWithLongList,
  inboxFilters,
  inboxStatusFilter,
  useAccountMenu,
} from '../../../examples';

import { ArrowDownRightIcon, Buildings2Icon } from '@navikt/aksel-icons';

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

export const SelectSubaccount = () => {
  const accountMenu = useAccountMenu({
    accountId: 'diaspora',
  });

  const [primaryId, setPrimaryId] = useState('company');
  const [secondaryId, setSecondaryId] = useState('company');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const onToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const currentAccount = accountMenu?.items?.find((item) => item.id === primaryId) || accountMenu?.items?.[0];

  const primaryItems = accountMenu?.items
    ?.filter((item) => !item.parentId && !item.accountIds)
    ?.map((item) => ({
      ...item,
      selected: item.id === currentAccount?.id,
    }));

  const secondaryItems =
    currentAccount &&
    accountMenu?.items
      ?.filter((item) => item.id.startsWith(currentAccount.id))
      ?.map((item) => {
        return {
          ...item,
          selected: item.id === secondaryId,
          icon: item.id === currentAccount.id ? Buildings2Icon : ArrowDownRightIcon,
          // For demo purposes only, should use a proper translation function
          title: item.id === currentAccount.id ? 'Hovedenhet' : 'Underenhet',
          description: 'Org nr: ' + item.uniqueId,
          groupId: null,
        };
      });

  const secondaryItem = secondaryItems?.find((item) => item.selected);

  return (
    <ToolbarBase>
      <ToolbarFilterBase expanded={expandedId === 'primary'}>
        <ToolbarButton type="switch" onToggle={() => onToggle('primary')} active={!!currentAccount}>
          {currentAccount?.name}
        </ToolbarButton>
        <DrawerOrDropdown open={expandedId === 'primary'} drawerTitle="Endre konto" onClose={() => setExpandedId(null)}>
          <AccountMenu
            {...accountMenu}
            items={primaryItems as AccountMenuProps['items']}
            onSelectAccount={(id: string) => {
              setPrimaryId(id);
              setSecondaryId(id);
              setExpandedId(null);
            }}
          />
        </DrawerOrDropdown>
      </ToolbarFilterBase>
      {secondaryItems?.length > 1 && (
        <ToolbarFilterBase expanded={expandedId === 'secondary'}>
          <ToolbarButton type="switch" onToggle={() => onToggle('secondary')} active={!!currentAccount}>
            {secondaryItem?.title}
          </ToolbarButton>
          <DrawerOrDropdown
            open={expandedId === 'secondary'}
            drawerTitle="Endre konto"
            onClose={() => setExpandedId(null)}
          >
            <Menu
              items={
                secondaryItems?.map((item) => {
                  return {
                    ...item,
                    onClick: () => {
                      setSecondaryId(item.id);
                      setExpandedId(null);
                    },
                  };
                }) as unknown as MenuProps['items']
              }
            />
          </DrawerOrDropdown>
        </ToolbarFilterBase>
      )}
    </ToolbarBase>
  );
};
