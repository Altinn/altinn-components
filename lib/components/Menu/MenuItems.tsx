'use client';
import { type CSSProperties, type ElementType, Fragment, useRef } from 'react';
import { MenuItem, MenuList, MenuListDivider, MenuListGroup, MenuListHeading, MenuListItem } from '../';
import type { MenuItemProps } from '../';
import { useMenu } from '../../hooks';
import { MenuListSearch, type MenuListSearchProps } from './MenuListSearch.tsx';

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
  id?: string;
  level?: number;
  maxLevels?: number;
  expanded?: boolean;
  search?: MenuListSearchProps;
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
  id,
  color,
  variant,
  scrollRefStyles = {},
  keyboardEvents = false,
  onSelect = () => { },
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
    <MenuList variant={variant} expanded={expanded} ref={ref} style={scrollRefStyles} id={id}>
      {search && <MenuListSearch {...search} />}
      {menu.map((group, groupIndex) => {
        const groupProps: MenuGroupProps = group?.props || {};
        const { title, hidden = false, divider = true } = groupProps;
        return (
          <Fragment key={groupIndex}>
            {/** Render a separator if this is a new group or a new level */}
            {(level > 0 || groupIndex) && divider ? <MenuListDivider /> : ''}
            <MenuListGroup hidden={hidden} key={groupIndex}>
              <MenuList role="presentation">
                {title && <MenuListHeading title={title} level={level} />}
                {group?.items
                  .filter((item) => !item.props?.hidden)
                  .map((item, index) => {
                    const { active, onMouseEnter } = item;
                    const { groupId: _, ...itemProps } = item.props || {};
                    const { expanded } = itemProps;
                    return (
                      <MenuListItem key={index} expanded={expanded} onMouseLeave={() => setActiveIndex(-1)}>
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
            </MenuListGroup>
          </Fragment>
        );
      })}
    </MenuList>
  );
};
