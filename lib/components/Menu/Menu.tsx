'use client';
import type { MenuItemProps } from './MenuItem';
import { MenuItems, type MenuItemsProps } from './MenuItems';
import { VirtualizedMenuItems } from './VirtualizedMenuItems';
import { useMenuSearch } from './useMenuSearch';

export interface MenuProps extends MenuItemsProps {
  searchable?: boolean;
  virtualized?: boolean;
  id?: string;
}

export const Menu = ({
  searchable,
  search,
  items = [],
  groups = {},
  variant = 'default',
  size,
  level = 0,
  maxLevels = 3,
  virtualized = false,
  keyboardEvents = false,
  scrollRefStyles = {},
  onActiveItemIdChange,
  a11yMode = 'menu',
  open,
  scrollToTopOnOpen,
  autoFocusList,
  id,
}: MenuProps) => {
  const autoSearch = useMenuSearch({ ...search, items, groups });
  const applicableSearch = searchable ? autoSearch.search : search;
  const announceNoResults = searchable && autoSearch.hasQuery && autoSearch.resultCount === 0;
  const applicableItems = searchable ? autoSearch.items : items;
  const applicableGroups = searchable ? { ...groups, ...autoSearch.groups } : groups;
  const autoActivateFirstItem = a11yMode !== 'combobox';

  if (virtualized) {
    return (
      <VirtualizedMenuItems
        id={id}
        search={applicableSearch}
        announceNoResults={announceNoResults}
        items={applicableItems as MenuItemProps[]}
        groups={applicableGroups}
        variant={variant}
        size={size}
        level={level}
        maxLevels={maxLevels}
        keyboardEvents={keyboardEvents}
        scrollRefStyles={scrollRefStyles}
        onActiveItemIdChange={onActiveItemIdChange}
        a11yMode={a11yMode}
        open={open}
        scrollToTopOnOpen={scrollToTopOnOpen}
        autoActivateFirstItem={autoActivateFirstItem}
        autoFocusList={autoFocusList}
      />
    );
  }

  return (
    <MenuItems
      id={id}
      search={applicableSearch}
      announceNoResults={announceNoResults}
      items={applicableItems as MenuItemProps[]}
      groups={applicableGroups}
      variant={variant}
      size={size}
      level={level}
      maxLevels={maxLevels}
      keyboardEvents={keyboardEvents}
      scrollRefStyles={scrollRefStyles}
      onActiveItemIdChange={onActiveItemIdChange}
      a11yMode={a11yMode}
      open={open}
      scrollToTopOnOpen={scrollToTopOnOpen}
      autoActivateFirstItem={autoActivateFirstItem}
      autoFocusList={autoFocusList}
    />
  );
};
