import { MenuBase } from "./MenuBase";
import { MenuGroup } from "./MenuGroup";
import { MenuHeader, type MenuHeaderProps } from "./MenuHeader";
import { MenuItem, type MenuItemProps } from "./MenuItem";

export type MenuTheme = "global" | "neutral" | "company" | "person";
export type MenuColor = "accent" | "subtle";

export interface MenuProps {
  theme?: MenuTheme;
  color?: MenuColor;
  groups: MenuHeaderProps[];
  items?: MenuItemProps[];
}

export const Menu = ({ theme, color, groups, items }: MenuProps) => {
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
      {Object.keys(sections)?.map((key) => {
        const header = groups?.find((item) => item.id === key);
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
