import type { ChangeEventHandler } from "react";
import {
  MenuBase,
  MenuGroup,
  MenuOption,
  type MenuOptionProps,
  MenuHeader,
  type MenuHeaderProps,
} from "../Menu";

export interface ToolbarOptionsProps {
  groups: MenuHeaderProps[];
  options: MenuOptionProps[];
  onChange?: ChangeEventHandler;
}

export const ToolbarOptions = ({
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
      {Object.keys(sections)?.map((key) => {
        const header = groups?.find((item) => item.id === key);
        return (
          <MenuGroup key={key}>
            {header ? <MenuHeader {...header} /> : ""}
            {sections[key]?.map((item, index) => {
              return (
                <MenuOption
                  key={"filter-item" + index}
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
