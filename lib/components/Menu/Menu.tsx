import { MenuBase } from "./MenuBase";
import { MenuGroup } from "./MenuGroup";
import { MenuSearch, type MenuSearchProps } from "./MenuSearch";
import { MenuHeader, type MenuHeaderProps } from "./MenuHeader";
import { MenuItem, type MenuItemProps } from "./MenuItem";

export type MenuTheme = "global" | "neutral" | "company" | "person";
export type MenuColor = "accent" | "subtle";

//export type MenuOption = MenuItemProps;

export interface MenuProps {
  theme?: MenuTheme;
  color?: MenuColor;
  groups?: Record<string, MenuHeaderProps>;
  items?: MenuItemProps[];
}

export const Menu = ({ theme, color, groups, items = [] }: MenuProps) => {
  const sections: Record<string, MenuItemProps[]> = items?.reduce(
    (acc: Record<string, MenuItemProps[]>, item: MenuItemProps) => {
      const group = item?.group || "";
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(item);
      return acc;
    },
    {} as Record<string, MenuItemProps[]>
  );

  return (
    <MenuBase theme={theme} color={color}>
      {Object.entries(sections)?.map(([key, options]) => {
        const menuHeaderProps = groups?.[key];
        return (
          <MenuGroup divider={!!key} key={key}>
            {menuHeaderProps && <MenuHeader {...menuHeaderProps} />}
            {(options ?? []).map((option, index) => {
              if (option?.hidden) {
                return null;
              }

              if (option?.type === "search") {
                return <MenuSearch {...(option as MenuSearchProps)} />;
              }

              return <MenuItem {...option} key={"menu-item" + index} />;
            })}
          </MenuGroup>
        );
      })}
    </MenuBase>
  );
};
