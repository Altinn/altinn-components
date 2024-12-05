'use client';
import { Fragment } from 'react';
import { MenuHeader, MenuItem, MenuList, MenuListItem } from '../';
import type { MenuItemColor, MenuItemProps, MenuItemSize } from '../';
import { useMenu } from '../../hooks';

export interface MenuGroupProps {
  title?: string;
  divider?: boolean;
  defaultItemColor?: MenuItemColor;
  defaultItemSize?: MenuItemSize;
}

export type MenuItemGroups = Record<string, MenuGroupProps>;

export interface MenuItemsProps {
  level?: number;
  expanded?: boolean;
  items: MenuItemProps[];
  groups?: MenuItemGroups;
  defaultItemColor?: MenuItemColor;
  defaultItemSize?: MenuItemSize;
}

export const MenuItems = ({
  level = 0,
  expanded,
  items,
  groups = {},
  defaultItemColor,
  defaultItemSize,
}: MenuItemsProps) => {
  const { menu } = useMenu<MenuItemProps, MenuGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents: false,
  });

  return (
    <MenuList expanded={expanded}>
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
                  <MenuListItem role="presentation" expanded={expanded} key={index}>
                    <MenuItem
                      {...itemProps}
                      color={itemProps?.color || groupProps?.defaultItemColor || defaultItemColor}
                      size={itemProps?.size || groupProps?.defaultItemSize || defaultItemSize}
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
                          defaultItemColor={defaultItemColor}
                          defaultItemSize={defaultItemSize}
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
