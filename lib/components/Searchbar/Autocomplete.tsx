import { Fragment, useEffect, useId, useRef } from 'react';
import { type MenuGroupProps, MenuList, MenuListDivider, MenuListGroup, MenuListHeading, MenuListItem } from '../';
import { useMenu } from '../../hooks';
import { findListTitleIndex } from '../Menu/aria.ts';
import { useRootContext } from '../RootProvider';
import { getCommonTexts } from '../RootProvider/commonTexts.ts';
import { AutocompleteBase, AutocompleteItem, type AutocompleteItemProps } from '../index.ts';

export interface AutocompleteProps {
  /** Id of the listbox, for `aria-controls` on the search field. */
  id?: string;
  items: AutocompleteItemProps[];
  groups?: Record<string, MenuGroupProps>;
  onSelect?: () => void;
  expanded?: boolean;
  className?: string;
  keyboardEvents?: boolean;
  'aria-label'?: string;
  /** For `aria-activedescendant` on the search field. */
  onActiveItemIdChange?: (id: string | undefined) => void;
}

export const Autocomplete = ({
  className,
  items,
  id,
  groups = {},
  expanded,
  keyboardEvents,
  onSelect,
  'aria-label': ariaLabelProp,
  onActiveItemIdChange,
}: AutocompleteProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const ariaLabel = ariaLabelProp ?? getCommonTexts(useRootContext().languageCode).suggestions;
  const generatedId = useId();
  const baseId = id ?? `autocomplete-${generatedId}`;

  const itemsWithIds = items.map((item, index) => ({
    ...item,
    id: item.id ? `${baseId}-${item.id}` : `${baseId}-item-${index}`,
  }));

  const { menu, setActiveIndex, activeItem } = useMenu<AutocompleteItemProps, MenuGroupProps>({
    items: itemsWithIds,
    groups,
    groupByKey: 'groupId',
    keyboardEvents,
    onSelect,
    ref,
    revealActiveItem: true,
  });

  const activeId = keyboardEvents && expanded ? activeItem?.id : undefined;
  useEffect(() => {
    onActiveItemIdChange?.(activeId);
  }, [activeId, onActiveItemIdChange]);

  const listTitleIndex = findListTitleIndex(menu.map((group) => group?.props as MenuGroupProps | undefined));
  const headingId = (groupIndex: number) => `${baseId}-group-${groupIndex}`;

  return (
    <AutocompleteBase className={className} expanded={expanded} ref={ref}>
      <MenuList
        variant="default"
        id={baseId}
        // biome-ignore lint/a11y/useSemanticElements: options hold icons and badges, which a native select cannot
        role="listbox"
        aria-label={listTitleIndex >= 0 ? undefined : ariaLabel}
        aria-labelledby={listTitleIndex >= 0 ? headingId(listTitleIndex) : undefined}
      >
        {menu.map((group, groupIndex) => {
          const groupProps: MenuGroupProps = group?.props || {};
          const { title, divider = true } = groupProps;
          const isGroup = Boolean(title) && groupIndex !== listTitleIndex;
          return (
            <Fragment key={groupIndex}>
              {/** Render a separator if this is a new group or a new level */}
              {groupIndex && divider ? <MenuListDivider /> : null}
              <MenuListGroup>
                {/* The title names the group and is hidden, so it is not read as a suggestion. */}
                <MenuList
                  role={isGroup ? 'group' : 'presentation'}
                  aria-labelledby={isGroup ? headingId(groupIndex) : undefined}
                >
                  {title && <MenuListHeading id={headingId(groupIndex)} title={title} level={1} hidden />}
                  {group?.items
                    .filter((item) => !item.props?.hidden)
                    .map((item, index) => {
                      const { active, onMouseEnter } = item;
                      const { groupId: _, onClick, ...itemProps } = item.props || {};
                      const { expanded } = itemProps;
                      return (
                        <MenuListItem
                          key={index}
                          role="presentation"
                          expanded={expanded}
                          onMouseLeave={() => setActiveIndex(-1)}
                        >
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
                </MenuList>
              </MenuListGroup>
            </Fragment>
          );
        })}
      </MenuList>
    </AutocompleteBase>
  );
};
