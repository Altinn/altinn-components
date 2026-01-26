'use client';
import type { CSSProperties } from 'react';
import { useRef } from 'react';
import { MenuItem, MenuList, MenuListDivider, MenuListGroup, MenuListHeading, MenuListItem } from '../';
import type { MenuItemProps } from '../';
import { useMenu } from '../../hooks';
import type { MenuGroupProps, MenuItemsProps } from './MenuItems';
import { MenuListSearch } from './MenuListSearch.tsx';
import { type UseMenuVirtualizationProps, useMenuVirtualization } from './useMenuVirtualization';

export const VirtualizedMenuItems = (props: MenuItemsProps) => {
  const scrollRef = useRef<HTMLUListElement>(null);

  const { search, items, groups = {}, size, color, variant, keyboardEvents, scrollRefStyles: style = {} } = props;

  const { menu } = useMenu<MenuItemProps, MenuGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents,
    ref: scrollRef,
  });

  const { flatMenu, virtualizer, scrollMaxHeight } = useMenuVirtualization({
    menu: menu as unknown as UseMenuVirtualizationProps['menu'],
    keyboardEvents,
    scrollRef: scrollRef as React.RefObject<HTMLUListElement>,
  });

  const VirtualListItem = ({
    index,
    entry,
    ref,
    style,
  }: {
    index: number;
    entry: { type: 'divider' | 'header' | 'item'; title?: string; itemProps?: MenuItemProps; active?: boolean };
    ref: React.RefCallback<HTMLLIElement>;
    style: CSSProperties;
  }) => {
    switch (entry.type) {
      case 'divider':
        return <MenuListDivider ref={ref} style={style} index={index} />;
      case 'header':
        return <MenuListHeading title={entry.title || ''} level={1} ref={ref} style={style} index={index} />;
      default:
        return (
          <MenuListItem role="menuitem" ref={ref} style={style} index={index}>
            <MenuItem
              {...(entry.itemProps || {})}
              size={entry.itemProps?.size || size}
              color={entry.itemProps?.color || color}
              variant={entry.itemProps?.variant || variant}
              active={entry.active}
              tabIndex={entry.itemProps?.disabled || keyboardEvents ? -1 : 0}
            />
          </MenuListItem>
        );
    }
  };

  const scrollRefStyle = {
    position: 'relative',
    maxHeight: style?.maxHeight || scrollMaxHeight,
    margin: '-0.5rem',
    padding: '0.5rem',
    overflowY: 'auto',
    ...style,
  } as CSSProperties;

  return (
    <MenuList ref={scrollRef} style={scrollRefStyle}>
      {search && <MenuListSearch {...search} />}

      <MenuListGroup
        style={{
          position: 'relative',
          height: `${virtualizer.getTotalSize()}px`,
        }}
      >
        <MenuList>
          {virtualizer.getVirtualItems().map((virtualRow) => {
            const entry = flatMenu[virtualRow.index];
            if (!entry) return null;

            return (
              <VirtualListItem
                key={virtualRow.key}
                index={virtualRow.index}
                ref={virtualizer.measureElement}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  transform: `translateY(${virtualRow.start}px)`,
                }}
                entry={entry}
              />
            );
          })}
        </MenuList>
      </MenuListGroup>
    </MenuList>
  );
};
