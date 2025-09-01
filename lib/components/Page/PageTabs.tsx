import { Flex, MenuItem, type MenuItemColor, type MenuItemProps, type MenuVariant } from '..';
import styles from './pageTabs.module.css';

export type PageTabsPadding = 0 | 2;

export interface PageTabsProps {
  id?: string;
  variant?: MenuVariant;
  color?: MenuItemColor;
  padding?: PageTabsPadding;
  items?: MenuItemProps[];
}

export const PageTabs = ({ variant, color, items = [], padding = 0 }: PageTabsProps) => {
  return (
    <Flex theme={variant} color={color} padding={padding}>
      <ul className={styles.list}>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <MenuItem {...item} className={styles.item} />
            </li>
          );
        })}
      </ul>
    </Flex>
  );
};
