import { useMenu } from '../../hooks';
import { AutocompleteBase } from './AutocompleteBase';
import { AutocompleteGroup, type AutocompleteGroupProps } from './AutocompleteGroup';
import { AutocompleteItem, type AutocompleteItemProps } from './AutocompleteItem';

export interface AutocompleteProps {
  items: AutocompleteItemProps[];
  groups?: Record<string, AutocompleteGroupProps>;
  expanded?: boolean;
  className?: string;
  onSelect?: () => void;
}

export const Autocomplete = ({ className, items, groups = {}, expanded }: AutocompleteProps) => {
  const { menu, setActiveIndex } = useMenu<AutocompleteItemProps, AutocompleteGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents: true,
  });
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
                    <AutocompleteItem {...itemProps} active={active} />
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
