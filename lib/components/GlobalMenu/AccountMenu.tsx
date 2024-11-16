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
  id?: string;
  groupId?: string;
  selected?: boolean;
}

export interface AccountMenuProps {
  accounts?: AccountMenuItem[];
  accountGroups?: MenuItemGroups;
  accountSearch?: AccountSearch;
}

const defaultResultLabel = (hits: number) => `${hits} hits`;

export const AccountMenu = ({ accounts = [], accountGroups = {}, accountSearch }: AccountMenuProps) => {
  const accountMenu: MenuItemProps[] = accounts.map((account) => ({
    id: account.name,
    groupId: account.groupId || 'search',
    selected: account.selected,
    title: account.name,
    avatar: {
      type: account.type,
      name: account.name,
    },
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
  };

  const accountSwitcher: MenuItemProps[] = [
    ...(filteredAccountMenu.length > 0 ? filteredAccountMenu : [{ id: 'search', groupId: 'search', hidden: true }]),
  ];

  return <Menu theme="global" search={accountSearchItem} groups={filterAccountGroups} items={accountSwitcher} />;
};
