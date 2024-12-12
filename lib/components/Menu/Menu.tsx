import { MenuBase, type MenuTheme } from './MenuBase';
import { MenuItems, type MenuItemsProps } from './MenuItems';

export interface MenuProps extends MenuItemsProps {
  theme?: MenuTheme;
}

export const Menu = ({
  theme = 'inherit',
  defaultItemColor = 'subtle',
  defaultItemSize = 'sm',
  groups,
  items = [],
  search,
}: MenuProps) => {
  return (
    <MenuBase theme={theme}>
      <MenuItems
        search={search}
        items={items}
        groups={groups}
        defaultItemColor={defaultItemColor}
        defaultItemSize={defaultItemSize}
      />
    </MenuBase>
  );
};
