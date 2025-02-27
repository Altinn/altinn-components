import { Flex, MenuItem, type MenuItemColor, type MenuItemProps, type MenuTheme } from '..';
import styles from './pageTabs.module.css';

export type PageTabsPadding = 0 | 2;
export type PageTabsVariant = 'card' | undefined;

export interface PageTabsProps {
  theme?: MenuTheme;
  color?: MenuItemColor;
  padding?: PageTabsPadding;
  items?: MenuItemProps[];
}

export const PageTabs = ({ theme = 'transparent', color, items = [], padding = 0 }: PageTabsProps) => {
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
