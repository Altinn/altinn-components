'use client';
import { Fragment, useState } from 'react';
import { MenuItem, type MenuItemProps } from './MenuItem';
import { MenuSearch } from './MenuSearch';
import styles from './menu.module.css';
import { useMenuItems } from './useMenuItems';

export interface MenuGroupProps extends MenuItemProps {
  title?: string;
}

export type MenuGroups = Record<string, MenuGroupProps>;

export interface MenuSearchProps {
  placeholder?: string;
}

export interface MenuProps {
  id?: string;
  searchable?: boolean;
  searchProps?: MenuSearchProps;
  items?: MenuItemProps[];
  groups?: MenuGroups;
  variant?: MenuItemProps['variant'];
  size?: MenuItemProps['size'];
  level?: number;
  maxLevels?: number;
}

export const Menu = ({
  searchable,
  searchProps = {
    placeholder: 'Search ...',
  },
  items = [],
  groups = {
    search: {
      title: '{count} hits',
    },
  },
  variant = 'default',
  size,
  level = 1,
  maxLevels = 3,
}: MenuProps) => {
  // default search

  const [q, setQ] = useState('');

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
  };

  const search = searchable && {
    ...searchProps,
    name: 'search',
    value: q,
    onChange: onSearch,
  };

  // use menu items

  const { menu } = useMenuItems({
    query: {
      q,
    },
    items,
    groups,
    variant,
    size,
  });

  return (
    <ul className={styles.list} data-variant={variant}>
      {search && (
        <li className={styles.search}>
          <MenuSearch {...search} />
        </li>
      )}
      {menu?.map((group, groupIndex) => (
        <Fragment key={group?.id + '-' + groupIndex}>
          {/* add divider if group is not first or if level is greater than 1 */}
          {(groupIndex > 0 || (level > 1 && groupIndex < 1)) && (
            <li role="separator">
              <hr className={styles.divider} />
            </li>
          )}
          <li role="group">
            <ul className={styles.list}>
              {group?.title && (
                <li className={styles.header} role="heading">
                  <h4 className={styles.heading}>{group.title}</h4>
                </li>
              )}
              {group?.items?.map((item: MenuItemProps, index: number) => (
                <Fragment key={item?.id + '-' + index}>
                  <li className={styles.item} role="menuitem">
                    <MenuItem {...item} />
                    {item?.items && level < maxLevels && (
                      <Fragment>
                        <Menu items={item.items} variant={item.variant} groups={groups} level={level + 1} />
                      </Fragment>
                    )}
                  </li>
                </Fragment>
              ))}
            </ul>
          </li>
        </Fragment>
      ))}
    </ul>
  );
};
