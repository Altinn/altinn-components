import type { ChangeEventHandler } from "react";
import {
  MenuBase,
  MenuGroup,
  MenuOption,
  type MenuOptionProps,
  MenuHeader,
  type MenuHeaderProps,
  MenuSearch,
  type MenuSearchProps,
} from "../Menu";

export interface ToolbarOptionsProps {
  search?: MenuSearchProps;
  groups: MenuHeaderProps[];
  options: MenuOptionProps[];
  onChange?: ChangeEventHandler;
}

export const ToolbarOptions = ({
  search,
  groups,
  options,
  onChange,
}: ToolbarOptionsProps) => {
  const sections: { [key: string]: MenuOptionProps[] } = options.reduce<{
    [key: string]: MenuOptionProps[];
  }>((acc, option) => {
    const group = option.group;

    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(option);
    return acc;
  }, {});

  return (
    <MenuBase theme="global" color="subtle">
      {search ? <MenuSearch {...search} /> : ""}
      {Object.keys(sections)?.map((key) => {
        const header = groups[key];
        return (
          <MenuGroup key={key}>
            {header ? <MenuHeader {...header} /> : ""}
            {sections[key]?.map((item, index) => {
              return (
                <MenuOption
                  key={"filter-item" + item.value}
                  onChange={onChange}
                  {...item}
                />
              );
            })}
          </MenuGroup>
        );
      })}
    </MenuBase>
  );
};
