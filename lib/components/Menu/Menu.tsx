import { MenuBase } from "./MenuBase";
import { MenuGroup } from "./MenuGroup";
import { MenuSearch, type MenuSearchProps } from "./MenuSearch";
import { MenuHeader, type MenuHeaderProps } from "./MenuHeader";
import { MenuItem, type MenuItemProps } from "./MenuItem";

export type MenuTheme = "global" | "neutral" | "company" | "person";
export type MenuColor = "accent" | "subtle";

export interface MenuProps {
  theme?: MenuTheme;
  color?: MenuColor;
  search?: MenuSearchProps;
  groups?: MenuHeaderProps[];
  items?: MenuItemProps[];
}

export const Menu = ({ theme, color, search, groups, items }: MenuProps) => {
  const sections = items.reduce((acc, item) => {
    const group = item.group;
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);
    return acc;
  }, {});

  return (
    <MenuBase theme={theme} color={color}>
      {search ? <MenuSearch {...search} /> : ""}
      {Object.keys(sections)?.map((key) => {
        const header = groups[key];
        return (
          <MenuGroup key={key}>
            {header ? <MenuHeader {...header} /> : ""}
            {sections[key]?.map((item, index) => (
              <MenuItem {...item} key={"menu-item" + index}></MenuItem>
            ))}
          </MenuGroup>
        );
      })}
    </MenuBase>
  );
};
