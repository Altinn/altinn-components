import { MenuBase, type MenuTheme } from './MenuBase';
import { MenuItems, type MenuItemsProps } from './MenuItems';
import { MenuSearch, type MenuSearchProps } from './MenuSearch';

export interface MenuProps extends MenuItemsProps {
  theme?: MenuTheme;
  search?: MenuSearchProps;
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
      {search && <MenuSearch {...search} />}
      <MenuItems items={items} groups={groups} defaultItemColor={defaultItemColor} defaultItemSize={defaultItemSize} />
    </MenuBase>
  );
};
