import { MenuBase } from './MenuBase';
import { MenuGroup } from './MenuGroup';
import { MenuItem, MenuItemProps } from './MenuItem';

export type MenuTheme = 'global' | 'neutral' | 'company' | 'person';
export type MenuColor = 'accent' | 'subtle';

export interface MenuProps {
  theme?: MenuTheme;
  color?: MenuColor;
  items?: MenuItemProps[];
}

export const Menu = ({ theme, color, items }: MenuProps) => {
  const groups = items.reduce((acc, item) => {
    const group = item.group;
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);
    return acc;
  }, {});

  return (
    <MenuBase theme={theme} color={color}>
      {Object.keys(groups)?.map((key) => {
        return (
          <MenuGroup key={key}>
            {groups[key]?.map((item, index) => (
              <MenuItem {...item} key={'menu-item' + index}></MenuItem>
            ))}
          </MenuGroup>
        );
      })}
    </MenuBase>
  );
};
