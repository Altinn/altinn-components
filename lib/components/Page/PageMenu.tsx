import { MenuItem, type MenuItemColor, type MenuItemProps } from '..';

import styles from './pageMenu.module.css';

export type PageMenuTheme = 'transparent' | 'base';

export interface PageMenuProps {
  theme?: PageMenuTheme;
  color?: MenuItemColor;
  items?: MenuItemProps[];
}

export const PageMenu = ({ theme = 'transparent', color, items = [] }: PageMenuProps) => {
  return (
    <nav data-theme={theme} data-color={color} className={styles.menu}>
      <ul className={styles.list}>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <MenuItem {...item} theme={theme} className={styles.item} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
