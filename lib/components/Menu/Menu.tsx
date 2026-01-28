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
}: MenuProps) => {
  const autoSearch = useMenuSearch({ ...search, items, groups });
  const applicableSearch = searchable ? autoSearch.search : search;
  const applicableItems = searchable ? autoSearch.items : items;
  const applicableGroups = searchable ? autoSearch.groups : groups;

  if (virtualized) {
    return (
      <VirtualizedMenuItems
        search={applicableSearch}
        items={applicableItems as MenuItemProps[]}
        groups={applicableGroups}
        variant={variant}
        size={size}
        level={level}
        maxLevels={maxLevels}
        keyboardEvents={keyboardEvents}
        scrollRefStyles={scrollRefStyles}
      />
    );
  }

  return (
    <MenuItems
      search={applicableSearch}
      items={applicableItems as MenuItemProps[]}
      groups={applicableGroups}
      variant={variant}
      size={size}
      level={level}
      maxLevels={maxLevels}
      keyboardEvents={keyboardEvents}
      scrollRefStyles={scrollRefStyles}
      onActiveItemIdChange={onActiveItemIdChange}
    />
  );
};
