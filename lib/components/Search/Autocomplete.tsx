import { useRef } from 'react';
import {
  AutocompleteBase,
  AutocompleteGroup,
  type AutocompleteGroupProps,
  AutocompleteItem,
  type AutocompleteItemProps,
} from '..';
import { useMenu } from '../../hooks';
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
    if (expanded) {
      const activeItem = ref.current?.querySelector('[data-active="true"]') as HTMLElement | null;
      if (activeItem) {
        const isLink = activeItem.tagName === 'A' && activeItem.hasAttribute('href');
        if (!isLink) {
          activeItem.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        } else {
          activeItem.click();
        }
      }
      onSelect?.();
    }
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
                  <AutocompleteItem
                    as="button"
                    key={index}
                    tabIndex={-1}
                    onMouseEnter={() => setActiveIndex(menuIndex)}
                    {...itemProps}
                    onClick={() => {
                      onClick?.();
                      onSelect?.();
                    }}
                    active={active}
                  />
                );
              })}
            </ul>
          </AutocompleteGroup>
        );
      })}
    </AutocompleteBase>
  );
};
