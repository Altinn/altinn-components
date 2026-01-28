import { Fragment, useRef } from 'react';
import { type MenuGroupProps, MenuList, MenuListDivider, MenuListHeading, MenuListItem } from '../';
import { useMenu } from '../../hooks';
import { AutocompleteBase, AutocompleteItem, type AutocompleteItemProps } from '../index.ts';

export interface AutocompleteProps {
  id?: string;
  items: AutocompleteItemProps[];
  groups?: Record<string, MenuGroupProps>;
  onSelect?: () => void;
  expanded?: boolean;
  className?: string;
  keyboardEvents?: boolean;
}

export const Autocomplete = ({
  className,
  items,
  id,
  groups = {},
  expanded,
  keyboardEvents,
  onSelect,
}: AutocompleteProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { menu, setActiveIndex } = useMenu<AutocompleteItemProps, MenuGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents,
    onSelect,
    ref,
  });

  return (
    <AutocompleteBase className={className} expanded={expanded} ref={ref} id={id}>
      <MenuList variant="default">
        {menu.map((group, groupIndex) => {
          const groupProps: MenuGroupProps = group?.props || {};
          const { title, divider = true } = groupProps;
          return (
            <Fragment key={groupIndex}>
              {/** Render a separator if this is a new group or a new level */}
              {groupIndex && divider ? <MenuListDivider /> : null}
              {title && <MenuListHeading title={title} level={1} />}
              {group?.items
                .filter((item) => !item.props?.hidden)
                .map((item, index) => {
                  const { active, onMouseEnter } = item;
                  const { groupId: _, onClick, ...itemProps } = item.props || {};
                  const { expanded } = itemProps;
                  return (
                    <MenuListItem key={index} expanded={expanded} onMouseLeave={() => setActiveIndex(-1)}>
                      <AutocompleteItem
                        {...itemProps}
                        active={keyboardEvents && active}
                        tabIndex={-1}
                        onMouseEnter={onMouseEnter}
                        onClick={() => {
                          onClick?.();
                          onSelect?.();
                        }}
                      />
                    </MenuListItem>
                  );
                })}
            </Fragment>
          );
        })}
      </MenuList>
    </AutocompleteBase>
  );
};
