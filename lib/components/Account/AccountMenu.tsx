'use client';
import { type CSSProperties, useState } from 'react';
import { Menu, type MenuItemProps, type MenuProps, type MenuSearchProps } from '../';
import type { MenuItemsVirtualProps } from '../Menu/MenuItems';
interface AccountSearchProps extends MenuSearchProps {
  getResultsLabel?: (hits: number) => string;
  hidden?: boolean;
}

interface AccountMenuItemProps extends MenuItemProps {
  id: string;
  type: 'person' | 'company' | 'group';
  name: string;
}

export interface AccountMenuProps extends MenuProps {
  items: AccountMenuItemProps[];
  search?: AccountSearchProps;
  currentAccount?: AccountMenuItemProps;
  onSelectAccount?: (id: string) => void;
  menuItemsVirtual?: MenuItemsVirtualProps;
  scrollRefStyles?: CSSProperties;
}

const defaultResultsLabel = (hits: number) => `${hits} hits`;

export const AccountMenu = ({
  items = [],
  groups = {},
  search,
  onSelectAccount,
  currentAccount,
  menuItemsVirtual,
}: AccountMenuProps) => {
  const accountMenu: AccountMenuItemProps[] = items.map((item) => ({
    ...item,
    title: item?.title || item.name,
    groupId: item.groupId || 'search',
    selected: item.selected ?? currentAccount?.id === item.id,
    onClick: () => onSelectAccount?.(item.id),
  }));

  const [filterString, setFilterString] = useState<string>('');

  const filteredAccountMenu = filterString
    ? accountMenu
        .filter((item) => item?.name?.toLowerCase().includes(filterString.toLowerCase()))
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
            search?.getResultsLabel?.(filteredAccountMenu.length) ?? defaultResultsLabel(filteredAccountMenu.length),
        },
      }
    : groups;

  const accountSearchItem: MenuSearchProps = {
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
      theme="default"
      search={search && accountSearchItem}
      groups={filterAccountGroups}
      items={accountSwitcher}
      menuItemsVirtual={menuItemsVirtual}
    />
  );
};
