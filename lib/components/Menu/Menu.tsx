import { MenuBase, type MenuVariant } from './MenuBase';
import type { MenuItemColor } from './MenuItemBase';
import { MenuItems, type MenuItemsProps } from './MenuItems';
import { MenuItemsVirtual } from './MenuItemsVirtual';

export interface MenuProps extends MenuItemsProps {
  color?: MenuItemColor;
  variant?: MenuVariant;
  isVirtualized?: boolean;
  keyboardEvents?: boolean;
}

export const Menu = ({
  color,
  variant,
  defaultItemColor /** Should inherit from parent? */,
  defaultItemVariant /** Should inherit from parent? */,
  defaultItemSize,
  defaultIconTheme,
  groups,
  items = [],
  search,
  isVirtualized,
  keyboardEvents,
  scrollRefStyles,
}: MenuProps) => {
  if (isVirtualized) {
    return (
      <MenuBase color={color} variant={variant}>
        <MenuItemsVirtual
          search={search}
          items={items}
          groups={groups}
          defaultItemSize={defaultItemSize}
          defaultItemColor={defaultItemColor}
          defaultItemVariant={defaultItemVariant}
          defaultIconTheme={defaultIconTheme}
          keyboardEvents={keyboardEvents}
          scrollRefStyles={scrollRefStyles}
        />
      </MenuBase>
    );
  }

  return (
    <MenuBase color={color} variant={variant}>
      <MenuItems
        search={search}
        items={items}
        groups={groups}
        defaultItemSize={defaultItemSize}
        defaultItemColor={defaultItemColor}
        defaultItemVariant={defaultItemVariant}
        defaultIconTheme={defaultIconTheme}
        keyboardEvents={keyboardEvents}
        scrollRefStyles={scrollRefStyles}
      />
    </MenuBase>
  );
};
