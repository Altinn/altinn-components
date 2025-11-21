'use client';
import { type CSSProperties, useEffect, useMemo, useState } from 'react';
import { Menu, type MenuItemProps, type MenuProps, type MenuSearchProps } from '../';

export interface AccountSearchProps extends MenuSearchProps {
  hidden?: boolean;
  getResultsLabel?: (hits: number) => string;
}

export interface AccountMenuItemProps extends MenuItemProps {
  id: string;
  type: 'person' | 'company' | 'group' | 'subunit';
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
  scrollRefStyles,
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

  // Sync filterString with external search value
  useEffect(() => {
    if (search?.value !== undefined) {
      setFilterString(search.value);
    }
  }, [search?.value]);

  const defaultFilterAccount = (item: AccountMenuItemProps, q: string) => {
    return (
      item?.name?.toLowerCase().includes(q.toLowerCase()) ||
      item?.description?.toString()?.toLowerCase().includes(q.toLowerCase())
    );
  };

  const applicableFilterAccount = filterAccount || defaultFilterAccount;

  const filteredAccountMenu = useMemo(() => {
    if (!filterString) return accountMenu;

    return Array.from(
      new Map(
        accountMenu
          .filter((item) => applicableFilterAccount(item, filterString))
          .map((item) => [
            item.id,
            {
              ...item,
              groupId: 'search',
              title: item?.title || item.name,
              highlightWords: [filterString],
            },
          ]),
      ).values(),
    );
  }, [accountMenu, filterString, applicableFilterAccount]);

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
      search={search && !search.hidden ? defaultAccountSearch : undefined}
      groups={filterAccountGroups}
      items={accountSwitcher}
      isVirtualized={isVirtualized}
      keyboardEvents={keyboardEvents}
      scrollRefStyles={scrollRefStyles}
    />
  );
};
