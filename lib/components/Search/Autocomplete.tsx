import { useRef } from 'react';
import {
  AutocompleteBase,
  AutocompleteGroup,
  type AutocompleteGroupProps,
  AutocompleteItem,
  type AutocompleteItemProps,
} from '..';
import { useMenu } from '../../hooks/index.ts';
import { useEnterKey } from '../../hooks/useEnterKey.ts';

export interface AutocompleteProps {
  items: AutocompleteItemProps[];
  groups?: Record<string, AutocompleteGroupProps>;
  onSelect?: () => void;
  expanded?: boolean;
  className?: string;
}

export const Autocomplete = ({ className, items, groups = {}, expanded, onSelect }: AutocompleteProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEnterKey(() => {
    const activeItem = ref.current?.querySelector('[data-active="true"]') as HTMLElement | null;
    const firstInteractiveItem = activeItem?.querySelector('a, button');
    firstInteractiveItem?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    onSelect?.();
  });

  const { menu, setActiveIndex } = useMenu<AutocompleteItemProps, AutocompleteGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents: true,
  });

  return (
    <AutocompleteBase className={className} expanded={expanded} ref={ref}>
      {menu.map((group, index) => {
        return (
          <AutocompleteGroup {...group.props} key={index}>
            <ul>
              {group.items.map((item, index) => {
                const {
                  active,
                  menuIndex,
                  props: { groupId, onClick, ...itemProps },
                } = item;
                return (
                  <li key={index} tabIndex={-1} onMouseEnter={() => setActiveIndex(menuIndex)}>
                    <AutocompleteItem
                      {...itemProps}
                      onClick={() => {
                        onClick?.();
                        onSelect?.();
                      }}
                      active={active}
                    />
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
