'use client';
import { type CSSProperties, type ElementType, Fragment, useEffect, useId, useMemo, useRef, useState } from 'react';
import { MenuItem, MenuList, MenuListDivider, MenuListGroup, MenuListHeading, MenuListItem } from '../';
import type { MenuItemProps } from '../';
import { useMenu } from '../../hooks';
import { MenuItemsLoading } from './MenuItemsLoading.tsx';
import { MenuListSearch, type MenuListSearchProps } from './MenuListSearch.tsx';
import { findListTitleIndex, isMultiSelectable } from './aria.ts';
import { useRovingFocus } from './useRovingFocus.ts';

export interface MenuGroupProps {
  title?: string;
  /** In plain lists: `heading` (default) or plain `text`. */
  titleAs?: 'heading' | 'text';
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
  /** `list`: plain list of buttons, with `controls` rendered beside each item. */
  a11yMode?: 'menu' | 'listbox' | 'combobox' | 'navigation' | 'list';
  /** `focus`: keys only act when focus is in the list, and add Home, End, Space and type-ahead. Default `document`. */
  keyboardScope?: 'document' | 'focus';
  'aria-label'?: string;
  'aria-labelledby'?: string;
  /** Heading level for group titles in plain lists. Default 2. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  open?: boolean;
  scrollToTopOnOpen?: boolean;
  autoActivateFirstItem?: boolean;
  autoFocusList?: boolean;
  resetActiveSignal?: number;
  announceNoResults?: boolean;
  /** Render skeleton rows instead of items, e.g. while items are being fetched */
  loading?: boolean;
  /** Number of skeleton rows while loading, default 3 */
  loadingCount?: number;
  /** Group heading shown above the skeleton rows while loading */
  loadingTitle?: string;
  /** Announced to screen readers while loading */
  loadingLabel?: string;
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
  keyboardScope,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  headingLevel = 2,
  open,
  scrollToTopOnOpen = false,
  autoActivateFirstItem = true,
  autoFocusList = true,
  announceNoResults = false,
  loading = false,
  loadingCount,
  loadingTitle,
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
  const isNavigation = a11yMode === 'navigation' || a11yMode === 'list';
  const hasOptions = isCombobox || a11yMode === 'listbox';
  const generatedId = useId();
  const baseId = id ?? `menu-${generatedId}`;
  const listId = hasOptions && id ? `${id}-listbox` : id;
  const prevOpenRef = useRef<boolean | undefined>(open);
  const prevFocusOpenRef = useRef<boolean | undefined>(open);
  const [isListNavigationActive, setIsListNavigationActive] = useState(false);

  /** Skeleton rows are not items, so keyboard navigation has nothing to land on while loading */
  const itemsWithIds = useMemo(
    () =>
      (loading ? [] : items).map((item, index) => ({
        ...item,
        id: `${baseId}-item-${index}`,
      })),
    [items, baseId, loading],
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
    keyboardScope,
    getItemLabel: (item) => item.title,
    revealActiveItem: true,
  });

  useEffect(() => {
    onActiveItemIdChange?.(activeItem?.id);
  }, [activeItem?.id, onActiveItemIdChange]);

  /** Real focus on items, except in a combobox where focus stays in the search field. */
  const rovingFocus = keyboardEvents && keyboardScope === 'focus' && !isCombobox && !isNavigation;
  const { onFocus: onListFocus } = useRovingFocus({ enabled: rovingFocus, listRef: ref, activeId: activeItem?.id });

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

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const wasOpen = prevFocusOpenRef.current;
    prevFocusOpenRef.current = open;

    if (!keyboardEvents || search || !autoFocusList) {
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
      // The search status announces it, so the field does not point to the row.
      setActiveIndex(0);
      return;
    }
  }, [announceNoResults, isCombobox, setActiveIndex]);

  const searchElement = search ? (
    <MenuListSearch
      {...search}
      combobox={isCombobox}
      inList={false}
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
  ) : null;

  const renderItem = (item: (typeof menu)[number]['items'][number], index: number, groupProps: MenuGroupProps) => {
    const { active, onMouseEnter } = item;
    const { groupId: _, ...itemProps } = item.props || {};
    const { expanded } = itemProps;
    const hasSubmenu = Array.isArray(itemProps?.items) && itemProps.items.length > 0;
    const isCheckable = itemProps.role === 'checkbox' || itemProps.role === 'radio';
    const menuCheckableRole = itemProps.role === 'radio' ? 'menuitemradio' : 'menuitemcheckbox';
    const resolvedRole = isNavigation
      ? undefined
      : hasOptions
        ? 'option'
        : isCheckable
          ? menuCheckableRole
          : itemProps.role;
    /** Only a button that shows and hides sub-items has an expanded state, not a link. */
    const togglesSubmenu = hasSubmenu && (!isNavigation || (!itemProps.href && !itemProps.as));
    return (
      <MenuListItem
        key={index}
        expanded={expanded}
        onMouseLeave={() => setActiveIndex(-1)}
        role={isNavigation ? 'listitem' : 'presentation'}
      >
        <MenuItem
          {...itemProps}
          size={itemProps?.size || groupProps?.size || size}
          color={itemProps?.color || groupProps?.color || color}
          variant={itemProps?.variant || groupProps?.variant || variant}
          active={active}
          role={resolvedRole}
          checkableType={isCheckable ? (itemProps.role as 'checkbox' | 'radio') : undefined}
          a11yMode={a11yMode}
          selected={itemProps.selected}
          tabIndex={itemProps?.disabled || keyboardEvents ? -1 : (itemProps.tabIndex ?? 0)}
          controlsPlacement={a11yMode === 'list' ? 'beside' : undefined}
          onMouseEnter={onMouseEnter}
          aria-haspopup={hasSubmenu && !isNavigation ? 'menu' : undefined}
          aria-expanded={togglesSubmenu ? (isNavigation ? Boolean(expanded) : expanded) : undefined}
          aria-controls={togglesSubmenu && (expanded || !isNavigation) ? itemProps.id + '-menu' : undefined}
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
            a11yMode={a11yMode}
            headingLevel={headingLevel}
          />
        )}
      </MenuListItem>
    );
  };

  /** Plain list: each group is its own list, with its title as a heading. */
  if (isNavigation) {
    const Heading = `h${Math.min(6, headingLevel + level)}` as ElementType;
    return (
      <>
        {searchElement}
        <MenuList
          as="div"
          variant={variant}
          expanded={expanded}
          ref={ref}
          style={scrollRefStyles}
          id={listId}
          aria-busy={loading || undefined}
        >
          {loading && (
            <MenuList role="presentation">
              <MenuItemsLoading count={loadingCount} size={size} title={loadingTitle} />
            </MenuList>
          )}
          {menu.map((group, groupIndex) => {
            const groupProps: MenuGroupProps = group?.props || {};
            const { title, titleAs = 'heading', hidden = false, divider = true } = groupProps;
            const headingId = `${baseId}-group-${groupIndex}`;
            const isText = titleAs === 'text';
            const visibleItems = group?.items.filter((item) => !item.props?.hidden) ?? [];
            return (
              <Fragment key={groupIndex}>
                {(level > 0 || groupIndex) && divider ? <MenuListDivider as="div" /> : ''}
                <MenuListGroup as="div" hidden={hidden}>
                  {title && <MenuListHeading as={isText ? 'p' : Heading} id={headingId} title={title} level={level} />}
                  {visibleItems.length > 0 && (
                    // biome-ignore lint/a11y/useSemanticElements: Safari drops list semantics without the role when list-style is none
                    <MenuList role="list" aria-labelledby={title && !isText ? headingId : undefined}>
                      {visibleItems.map((item, index) => renderItem(item, index, groupProps))}
                    </MenuList>
                  )}
                </MenuListGroup>
              </Fragment>
            );
          })}
        </MenuList>
      </>
    );
  }

  /** A single title on the first group names the whole list. */
  const listTitleIndex = findListTitleIndex(menu.map((group) => group?.props as MenuGroupProps | undefined));
  const listTitleId = listTitleIndex >= 0 ? `${baseId}-group-${listTitleIndex}` : undefined;

  const list = (
    <MenuList
      variant={variant}
      expanded={expanded}
      ref={ref}
      style={scrollRefStyles}
      id={listId}
      role={hasOptions ? 'listbox' : 'menu'}
      aria-multiselectable={(hasOptions && isMultiSelectable(items)) || undefined}
      aria-label={listTitleId ? undefined : ariaLabel}
      aria-labelledby={listTitleId ?? (ariaLabel ? undefined : ariaLabelledby)}
      aria-activedescendant={keyboardEvents && !isCombobox && !rovingFocus ? activeItem?.id : undefined}
      tabIndex={keyboardEvents ? -1 : undefined}
      focusTarget={keyboardEvents && level === 0}
      onFocus={rovingFocus ? onListFocus : undefined}
      aria-busy={loading || undefined}
    >
      {loading && <MenuItemsLoading count={loadingCount} size={size} title={loadingTitle} />}
      {menu.map((group, groupIndex) => {
        const groupProps: MenuGroupProps = group?.props || {};
        const { title, hidden = false, divider = true } = groupProps;
        const headingId = `${baseId}-group-${groupIndex}`;
        return (
          <Fragment key={groupIndex}>
            {/** Render a separator if this is a new group or a new level */}
            {(level > 0 || groupIndex) && divider ? <MenuListDivider /> : ''}
            <MenuListGroup hidden={hidden} key={groupIndex}>
              {/* The title names the group and is hidden, so it is not read as an item. */}
              <MenuList
                role={title && groupIndex !== listTitleIndex ? 'group' : 'presentation'}
                aria-labelledby={title && groupIndex !== listTitleIndex ? headingId : undefined}
              >
                {title && <MenuListHeading id={headingId} title={title} level={level} hidden />}
                {group?.items
                  .filter((item) => !item.props?.hidden)
                  .map((item, index) => renderItem(item, index, groupProps))}
              </MenuList>
            </MenuListGroup>
          </Fragment>
        );
      })}
    </MenuList>
  );

  return searchElement ? (
    <>
      {searchElement}
      {list}
    </>
  ) : (
    list
  );
};
