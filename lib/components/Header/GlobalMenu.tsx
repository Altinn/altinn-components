'use client';
import cx from 'classnames';
import { type MouseEventHandler, useState } from 'react';
import type { AvatarType } from '../Avatar';
import { Menu, type MenuGroups, MenuItem, type MenuItemProps, type MenuSearchProps } from '../Menu';
import { HeaderButton } from './HeaderButton';
import styles from './globalMenu.module.css';

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

export interface GlobalMenuProps {
  expanded: boolean;
  onToggle: MouseEventHandler;
  items: MenuItemProps[];
  groups?: MenuGroups;
  accounts?: Account[];
  accountGroups?: MenuGroups;
  accountSearch?: AccountSearch;
  menuLabel?: string;
  backLabel?: string;
  className?: string;
}

const defaultResultLabel = (hits: number) => `${hits} hits`;

export const GlobalMenu = ({
  className,
  expanded,
  onToggle,
  accounts = [],
  accountGroups = {},
  accountSearch,
  items = [],
  groups,
  menuLabel = 'Menu',
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

  const globalMenu = selectedAccount ? [accountMenuItem, ...items] : items;

  const filteredAccountMenu = filterString
    ? accountMenu
        .filter((item) => item?.title?.toLowerCase().includes(filterString.toLowerCase()))
        .map((item) => {
          return {
            ...item,
            group: 'search',
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
    ...(filteredAccountMenu.length > 0 ? filteredAccountMenu : [{ id: 'search', group: 'search', hidden: true }]),
  ];

  return (
    <div className={cx(styles.button, className)}>
      <HeaderButton as="div" avatar={accountMenuItem.avatar} onClick={onToggle} expanded={expanded} label={menuLabel} />
      <div className={styles.dropdown} aria-expanded={expanded}>
        {selectAccount ? (
          <>
            <MenuItem {...backItem} />
            <Menu theme="global" search={accountSearchItem} groups={filterAccountGroups} items={accountSwitcher} />
          </>
        ) : (
          <Menu theme="global" groups={groups} items={globalMenu} />
        )}
      </div>
    </div>
  );
};
