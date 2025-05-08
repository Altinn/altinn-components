import { MenuBase, type MenuTheme } from './MenuBase';
import type { MenuItemColor } from './MenuItemBase';
import { MenuItems, type MenuItemsProps, type MenuItemsVirtualProps } from './MenuItems';
import { MenuItemsVirtual } from './MenuItemsVirtual';

export interface MenuProps extends MenuItemsProps {
  color?: MenuItemColor;
  theme?: MenuTheme;
  menuItemsVirtual?: MenuItemsVirtualProps;
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
  menuItemsVirtual,
}: MenuProps) => {
  const { isVirtualized } = menuItemsVirtual || {};

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
          scrollRefStyles={menuItemsVirtual?.scrollRefStyles}
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
