import { MenuBase, MenuItem, type MenuItemProps } from '../Menu';
import styles from './actionMenu.module.css';

export interface ActionMenuProps {
  items?: MenuItemProps[];
}

export const ActionMenu = ({ items = [] }: ActionMenuProps) => {
  return (
    <MenuBase className={styles.menu}>
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
