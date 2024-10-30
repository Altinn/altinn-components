import { MenuBase } from './MenuBase';
import { MenuGroup } from './MenuGroup';
import { MenuHeader } from './MenuHeader';
import { MenuSearch, type MenuSearchProps } from './MenuSearch';

import type { MenuItemColor, MenuItemSize } from './MenuItemBase';

import { MenuItem, type MenuItemProps } from './MenuItem';
import styles from './menu.module.css';

export type MenuTheme = 'global' | 'neutral' | 'company' | 'person';

interface MenuItemsGroupProps {
  title?: string;
  divider?: boolean;
  defaultItemColor?: MenuItemColor;
  defaultItemSize?: MenuItemSize;
}

export type MenuGroups = Record<string, MenuItemsGroupProps>;

export interface MenuProps {
  theme?: MenuTheme;
  defaultItemColor?: MenuItemColor;
  defaultItemSize?: MenuItemSize;
  groups?: MenuGroups;
  items?: MenuItemProps[];
  search?: MenuSearchProps;
}

const groupMenuItems = (items: MenuItemProps[]) => {
  const groups: Record<string, MenuItemProps[]> = items?.reduce(
    (acc: Record<string, MenuItemProps[]>, item: MenuItemProps) => {
      const group = item?.group || '';
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(item);
      return acc;
    },
    {} as Record<string, MenuItemProps[]>,
  );

  return groups;
};

export const MenuItems = ({
  defaultItemColor,
  defaultItemSize,
  groups = {},
  items = [],
}: {
  defaultItemColor: MenuItemColor;
  defaultItemSize: MenuItemSize;
  groups?: MenuGroups;
  items: MenuItemProps[];
}) => {
  const sections = groupMenuItems(items);

  return Object.entries(sections)?.map(([key, options]) => {
    const groupProps = groups?.[key];
    return (
      <MenuGroup as="ul" divider={groupProps?.divider} key={key}>
        {groupProps?.title && (
          <li className={styles.item}>
            <MenuHeader title={groupProps.title} />
          </li>
        )}
        {(options ?? [])
          .filter((option) => !option.hidden)
          .map((option, index) => {
            if (option.expanded && option.items) {
              return (
                <li className={styles.item} aria-expanded="true" key={'item' + index}>
                  <MenuItem
                    {...option}
                    className={styles.menuItem}
                    color={option?.color || groupProps?.defaultItemColor || defaultItemColor}
                    size={option?.size || groupProps?.defaultItemSize || defaultItemSize}
                    key={'menu-item' + index}
                  />
                  <MenuItems
                    groups={groups}
                    items={option?.items}
                    defaultItemColor={defaultItemColor}
                    defaultItemSize={defaultItemSize}
                  />
                </li>
              );
            }

            return (
              <li className={styles.item} key={'item' + index}>
                <MenuItem
                  {...option}
                  className={styles.menuItem}
                  color={option?.color || groupProps?.defaultItemColor || defaultItemColor}
                  size={option?.size || groupProps?.defaultItemSize || defaultItemSize}
                  key={'menu-item' + index}
                />
              </li>
            );
          })}
      </MenuGroup>
    );
  });
};

export const Menu = ({
  theme,
  defaultItemColor = 'subtle',
  defaultItemSize = 'sm',
  groups,
  items = [],
  search,
}: MenuProps) => {
  return (
    <MenuBase theme={theme}>
      {search && <MenuSearch {...search} />}
      <MenuItems items={items} groups={groups} defaultItemColor={defaultItemColor} defaultItemSize={defaultItemSize} />
    </MenuBase>
  );
};
