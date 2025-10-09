import { Fragment, useRef } from 'react';
import { useMenu } from '../../hooks';
import {
  MenuBase,
  type MenuGroupProps,
  MenuHeader,
  MenuList,
  MenuListItem,
  type MenuListRole,
  MenuOption,
  type MenuOptionProps,
  type MenuOptionType,
  MenuSearch,
  type MenuSearchProps,
} from '../Menu';
import type { FilterChangePayload } from './Toolbar.tsx';

export type ToolbarOptionType = 'checkbox' | 'radio';

export interface OptionGroup {
  title?: string;
  divider?: boolean;
  optionType?: ToolbarOptionType;
}

export interface ToolbarOptionsProps {
  name: string;
  options: MenuOptionProps[];
  onChange?: (input: FilterChangePayload) => void;
  search?: MenuSearchProps;
  optionType: ToolbarOptionType;
  optionGroups?: { [key: string]: OptionGroup };
  keyboardEvents?: boolean;
  onBlurCapture?: React.FocusEventHandler<HTMLButtonElement>;
}

export const ToolbarOptions = ({
  name,
  search,
  optionGroups = {},
  options,
  onChange,
  optionType,
  keyboardEvents,
  onBlurCapture,
}: ToolbarOptionsProps) => {
  const ref = useRef<HTMLElement>(null);
  const { menu, setActiveIndex } = useMenu<MenuOptionProps, OptionGroup>({
    items: options,
    groups: optionGroups,
    groupByKey: 'groupId',
    keyboardEvents,
    ref,
  });

  return (
    <MenuBase variant="default" ref={ref}>
      {search && <MenuSearch {...search} />}
      <MenuList role={'menu' as MenuListRole} onBlurCapture={onBlurCapture}>
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
                  const { groupId, onClick, value, checked, type, ...itemProps } = item.props || {};
                  const { expanded } = itemProps;
                  const applicableName = itemProps.name || name;
                  const applicableType = (type ||
                    (groupId && optionGroups[groupId]?.optionType) ||
                    optionType) as MenuOptionType;
                  return (
                    <MenuListItem
                      key={index}
                      expanded={expanded}
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={() => setActiveIndex(-1)}
                      role={type === 'radio' ? 'menuitemradio' : 'menuitemcheckbox'}
                      aria-checked={checked ?? false}
                    >
                      <MenuOption
                        {...itemProps}
                        active={active}
                        tabIndex={keyboardEvents ? -1 : 0}
                        label={itemProps.label}
                        count={itemProps.count}
                        name={applicableName}
                        type={applicableType}
                        value={value}
                        checked={checked}
                        onClick={() => {
                          onChange?.({
                            name: applicableName,
                            value,
                            type: applicableType,
                          });
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
};
