'use client';
import { type CSSProperties, type ElementType, Fragment, useRef } from 'react';
import { MenuDivider, MenuHeader, MenuItem, MenuList, MenuListItem } from '../';
import type { MenuItemProps } from '../';
import { useMenu } from '../../hooks';
import { MenuSearch, type MenuSearchProps } from './MenuSearch';

export interface MenuGroupProps {
  title?: string;
  hidden?: boolean;
  divider?: boolean;
  size?: MenuItemProps['size'];
  variant?: MenuItemProps['variant'];
  color?: MenuItemProps['color'];
}

export type MenuItemGroups = Record<string, MenuGroupProps>;

export interface MenuItemsProps {
  level?: number;
  maxLevels?: number;
  expanded?: boolean;
  search?: MenuSearchProps;
  items: MenuItemProps[];
  groups?: MenuItemGroups;
  size?: MenuItemProps['size'];
  variant?: MenuItemProps['variant'];
  color?: MenuItemProps['color'];
  as?: ElementType;
  keyboardEvents?: boolean;
  onSelect?: () => void;
  scrollRefStyles?: CSSProperties;
}

export const MenuItems = ({
  level = 0,
  maxLevels,
  expanded,
  search,
  items,
  groups = {},
  size,
  color,
  variant,
  as,
  scrollRefStyles = {},
  keyboardEvents = false,
  onSelect = () => {},
}: MenuItemsProps) => {
  if (maxLevels && level >= maxLevels) {
    return null;
  }

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
    <MenuList variant={variant} expanded={expanded} as={as} ref={ref} style={scrollRefStyles}>
      {search && <MenuSearch {...search} />}
      {menu.map((group, groupIndex) => {
        const groupProps: MenuGroupProps = group?.props || {};
        const { title, hidden = false, divider = true } = groupProps;
        const nextGroup = menu[groupIndex + 1];

        if (hidden) {
          return <li />;
        }

        return (
          <Fragment key={groupIndex}>
            {/** Render a separator if this is a new group or a new level */}
            {(level > 0 || groupIndex) && divider ? <MenuDivider /> : ''}
            <MenuListItem role="group" key={groupIndex}>
              <MenuList role="presentation">
                {title && <MenuHeader title={title} />}
                {group?.items
                  .filter((item) => !item.props?.hidden)
                  .map((item, index) => {
                    const { active, onMouseEnter } = item;
                    const { groupId: _, ...itemProps } = item.props || {};
                    const { expanded } = itemProps;
                    //                    const nextItem = group?.items[index + 1];
                    return (
                      <MenuListItem
                        key={index}
                        role="menuitem"
                        expanded={expanded}
                        onMouseLeave={() => setActiveIndex(-1)}
                      >
                        <MenuItem
                          {...itemProps}
                          size={itemProps?.size || groupProps?.size || size}
                          color={itemProps?.color || groupProps?.color || color}
                          variant={itemProps?.variant || groupProps?.variant || variant}
                          active={active}
                          tabIndex={itemProps?.disabled || keyboardEvents ? -1 : (itemProps.tabIndex ?? 0)}
                          onMouseEnter={onMouseEnter}
                        />
                        {expanded && itemProps?.items && (
                          <MenuItems
                            expanded={expanded}
                            level={level + 1}
                            maxLevels={maxLevels}
                            items={itemProps?.items}
                            groups={groups}
                            size={size}
                            color={color}
                            variant={variant}
                          />
                        )}
                      </MenuListItem>
                    );
                  })}
              </MenuList>
            </MenuListItem>
            {/** Render a separator if expanded and there are items underneath */}
            {expanded && nextGroup && <MenuDivider />}
          </Fragment>
        );
      })}
    </MenuList>
  );
};
