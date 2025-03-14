import { Flex, MenuItem, type MenuItemColor, type MenuItemProps, type MenuTheme } from '..';
import styles from './pageTabs.module.css';

export type PageTabsPadding = 0 | 2;

export interface PageTabsProps {
  id?: string;
  theme?: MenuTheme;
  color?: MenuItemColor;
  padding?: PageTabsPadding;
  items?: MenuItemProps[];
}

export const PageTabs = ({ theme, color, items = [], padding = 0 }: PageTabsProps) => {
  return (
    <Flex theme={theme} color={color} padding={padding}>
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
