import { useEffect } from 'react';
import { useMenu } from '../../hooks';
import { AutocompleteBase } from './AutocompleteBase';
import { AutocompleteGroup, type AutocompleteGroupProps } from './AutocompleteGroup';
import { AutocompleteItem, type AutocompleteItemProps } from './AutocompleteItem';

export interface AutocompleteProps {
  items: AutocompleteItemProps[];
  groups?: Record<string, AutocompleteGroupProps>;
  expanded?: boolean;
  className?: string;
  onActive?: (item?: AutocompleteItemProps) => void;
  onSelect?: (item?: AutocompleteItemProps) => void;
}

export const Autocomplete = ({ className, items, groups = {}, onSelect, onActive, expanded }: AutocompleteProps) => {
  const { menu, activeItem, setActiveIndex } = useMenu<AutocompleteItemProps, AutocompleteGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents: true,
  });

  useEffect(() => {
    onActive?.(activeItem);
  }, [activeItem, onActive]);

  return (
    <AutocompleteBase className={className} expanded={expanded}>
      {menu.map((group, index) => {
        return (
          <AutocompleteGroup {...group.props} key={index}>
            <ul>
              {group.items.map((item, index) => {
                const {
                  active,
                  menuIndex,
                  props: { groupId, ...itemProps },
                } = item;
                return (
                  <li key={index} tabIndex={-1} onMouseEnter={() => setActiveIndex(menuIndex)}>
                    <AutocompleteItem {...itemProps} active={active} onClick={() => onSelect?.(itemProps)} />
                  </li>
                );
              })}
            </ul>
          </AutocompleteGroup>
        );
      })}
    </AutocompleteBase>
  );
};
