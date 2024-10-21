import {MenuBase} from './MenuBase';
import {MenuGroup} from './MenuGroup';
import {MenuSearch, type MenuSearchProps} from './MenuSearch';
import {MenuHeader, type MenuHeaderProps} from './MenuHeader';
import {MenuItem, type MenuItemProps} from './MenuItem';

export type MenuTheme = 'global' | 'neutral' | 'company' | 'person';
export type MenuColor = 'accent' | 'subtle';

export interface MenuProps {
  theme?: MenuTheme;
  color?: MenuColor;
  search?: MenuSearchProps;
  groups?: MenuHeaderProps[];
  items?: MenuItemProps[];
}

export const Menu = ({ theme, color, search, groups, items = [] }: MenuProps) => {
  const sections: Record<string, MenuItemProps[]> = items?.reduce((acc: Record<string, MenuItemProps[]>, item: MenuItemProps) => {
    const group = item.group || '';
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);
    return acc;
  }, {} as Record<string, MenuItemProps[]>);

  return (
    <MenuBase theme={theme} color={color}>
      {search ? <MenuSearch {...search} /> : ''}
      {Object.entries(sections)?.map(([key, options]) => {
        const header = groups?.[key];
        console.log(options);
        return (
          <MenuGroup key={key}>
            {header ? <MenuHeader {...header} /> : ''}
            {(options ?? []).map((option, index) => (
              <MenuItem {...option} key={'menu-item' + index} />
            ))}
          </MenuGroup>
        );
      })}
    </MenuBase>
  );
};
