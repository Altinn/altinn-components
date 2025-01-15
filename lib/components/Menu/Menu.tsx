import { MenuBase, type MenuTheme } from './MenuBase';
import type { MenuItemColor } from './MenuItemBase';
import { MenuItems, type MenuItemsProps } from './MenuItems';

export interface MenuProps extends MenuItemsProps {
  color?: MenuItemColor;
  theme?: MenuTheme;
}

export const Menu = ({
  color,
  theme,
  defaultItemColor,
  defaultItemTheme = 'default',
  defaultItemSize = 'sm',
  groups,
  items = [],
  search,
}: MenuProps) => {
  return (
    <MenuBase color={color} theme={theme}>
      <MenuItems
        search={search}
        items={items}
        groups={groups}
        defaultItemSize={defaultItemSize}
        defaultItemColor={defaultItemColor}
        defaultItemTheme={defaultItemTheme}
      />
    </MenuBase>
  );
};
