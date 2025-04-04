import { MenuItem, type MenuItemColor, type MenuItemProps } from '..';

import styles from './pageMenu.module.css';

export type PageMenuTheme = 'default' | 'subtle' | 'base';

export interface PageMenuProps {
  id?: string;
  theme?: PageMenuTheme;
  color?: MenuItemColor;
  items?: MenuItemProps[];
}

export const PageMenu = ({ theme, color, items = [] }: PageMenuProps) => {
  return (
    <nav data-theme={theme} data-color={color} className={styles.menu}>
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
