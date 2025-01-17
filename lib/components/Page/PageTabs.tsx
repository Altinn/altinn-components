import { MenuItem, type MenuItemColor, type MenuItemProps } from '..';

import styles from './pageTabs.module.css';

export type PageTabsTheme = 'transparent' | 'base';

export interface PageTabsProps {
  theme?: PageTabsTheme;
  color?: MenuItemColor;
  items?: MenuItemProps[];
}

export const PageTabs = ({ theme, color, items = [] }: PageTabsProps) => {
  return (
    <nav data-theme={theme} data-color={color} className={styles.tabs}>
      <ul className={styles.list}>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <MenuItem {...item} className={styles.item} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
