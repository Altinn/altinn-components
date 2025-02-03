'use client';
import { Fragment } from 'react';
import { MenuHeader, MenuItem, MenuList, MenuListItem } from '../';
import type { IconTheme, MenuItemColor, MenuItemProps, MenuItemSize, MenuItemTheme } from '../';
import { useMenu } from '../../hooks';
import { MenuSearch, type MenuSearchProps } from './MenuSearch';

export interface MenuGroupProps {
  title?: string;
  divider?: boolean;
  defaultItemSize?: MenuItemSize;
  defaultItemColor?: MenuItemColor;
  defaultItemTheme?: MenuItemTheme;
  defaultIconTheme?: IconTheme;
}

export type MenuItemGroups = Record<string, MenuGroupProps>;

export interface MenuItemsProps {
  level?: number;
  expanded?: boolean;
  search?: MenuSearchProps;
  items: MenuItemProps[];
  groups?: MenuItemGroups;
  defaultItemSize?: MenuItemSize;
  defaultItemColor?: MenuItemColor;
  defaultItemTheme?: MenuItemTheme;
  defaultIconTheme?: IconTheme;
}

export const MenuItems = ({
  level = 0,
  expanded,
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

  return (
    <MenuList expanded={expanded}>
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
                const { active } = item;
                const { groupId: _, ...itemProps } = item.props || {};
                const { expanded } = itemProps;
                const nextItem = group?.items[index + 1];
                return (
                  <MenuListItem expanded={expanded} key={index}>
                    <MenuItem
                      {...itemProps}
                      size={itemProps?.size || groupProps?.defaultItemSize || defaultItemSize}
                      color={itemProps?.color || groupProps?.defaultItemColor || defaultItemColor}
                      theme={itemProps?.theme || groupProps?.defaultItemTheme || defaultItemTheme}
                      iconTheme={itemProps?.iconTheme || groupProps?.defaultIconTheme || defaultIconTheme}
                      active={active}
                      tabIndex={itemProps?.disabled ? -1 : 0}
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
                          defaultItemTheme={defaultItemTheme}
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
