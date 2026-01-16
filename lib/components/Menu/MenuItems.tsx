'use client';
import { type CSSProperties, type ElementType, Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { MenuItem, MenuList, MenuListDivider, MenuListGroup, MenuListHeading, MenuListItem } from '../';
import type { MenuItemProps } from '../';
import { useMenu } from '../../hooks';
import { MenuListSearch, type MenuListSearchProps } from './MenuListSearch.tsx';

export interface MenuGroupProps {
  title?: string;
  hidden?: boolean;
  divider?: boolean;
  size?: MenuItemProps['size'];
  variant?: MenuItemProps['variant'];
  color?: MenuItemProps['color'];
}

export type MenuItemGroups = Record<string, MenuGroupProps>;

export interface MenuItemsProps {
  id?: string;
  level?: number;
  maxLevels?: number;
  expanded?: boolean;
  a11yMode?: 'menu' | 'combobox';
  open?: boolean;
  scrollToTopOnOpen?: boolean;
  autoActivateFirstItem?: boolean;
  announceNoResults?: boolean;
  search?: MenuListSearchProps;
  items: MenuItemProps[];
  groups?: MenuItemGroups;
  size?: MenuItemProps['size'];
  variant?: MenuItemProps['variant'];
  color?: MenuItemProps['color'];
  as?: ElementType;
  keyboardEvents?: boolean;
  onSelect?: () => void;
  scrollRefStyles?: CSSProperties;
  onActiveItemIdChange?: (id: string | undefined) => void;
}

export const MenuItems = ({
  level = 0,
  maxLevels,
  expanded,
  a11yMode = 'menu',
  open,
  scrollToTopOnOpen = false,
  autoActivateFirstItem = true,
  announceNoResults = false,
  search,
  items,
  groups = {},
  size,
  id,
  color,
  variant,
  scrollRefStyles = {},
  keyboardEvents = false,
  onSelect = () => {},
  onActiveItemIdChange,
}: MenuItemsProps) => {
  if (maxLevels && level >= maxLevels) {
    return null;
  }

  const isCombobox = a11yMode === 'combobox';
  const listId = isCombobox && id ? `${id}-listbox` : id;
  const prevOpenRef = useRef<boolean | undefined>(open);
  const prevFocusOpenRef = useRef<boolean | undefined>(open);
  const [isListNavigationActive, setIsListNavigationActive] = useState(false);

  const itemsWithIds = useMemo(
    () =>
      items.map((item, index) => ({
        ...item,
        id: item.id || `${id}-item-${index}`,
      })),
    [items, id],
  );

  const ref = useRef<HTMLUListElement>(null);
  const { menu, setActiveIndex, activeItem } = useMenu<MenuItemProps, MenuGroupProps>({
    items: itemsWithIds,
    groups,
    groupByKey: 'groupId',
    keyboardEvents,
    autoActivateFirstItem,
    onSelect,
    ref,
  });

  useEffect(() => {
    onActiveItemIdChange?.(activeItem?.id);
  }, [activeItem?.id, onActiveItemIdChange]);

  useEffect(() => {
    if (!scrollToTopOnOpen) {
      prevOpenRef.current = open;
      return;
    }
    const wasOpen = prevOpenRef.current;
    prevOpenRef.current = open;
    if (open && !wasOpen) {
      ref.current?.scrollTo({ top: 0 });
    }
  }, [open, scrollToTopOnOpen]);

  useEffect(() => {
    const wasOpen = prevFocusOpenRef.current;
    prevFocusOpenRef.current = open;

    if (!keyboardEvents || search) {
      return;
    }

    if (open && !wasOpen) {
      requestAnimationFrame(() => ref.current?.focus?.({ preventScroll: true }));
    }
  }, [open, keyboardEvents, search]);

  useEffect(() => {
    if (!isCombobox) {
      return;
    }
    if (announceNoResults) {
      setActiveIndex(0);
      setIsListNavigationActive(true);
      return;
    }
  }, [announceNoResults, isCombobox, setActiveIndex]);

  return (
    <MenuList
      variant={variant}
      expanded={expanded}
      ref={ref}
      style={scrollRefStyles}
      id={listId}
      role={isCombobox ? 'listbox' : undefined}
      tabIndex={keyboardEvents ? -1 : undefined}
    >
      {search && (
        <MenuListSearch
          {...search}
          combobox={isCombobox}
          listId={listId}
          aria-activedescendant={isCombobox && isListNavigationActive ? activeItem?.id : undefined}
          onNavigate={isCombobox ? () => setIsListNavigationActive(true) : undefined}
          onChange={(e) => {
            setIsListNavigationActive(false);
            search.onChange?.(e);
          }}
          onFocus={(e) => {
            setIsListNavigationActive(false);
            search.onFocus?.(e);
          }}
          onInput={(e) => {
            setIsListNavigationActive(false);
            search.onInput?.(e);
          }}
          onKeyDown={(e) => {
            const isArrow = e.key === 'ArrowUp' || e.key === 'ArrowDown';
            const isTypingKey = e.key.length === 1 || e.key === 'Backspace' || e.key === 'Delete';
            if (isCombobox && !isArrow && isTypingKey) {
              setIsListNavigationActive(false);
            }
            search.onKeyDown?.(e);
          }}
        />
      )}
      {menu.map((group, groupIndex) => {
        const groupProps: MenuGroupProps = group?.props || {};
        const { title, hidden = false, divider = true } = groupProps;
        return (
          <Fragment key={groupIndex}>
            {/** Render a separator if this is a new group or a new level */}
            {(level > 0 || groupIndex) && divider ? <MenuListDivider /> : ''}
            <MenuListGroup hidden={hidden} key={groupIndex}>
              <MenuList role="presentation">
                {title && <MenuListHeading title={title} level={level} />}
                {group?.items
                  .filter((item) => !item.props?.hidden)
                  .map((item, index) => {
                    const { active, onMouseEnter } = item;
                    const { groupId: _, ...itemProps } = item.props || {};
                    const { expanded } = itemProps;
                    const hasSubmenu = Array.isArray(itemProps?.items) && itemProps.items.length > 0;
                    const isCheckable = itemProps.role === 'checkbox' || itemProps.role === 'radio';
                    const resolvedRole = isCombobox && !isCheckable ? 'option' : itemProps.role;
                    return (
                      <MenuListItem
                        key={index}
                        expanded={expanded}
                        onMouseLeave={() => setActiveIndex(-1)}
                        role={isCombobox || isCheckable ? 'presentation' : undefined}
                      >
                        <MenuItem
                          {...itemProps}
                          size={itemProps?.size || groupProps?.size || size}
                          color={itemProps?.color || groupProps?.color || color}
                          variant={itemProps?.variant || groupProps?.variant || variant}
                          active={active}
                          role={resolvedRole}
                          selected={isCombobox && !isCheckable ? active : itemProps.selected}
                          tabIndex={itemProps?.disabled || keyboardEvents ? -1 : (itemProps.tabIndex ?? 0)}
                          onMouseEnter={onMouseEnter}
                          aria-haspopup={hasSubmenu ? 'menu' : undefined}
                          aria-expanded={hasSubmenu ? expanded : undefined}
                          aria-controls={hasSubmenu ? itemProps.id + '-menu' : undefined}
                        />
                        {expanded && itemProps?.items && (
                          <MenuItems
                            id={itemProps.id + '-menu'}
                            expanded={expanded}
                            level={level + 1}
                            maxLevels={maxLevels}
                            items={itemProps?.items}
                            groups={groups}
                            size={size}
                            color={color}
                            variant={variant}
                          />
                        )}
                      </MenuListItem>
                    );
                  })}
              </MenuList>
            </MenuListGroup>
          </Fragment>
        );
      })}
    </MenuList>
  );
};
