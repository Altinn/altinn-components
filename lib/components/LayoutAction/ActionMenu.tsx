import { MenuBase, MenuItem, type MenuItemProps } from '../Menu';
import styles from './actionMenu.module.css';

type ActionMenuTheme = 'inherit' | 'global-dark';

export interface ActionMenuProps {
  theme?: ActionMenuTheme;
  items?: MenuItemProps[];
}

export const ActionMenu = ({ theme = 'inherit', items = [] }: ActionMenuProps) => {
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
