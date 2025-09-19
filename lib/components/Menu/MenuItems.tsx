'use client';
import { type ElementType, Fragment, useRef } from 'react';
import { MenuHeader, MenuItem, MenuList, MenuListItem } from '../';
import type { IconTheme, MenuItemColor, MenuItemProps, MenuItemSize, MenuItemVariant } from '../';
import { useMenu } from '../../hooks';
import { MenuSearch, type MenuSearchProps } from './MenuSearch';

export interface MenuGroupProps {
  title?: string;
  divider?: boolean;
  defaultItemSize?: MenuItemSize;
  defaultItemColor?: MenuItemColor;
  defaultItemVariant?: MenuItemVariant;
  defaultIconTheme?: IconTheme;
}

export type MenuItemGroups = Record<string, MenuGroupProps>;

export interface MenuItemsVirtualProps {
  isVirtualized?: boolean;
  scrollRefStyles?: React.CSSProperties;
}

export interface MenuItemsProps {
  level?: number;
  expanded?: boolean;
  search?: MenuSearchProps;
  items: MenuItemProps[];
  groups?: MenuItemGroups;
  defaultItemSize?: MenuItemSize;
  defaultItemColor?: MenuItemColor;
  defaultItemVariant?: MenuItemVariant;
  defaultIconTheme?: IconTheme;
  as?: ElementType;
  keyboardEvents?: boolean;
  onSelect?: () => void;
}

export const MenuItems = ({
  level = 0,
  expanded,
  search,
  items,
  groups = {},
  defaultItemSize,
  defaultItemColor,
  defaultItemVariant,
  defaultIconTheme,
  as,
  keyboardEvents = false,
  onSelect = () => {},
}: MenuItemsProps) => {
  const ref = useRef<HTMLUListElement>(null);
  const { menu, setActiveIndex } = useMenu<MenuItemProps, MenuGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents,
    onSelect,
    ref,
  });

  return (
    <MenuList expanded={expanded} as={as} ref={ref}>
      {search && <MenuSearch {...search} />}
      {menu.map((group, groupIndex) => {
        const groupProps: MenuGroupProps = group?.props || {};
        const { title, divider = true } = groupProps;
        const nextGroup = menu[groupIndex + 1];

        return (
          <Fragment key={groupIndex}>
            {/** Render a separator if this is a new group or a new level */}
            {(level > 0 || groupIndex) && divider ? <MenuListItem role="separator" /> : ''}
            {title && (
              <MenuListItem>
                <MenuHeader title={title} />
              </MenuListItem>
            )}
            {group?.items
              .filter((item) => !item.props?.hidden)
              .map((item, index) => {
                const { active, onMouseEnter } = item;
                const { groupId: _, ...itemProps } = item.props || {};
                const { expanded } = itemProps;
                const nextItem = group?.items[index + 1];
                return (
                  <MenuListItem expanded={expanded} key={index} onMouseLeave={() => setActiveIndex(-1)}>
                    <MenuItem
                      {...itemProps}
                      size={itemProps?.size || groupProps?.defaultItemSize || defaultItemSize}
                      color={itemProps?.color || groupProps?.defaultItemColor || defaultItemColor}
                      variant={itemProps?.variant || groupProps?.defaultItemVariant || defaultItemVariant}
                      iconTheme={itemProps?.iconTheme || groupProps?.defaultIconTheme || defaultIconTheme}
                      active={active}
                      tabIndex={itemProps?.disabled || keyboardEvents ? -1 : (itemProps.tabIndex ?? 0)}
                      onMouseEnter={onMouseEnter}
                    />
                    {expanded && itemProps?.items && (
                      <>
                        <MenuItems
                          expanded={expanded}
                          level={level + 1}
                          items={itemProps?.items}
                          groups={groups}
                          defaultItemSize={defaultItemSize}
                          defaultItemColor={defaultItemColor}
                          defaultItemVariant={defaultItemVariant}
                          defaultIconTheme={defaultIconTheme}
                        />
                        {/** Render a separator if expanded and there are items underneath */}
                        {(nextGroup || nextItem) && <MenuListItem role="separator" as="div" />}
                      </>
                    )}
                  </MenuListItem>
                );
              })}
          </Fragment>
        );
      })}
    </MenuList>
  );
};
