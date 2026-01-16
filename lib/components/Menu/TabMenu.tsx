import { MenuItem, type MenuItemProps } from '.';
import styles from './tabMenu.module.css';

export interface TabMenuProps {
  id?: string;
  items?: MenuItemProps[];
  variant?: MenuItemProps['variant'];
  size?: MenuItemProps['size'];
}

export const TabMenu = ({ items = [], variant = 'default', size = 'sm' }: TabMenuProps) => {
  return (
    <ul className={styles.menu} data-variant={variant}>
      {items?.map((item: MenuItemProps) => (
        <li key={item.id} className={styles.item} aria-selected={item.selected}>
          <MenuItem {...item} className={styles.link} variant={variant} size={size} />
        </li>
      ))}
    </ul>
  );
};
