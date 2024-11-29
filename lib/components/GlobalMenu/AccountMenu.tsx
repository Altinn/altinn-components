'use client';
import { useState } from 'react';
import { Menu, type MenuItemGroups, type MenuItemProps, type MenuSearchProps } from '../Menu';

export interface AccountSearch extends MenuSearchProps {
  getResultsLabel?: (hits: number) => string;
  hidden?: boolean;
}

export interface AccountMenuItem {
  type: 'person' | 'company';
  name: string;
  id: string;
  groupId?: string;
  selected?: boolean;
}

export interface AccountMenuProps {
  accounts?: AccountMenuItem[];
  accountGroups?: MenuItemGroups;
  accountSearch?: AccountSearch;
  currentAccount?: AccountMenuItem;
  onSelectAccount?: (id: string) => void;
}

const defaultResultLabel = (hits: number) => `${hits} hits`;

export const AccountMenu = ({
  accounts = [],
  accountGroups = {},
  accountSearch,
  onSelectAccount,
  currentAccount,
}: AccountMenuProps) => {
  const accountMenu: MenuItemProps[] = accounts.map((account) => ({
    id: account.id || account.name,
    groupId: account.groupId || 'search',
    selected: account.selected ?? currentAccount?.id === account.id,
    title: account.name,
    avatar: {
      type: account.type,
      name: account.name,
    },
    onClick: () => onSelectAccount?.(account.id || account.name),
  }));

  const [filterString, setFilterString] = useState<string>('');

  const filteredAccountMenu = filterString
    ? accountMenu
        .filter((item) => item?.title?.toLowerCase().includes(filterString.toLowerCase()))
        .map((item) => {
          return {
            ...item,
            groupId: 'search',
          };
        })
    : accountMenu;

  const filterAccountGroups = filterString
    ? {
        search: {
          title:
            accountSearch?.getResultsLabel?.(filteredAccountMenu.length) ??
            defaultResultLabel(filteredAccountMenu.length),
        },
      }
    : accountGroups;

  const accountSearchItem: MenuSearchProps = {
    name: 'account-search',
    value: filterString,
    placeholder: accountSearch?.placeholder ?? 'Find account',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => setFilterString(event.target.value),
    onClear: () => setFilterString(''),
  };

  const accountSwitcher: MenuItemProps[] = [
    ...(filteredAccountMenu.length > 0 ? filteredAccountMenu : [{ id: 'search', groupId: 'search', hidden: true }]),
  ];

  return (
    <Menu
      theme="global"
      search={accountSearch && accountSearchItem}
      groups={filterAccountGroups}
      items={accountSwitcher}
    />
  );
};
