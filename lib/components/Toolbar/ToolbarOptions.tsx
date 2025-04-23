import { type ChangeEventHandler, Fragment } from 'react';
import {
  MenuBase,
  MenuHeader,
  MenuList,
  MenuListItem,
  MenuOption,
  type MenuOptionProps,
  MenuSearch,
  type MenuSearchProps,
} from '../Menu';

export type ToolbarOptionType = 'checkbox' | 'radio';

export interface OptionGroup {
  title?: string;
  divider?: boolean;
  optionType?: ToolbarOptionType;
}

export interface ToolbarOptionsProps {
  name: string;
  options: MenuOptionProps[];
  onChange?: ChangeEventHandler;
  search?: MenuSearchProps;
  optionType: ToolbarOptionType;
  optionGroups?: { [key: string]: OptionGroup };
}

export const ToolbarOptions = ({
  name,
  search,
  optionGroups = {},
  options,
  onChange,
  optionType,
}: ToolbarOptionsProps) => {
  const sections = options.reduce(
    (acc, option) => {
      const group = option.groupId || '';
      acc[group] = acc[group] || [];
      acc[group].push(option);
      return acc;
    },
    {} as Record<string, MenuOptionProps[]>,
  );

  return (
    <MenuBase theme="default">
      {search && <MenuSearch {...search} />}
      <MenuList>
        {Object.keys(sections)?.map((key, groupIndex) => {
          const groupProps = optionGroups[key] || {};
          const { title, divider = true } = groupProps;
          return (
            <Fragment key={key}>
              {groupIndex && divider ? <MenuListItem role="separator" /> : ''}

              {title && (
                <MenuListItem>
                  <MenuHeader title={title} />
                </MenuListItem>
              )}
              {sections[key]?.map((item) => {
                return (
                  <MenuListItem key={item.value}>
                    <MenuOption
                      onChange={onChange}
                      label={item.label}
                      badge={item.badge}
                      name={item.name || name}
                      type={item.type || optionGroups?.[key]?.optionType || optionType}
                      value={item.value}
                      checked={item.checked}
                    />
                  </MenuListItem>
                );
              })}
            </Fragment>
          );
        })}
      </MenuList>
    </MenuBase>
  );
};
