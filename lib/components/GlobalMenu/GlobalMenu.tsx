'use client';
import { type MouseEventHandler, useState } from 'react';
import type { AvatarType } from '../Avatar';
import { Menu, MenuItem, type MenuItemGroups, type MenuItemProps, type MenuSearchProps } from '../Menu';

export type Account = {
  type: AvatarType;
  name: string;
  selected?: boolean;
  group?: string;
};

export interface AccountSearch extends MenuSearchProps {
  getResultsLabel?: (hits: number) => string;
  hidden?: boolean;
}

export type MobileMenuType = 'dropdown' | 'drawer';

export interface GlobalMenuProps {
  variant: MobileMenuType;
  expanded: boolean;
  onToggle: MouseEventHandler;
  items: MenuItemProps[];
  groups?: MenuItemGroups;
  accounts?: Account[];
  accountGroups?: MenuItemGroups;
  accountSearch?: AccountSearch;
  menuLabel?: string;
  backLabel?: string;
  className?: string;
}

const defaultResultLabel = (hits: number) => `${hits} hits`;

export const GlobalMenu = ({
  accounts = [],
  accountGroups = {},
  accountSearch,
  items = [],
  groups,
  backLabel = 'Back',
}: GlobalMenuProps) => {
  const accountMenu: MenuItemProps[] = accounts.map((account) => ({
    id: account.name,
    group: account.group || 'search',
    selected: account.selected,
    title: account.name,
    avatar: {
      type: account.type,
      name: account.name,
    },
  }));

  const selectedAccount = accountMenu.find((account) => account.selected);
  const [selectAccount, setSelectAccount] = useState<boolean>(false);
  const [filterString, setFilterString] = useState<string>('');

  const onToggleAccounts = () => {
    setSelectAccount((prevState) => !prevState);
  };

  const accountMenuItem: MenuItemProps = {
    ...selectedAccount,
    id: 'account',
    selected: false,
    size: 'lg',
    onClick: onToggleAccounts,
  };

  const MobileMenu = selectedAccount ? [accountMenuItem, ...items] : items;

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

  const backItem: MenuItemProps = {
    id: 'back',
    title: backLabel ?? 'Back',
    icon: 'arrow-left',
    onClick: onToggleAccounts,
  };

  const accountSwitcher: MenuItemProps[] = [
    ...(filteredAccountMenu.length > 0 ? filteredAccountMenu : [{ id: 'search', groupId: 'search', hidden: true }]),
  ];

  if (selectAccount) {
    return (
      <>
        <MenuItem {...backItem} />
        <Menu theme="global" search={accountSearchItem} groups={filterAccountGroups} items={accountSwitcher} />
      </>
    );
  }

  return <Menu theme="global" groups={groups} items={MobileMenu} />;
};
