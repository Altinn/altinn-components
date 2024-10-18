import type { ChangeEventHandler} from "react";
import {MenuBase, MenuGroup, MenuOption, type MenuOptionProps} from "../Menu";

export interface ToolbarOptionsProps {
  options: MenuOptionProps[];
  onChange?: ChangeEventHandler;
}

export const ToolbarOptions = ({  options, onChange }: ToolbarOptionsProps) => {
  const groups: { [key: string]: MenuOptionProps[] } = options.reduce<{ [key: string]: MenuOptionProps[] }>((acc, option) => {
    const group = option.group;

    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(option);
    return acc;
  }, {});

  return (
    <MenuBase theme="global" color="subtle">
      {Object.keys(groups)?.map((key) => {
        return (
          <MenuGroup key={key}>
            {groups[key]?.map((item, index) => {
              return (
                <MenuOption
                  key={'filter-item' + index}
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
