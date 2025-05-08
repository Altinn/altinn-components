'use client';
import { useState } from 'react';
import type { AvatarProps, BadgeProps } from '../';
import { Menu, type MenuItemGroups, type MenuItemProps, type MenuSearchProps } from '../Menu';
import type { MenuItemsVirtualProps } from '../Menu/MenuItems';
export interface AccountSearchProps extends MenuSearchProps {
  getResultsLabel?: (hits: number) => string;
  hidden?: boolean;
}

export interface AccountMenuItem {
  type: 'person' | 'company';
  name: string;
  id: string;
  groupId?: string;
  selected?: boolean;
  items?: AvatarProps[];
  badge?: BadgeProps | undefined;
  alertBadge?: BadgeProps | undefined;
}

export interface AccountMenuProps {
  accounts?: AccountMenuItem[];
  accountGroups?: MenuItemGroups;
  accountSearch?: AccountSearchProps;
  currentAccount?: AccountMenuItem;
  onSelectAccount?: (id: string) => void;
  menuItemsVirtual?: MenuItemsVirtualProps;
  scrollRefStyles?: React.CSSProperties;
}

const defaultResultLabel = (hits: number) => `${hits} hits`;

export const AccountMenu = ({
  accounts = [],
  accountGroups = {},
  accountSearch,
  onSelectAccount,
  currentAccount,
  menuItemsVirtual,
}: AccountMenuProps) => {
  const accountMenu: MenuItemProps[] = accounts.map((account) => ({
    id: account.id || account.name,
    groupId: account.groupId || 'search',
    selected: account.selected ?? currentAccount?.id === account.id,
    title: account.name,
    ...(account?.items && {
      avatarGroup: {
        size: 'sm',
        items: account.items.map((item) => ({
          name: item.name,
          type: item.type || account.type,
        })),
      },
    }),
    ...(!account?.items && {
      avatar: {
        size: 'md',
        type: account.type,
        name: account.name,
      },
    }),
    badge: account.badge,
    alertBadge: account.alertBadge,
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
      theme="default"
      search={accountSearch && accountSearchItem}
      groups={filterAccountGroups}
      items={accountSwitcher}
      menuItemsVirtual={menuItemsVirtual}
    />
  );
};
