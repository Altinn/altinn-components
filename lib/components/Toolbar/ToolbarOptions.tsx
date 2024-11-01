import type { ChangeEventHandler } from 'react';
import {
  MenuBase,
  MenuGroup,
  MenuHeader,
  MenuOption,
  type MenuOptionProps,
  MenuSearch,
  type MenuSearchProps,
} from '../Menu';

export type ToolbarOptionType = 'checkbox' | 'radio';

export interface OptionGroup {
  title?: string;
  optionType?: ToolbarOptionType;
}

export interface ToolbarOptionsProps {
  options: MenuOptionProps[];
  onChange?: ChangeEventHandler;
  search?: MenuSearchProps;
  optionType: ToolbarOptionType;
  optionGroups?: { [key: string]: OptionGroup };
}

export const ToolbarOptions = ({ search, optionGroups, options, onChange, optionType }: ToolbarOptionsProps) => {
  const sections = options.reduce(
    (acc, option) => {
      const group = option.group || '';
      acc[group] = acc[group] || [];
      acc[group].push(option);
      return acc;
    },
    {} as Record<string, MenuOptionProps[]>,
  );

  return (
    <MenuBase theme="global">
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
                type={optionGroups?.[key]?.optionType || optionType}
                value={item.value}
                checked={item.checked}
              />
            ))}
          </MenuGroup>
        );
      })}
    </MenuBase>
  );
};
