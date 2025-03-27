'use client';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect, useRef } from 'react';
import { MenuHeader, MenuItem, MenuList, MenuListItem } from '../';
import type { MenuItemProps } from '../';
import { useMenu } from '../../hooks';
import type { MenuGroupProps, MenuItemsProps } from './MenuItems';
import { MenuSearch } from './MenuSearch';
import styles from './menuItemsVirtual.module.css';

interface SeparatorEntry {
  type: 'separator';
}

interface TitleEntry {
  type: 'title';
  title: string;
}

interface ItemEntry {
  type: 'item';
  itemProps: MenuItemProps;
  active: boolean;
  hasChildren: boolean;
  isLastItem: boolean;
}

type MenuEntry = SeparatorEntry | TitleEntry | ItemEntry;

export const MenuItemsVirtual = ({
  level = 0,
  search,
  items,
  groups = {},
  defaultItemSize,
  defaultItemColor,
  defaultItemTheme,
  defaultIconTheme,
}: MenuItemsProps) => {
  const { menu } = useMenu<MenuItemProps, MenuGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents: false,
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  const flatMenu = menu.flatMap((group, groupIndex) => {
    const groupProps: MenuGroupProps = group?.props || {};
    const { title } = groupProps;

    const items = group?.items?.filter((item) => !item.props?.hidden) || [];

    return [
      ...(groupIndex > 0 || level > 0 ? [{ type: 'separator' }] : []),
      ...(title ? [{ type: 'title', title }] : []),
      ...items.map((item, index) => ({
        type: 'item',
        itemProps: item.props || {},
        active: item.active,
        hasChildren: item.props?.expanded && item.props?.items,
        isLastItem: index === items.length - 1,
      })),
    ];
  });

  const virtualizer = useVirtualizer({
    count: flatMenu.length,
    estimateSize: (index) => {
      const entry = flatMenu[index];
      if (!entry) return 0;
      if (entry.type === 'title') return 44;
      if (entry.type === 'separator') return 1;
      return 44;
    },
    getScrollElement: () => scrollRef.current,
  });
  const virtualItems = virtualizer.getVirtualItems();

  // biome-ignore lint/correctness/useExhaustiveDependencies: This hook does not specify all of its dependencies
  useEffect(() => {
    for (const virtualItem of virtualItems) {
      const element = document.querySelector(`[data-index="${virtualItem.index}"]`);
      if (element) {
        virtualizer.measureElement(element);
      }
    }
  }, [virtualItems]);

  return (
    <MenuList>
      {search && <MenuSearch {...search} />}
      <div ref={scrollRef} className={styles.virtualScrollRef}>
        <div style={{ position: 'relative', height: `${virtualizer.getTotalSize()}px` }}>
          {virtualItems.map((virtualRow) => {
            const entry = flatMenu[virtualRow.index] as MenuEntry;
            if (!entry) return null;
            return (
              <MenuListItem
                dataIndex={virtualRow.index}
                key={virtualRow.key}
                className={styles.virtualMenuListItem}
                style={{ transform: `translateY(${virtualRow.start}px)` }}
                role={entry.type === 'separator' ? 'separator' : undefined}
              >
                {entry.type === 'title' && <MenuHeader title={entry.title} />}
                {entry.type === 'item' && (
                  <MenuItem
                    {...entry.itemProps}
                    size={entry.itemProps.size || defaultItemSize}
                    color={entry.itemProps.color || defaultItemColor}
                    theme={entry.itemProps.theme || defaultItemTheme}
                    iconTheme={entry.itemProps.iconTheme || defaultIconTheme}
                    active={entry.active}
                    tabIndex={entry.itemProps.disabled ? -1 : 0}
                  />
                )}
              </MenuListItem>
            );
          })}
        </div>
      </div>
    </MenuList>
  );
};
