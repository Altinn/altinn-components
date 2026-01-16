'use client';
import { type CSSProperties, useEffect, useMemo, useState } from 'react';
import { Menu, type MenuItemProps, type MenuListSearchProps, type MenuProps } from '../';

export interface AccountSearchProps extends MenuListSearchProps {
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
  virtualized,
  keyboardEvents,
  scrollRefStyles,
}: AccountMenuProps) => {
  const accountMenu: AccountMenuItemProps[] = items.map((item) => ({
    ...item,
    title: item?.title || item.name,
    groupId: item.groupId || 'search',
    selected: item.selected ?? currentAccount?.id === item.id,
    // Avoid nested <button> when item controls render buttons (e.g. favorite toggle).
    as: item.controls ? 'div' : item.as,
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

  const defaultAccountSearch: MenuListSearchProps = {
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
      size="md"
      search={search && !search.hidden ? defaultAccountSearch : undefined}
      groups={filterAccountGroups}
      items={accountSwitcher}
      virtualized={virtualized}
      keyboardEvents={keyboardEvents}
      scrollRefStyles={scrollRefStyles}
    />
  );
};
