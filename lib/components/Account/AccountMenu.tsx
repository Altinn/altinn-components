'use client';
import { type CSSProperties, useState } from 'react';
import { Menu, type MenuItemProps, type MenuProps, type MenuSearchProps } from '../';

export interface AccountSearchProps extends MenuSearchProps {
  hidden?: boolean;
  getResultsLabel?: (hits: number) => string;
}

export interface AccountMenuItemProps extends MenuItemProps {
  id: string;
  type: 'person' | 'company' | 'group';
  name: string;
}

export interface AccountMenuProps extends MenuProps {
  items: AccountMenuItemProps[];
  search?: AccountSearchProps;
  currentAccount?: AccountMenuItemProps;
  onSelectAccount?: (id: string) => void;
  filterAccount?: (item: AccountMenuItemProps, q: string) => boolean;
  scrollRefStyles?: CSSProperties;
  keyboardEvents?: boolean;
}

const defaultResultsLabel = (hits: number) => `${hits} hits`;

export const AccountMenu = ({
  items = [],
  groups = {},
  search,
  filterAccount,
  onSelectAccount,
  currentAccount,
  isVirtualized,
  keyboardEvents,
}: AccountMenuProps) => {
  const accountMenu: AccountMenuItemProps[] = items.map((item) => ({
    ...item,
    title: item?.title || item.name,
    groupId: item.groupId || 'search',
    selected: item.selected ?? currentAccount?.id === item.id,
    onClick: () => {
      !item.disabled && onSelectAccount?.(item.id);
    },
  }));

  const [filterString, setFilterString] = useState<string>('');

  const defaultFilterAccount = (item: AccountMenuItemProps, q: string) => {
    return (
      item?.name?.toLowerCase().includes(q.toLowerCase()) ||
      item?.description?.toString()?.toLowerCase().includes(q.toLowerCase())
    );
  };

  const applicableFilterAccount = filterAccount || defaultFilterAccount;

  const filteredAccountMenu = filterString
    ? accountMenu
        .filter((item) => applicableFilterAccount(item, filterString))
        .map((item) => {
          return {
            ...item,
            groupId: 'search',
            title: item?.title || item.name,
            highlightWords: [filterString],
          };
        })
    : accountMenu;

  const filterAccountGroups = filterString
    ? {
        search: {
          title:
            search?.getResultsLabel?.(filteredAccountMenu.length) ?? defaultResultsLabel(filteredAccountMenu.length),
        },
      }
    : groups;

  const defaultAccountSearch: MenuSearchProps = {
    name: 'account-search',
    value: filterString,
    placeholder: search?.placeholder ?? 'Find account',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => setFilterString(event.target.value),
    onClear: () => setFilterString(''),
  };

  const accountSwitcher: MenuItemProps[] = [
    ...(filteredAccountMenu.length > 0 ? filteredAccountMenu : [{ id: 'search', groupId: 'search', hidden: true }]),
  ];

  return (
    <Menu
      variant="default"
      search={search && defaultAccountSearch}
      groups={filterAccountGroups}
      items={accountSwitcher}
      isVirtualized={isVirtualized}
      keyboardEvents={keyboardEvents}
    />
  );
};
