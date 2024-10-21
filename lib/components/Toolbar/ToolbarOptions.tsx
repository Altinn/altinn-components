import type {ChangeEventHandler} from "react";
import {
    MenuBase,
    MenuGroup,
    MenuHeader,
    type MenuHeaderProps,
    MenuOption,
    type MenuOptionProps,
    MenuSearch,
    type MenuSearchProps,
} from "../Menu";

export interface ToolbarOptionsProps {
  options: MenuOptionProps[];
  onChange?: ChangeEventHandler;
  search?: MenuSearchProps;
  multiple?: boolean;
  optionGroups?: { [key: string]: MenuHeaderProps };
}

export const ToolbarOptions = ({ search, optionGroups, options, onChange, multiple = false }: ToolbarOptionsProps) => {
  const sections = options.reduce(
    (acc, option) => {
      const group = option.group || '';
      acc[group] = acc[group] || [];
      acc[group].push(option);
      return acc;
    },
    {} as Record<string, MenuOptionProps[]>,
  );

  const optionType = multiple ? 'checkbox' : 'radio';

  return (
    <MenuBase theme="global" color="subtle">
      {search && <MenuSearch {...search} />}
      {Object.keys(sections)?.map((key) => {
        const headerTitle = optionGroups?.[key]?.title;
        return (
          <MenuGroup key={key}>
            {headerTitle && <MenuHeader title={headerTitle} />}
            {sections[key]?.map((item) => (
              <MenuOption
                key={item.value}
                onChange={onChange}
                label={item.label}
                type={optionType}
                value={item.value}
              />
            ))}
          </MenuGroup>
        );
      })}
    </MenuBase>
  );
};
