import { type ChangeEventHandler, Fragment, useRef } from 'react';
import {
  MenuBase,
  type MenuGroupProps,
  MenuHeader,
  MenuList,
  MenuListItem,
  type MenuListRole,
  MenuOption,
  type MenuOptionProps,
  MenuSearch,
  type MenuSearchProps,
} from '../Menu';
import { useMenu } from '../../hooks';
import { AutocompleteBase, AutocompleteItem, AutocompleteItemProps } from '../Searchbar';

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
  const ref = useRef<HTMLUListElement>(null);
  const keyboardEvents = true;
  const { menu, setActiveIndex } = useMenu<MenuOptionProps, OptionGroup>({
    items: options,
    groups: optionGroups,
    groupByKey: 'groupId',
    keyboardEvents,
    onSelect: () => {
      console.info('selected');
    },
    ref,
  });

  return (
    <MenuBase variant="default" ref={ref}>
      <MenuList role={'menu' as MenuListRole}>
        {menu.map((group, groupIndex) => {
          const groupProps: MenuGroupProps = group?.props || {};
          const { title, divider = true } = groupProps;

          return (
            <Fragment key={groupIndex}>
              {/** Render a separator if this is a new group or a new level */}
              {groupIndex && divider ? <MenuListItem role="separator" /> : ''}
              {title && (
                <MenuListItem>
                  <MenuHeader title={title} />
                </MenuListItem>
              )}
              {group?.items
                .filter((item) => !item.props?.hidden)
                .map((item, index) => {
                  const { active, onMouseEnter } = item;
                  const { groupId, onClick, ...itemProps } = item.props || {};
                  const { expanded } = itemProps;
                  return (
                    <MenuListItem key={index} expanded={expanded} onMouseLeave={() => setActiveIndex(-1)}>
                      <MenuOption
                        active={active}
                        tabIndex={-1}
                        onChange={onChange}
                        label={itemProps.label}
                        badge={itemProps.badge}
                        name={itemProps.name || name}
                        type={itemProps.type || optionGroups?.[groupId]?.optionType || optionType}
                        value={itemProps.value}
                        checked={itemProps.checked}
                        onMouseEnter={onMouseEnter}
                        onClick={() => {
                          onClick?.();
                        }}
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

  /*const sections = options.reduce(
    (acc, option) => {
      const group = option.groupId || '';
      acc[group] = acc[group] || [];
      acc[group].push(option);
      return acc;
    },
    {} as Record<string, MenuOptionProps[]>,
  );

  return (
    <MenuBase variant="default">
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
  );*/
};
