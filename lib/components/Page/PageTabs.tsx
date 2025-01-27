import { Flex, MenuItem, type MenuItemColor, type MenuItemProps } from '..';
import styles from './pageTabs.module.css';

export type PageTabsTheme = 'transparent' | 'base';
export type PageTabsPadding = 0 | 2;
export type PageTabsVariant = 'card' | undefined;

export interface PageTabsProps {
  variant?: PageTabsVariant;
  theme?: PageTabsTheme;
  color?: MenuItemColor;
  padding?: PageTabsPadding;
  items?: MenuItemProps[];
}

export const PageTabs = ({ variant, theme = 'transparent', color, items = [], padding }: PageTabsProps) => {
  const appliedPadding = (variant === 'card' && 2) || padding;

  return (
    <Flex theme={theme} color={color} padding={appliedPadding}>
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
