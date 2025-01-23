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
  defaultItemColor /** Should inherit from parent? */,
  defaultItemTheme /** Should inherit from parent? */,
  defaultItemSize,
  defaultIconTheme,
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
        defaultIconTheme={defaultIconTheme}
      />
    </MenuBase>
  );
};
