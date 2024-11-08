import { MenuBase, MenuItem, type MenuItemProps } from '../Menu';
import type { LayoutTheme } from '../Layout';
import styles from './actionMenu.module.css';

export interface ActionMenuProps {
  theme?: LayoutTheme;
  items?: MenuItemProps[];
}

export const ActionMenu = ({ theme, items = [] }: ActionMenuProps) => {
  return (
    <MenuBase theme={theme} className={styles.menu}>
      <ul className={styles.list}>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <MenuItem {...item} className={styles.item} />
            </li>
          );
        })}
      </ul>
    </MenuBase>
  );
};
