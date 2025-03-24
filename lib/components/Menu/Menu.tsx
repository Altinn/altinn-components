import { MenuBase, type MenuTheme } from './MenuBase';
import type { MenuItemColor } from './MenuItemBase';
import { MenuItems, type MenuItemsProps } from './MenuItems';
import { MenuItemsVirtual } from './MenuItemsVirtual';

export interface MenuProps extends MenuItemsProps {
  color?: MenuItemColor;
  theme?: MenuTheme;
  isVirtualized?: boolean;
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
  isVirtualized,
}: MenuProps) => {
  if (isVirtualized) {
    return (
      <MenuBase color={color} theme={theme}>
        <MenuItemsVirtual
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
  }

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
