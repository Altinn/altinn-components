import { ChangeEvent } from "react";
import { MenuBase, MenuGroup, MenuOption, MenuOptionProps } from "../Menu";

export interface ToolbarOptionsProps {
  name?: string;
  value?: string | number;
  label?: string;
  multiple?: boolean;
  items?: MenuOptionProps[];
  onChange?: ChangeEvent;
}

export const ToolbarOptions = ({
  name = "filter",
  value,
  items,
  multiple,
  onChange,
}: ToolbarOptionsProps) => {
  const groups = items.reduce((acc, item) => {
    const group = item.group;
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);
    return acc;
  }, {});

  return (
    <MenuBase theme="global" color="subtle">
      {Object.keys(groups)?.map((key) => {
        return (
          <MenuGroup key={key}>
            {groups[key]?.map((item, index) => (
              <MenuOption
                {...item}
                name={name}
                type={multiple ? "checkbox" : "radio"}
                selected={value?.includes(item?.value) ? true : false}
                onChange={onChange}
                key={"filter-item" + index}
              ></MenuOption>
            ))}
          </MenuGroup>
        );
      })}
    </MenuBase>
  );
};
