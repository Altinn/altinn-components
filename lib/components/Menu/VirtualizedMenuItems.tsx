'use client';

import { type CSSProperties, useId, useLayoutEffect } from 'react';
import type React from 'react';
import type { ElementType } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { MenuItem, MenuList, MenuListDivider, MenuListGroup, MenuListHeading, MenuListItem } from '../';
import type { MenuItemProps } from '../';
import { useMenu } from '../../hooks';
import type { MenuGroupProps, MenuItemsProps } from './MenuItems';
import { MenuItemsLoading } from './MenuItemsLoading.tsx';
import { MenuListSearch } from './MenuListSearch.tsx';
import { isMultiSelectable } from './aria.ts';
import { useMenuVirtualization } from './useMenuVirtualization';
import { useRovingFocus } from './useRovingFocus.ts';

export const VirtualizedMenuItems = (props: MenuItemsProps) => {
  const scrollRef = useRef<HTMLUListElement>(null);
  const listGroupRef = useRef<HTMLLIElement>(null);
  const [listOffsetTop, setListOffsetTop] = useState(0);

  const {
    search,
    items,
    groups = {},
    size,
    color,
    variant,
    keyboardEvents,
    scrollRefStyles: style = {},
    id,
    expanded,
    a11yMode = 'menu',
    keyboardScope,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    headingLevel = 2,
    open,
    scrollToTopOnOpen = false,
    autoActivateFirstItem = true,
    announceNoResults = false,
    loading = false,
    loadingCount,
    loadingTitle,
    onActiveItemIdChange,
  } = props;

  const isCombobox = a11yMode === 'combobox';
  const isNavigation = a11yMode === 'navigation' || a11yMode === 'list';
  const hasOptions = isCombobox || a11yMode === 'listbox';
  const generatedId = useId();
  const baseId = id ?? `menu-${generatedId}`;
  const listId = hasOptions && id ? `${id}-listbox` : id;
  const prevOpenRef = useRef<boolean | undefined>(open);
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

  const { menu, activeItem, setActiveIndex, activeIndex } = useMenu<MenuItemProps, MenuGroupProps>({
    items: itemsWithIds,
    groups,
    groupByKey: 'groupId',
    keyboardEvents,
    autoActivateFirstItem,
    ref: scrollRef,
    keyboardScope,
    getItemLabel: (item) => item.title,
  });

  /** Keep the active and focused rows rendered when scrolled out of view, so focus is not lost. */
  const keepRenderedRef = useRef<number[]>([]);
  const focusedRowRef = useRef(-1);
  const { flatMenu, virtualizer, scrollMaxHeight, listTitle } = useMenuVirtualization<MenuItemProps>({
    menu,
    scrollRef: scrollRef as React.RefObject<HTMLUListElement>,
    allowListTitle: !isNavigation,
    keepRenderedRef,
  });

  useLayoutEffect(() => {
    const el = listGroupRef.current;
    if (!el) return;
    const next = Math.round(el.offsetTop);
    setListOffsetTop((prev) => (prev === next ? prev : next));
  });

  const activeFlatIndex = useMemo(() => {
    const activeId = activeItem?.id;
    if (activeId) {
      return flatMenu.findIndex((entry) => entry.type === 'item' && entry.itemProps?.id === activeId);
    }
    if (activeIndex < 0) return -1;
    let itemIndex = -1;
    for (let i = 0; i < flatMenu.length; i++) {
      if (flatMenu[i]?.type === 'item') {
        itemIndex += 1;
        if (itemIndex === activeIndex) return i;
      }
    }
    return -1;
  }, [activeItem?.id, activeIndex, flatMenu]);

  const prevIndex = useRef<number | undefined>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useLayoutEffect(() => {
    const prev = prevIndex?.current;
    const upwards = typeof prev === 'number' ? activeFlatIndex <= prev : false;

    prevIndex.current = activeFlatIndex;

    const correctedIndex = upwards ? activeFlatIndex : activeFlatIndex + 2;

    if (!upwards) {
      const offsetAndAlign = virtualizer.getOffsetForIndex(correctedIndex, 'auto');
      if (!offsetAndAlign) return;

      const [offset, align] = offsetAndAlign;
      if (align === 'auto') return;

      virtualizer.scrollToOffset(offset + listOffsetTop + 10, { align: 'start' });
      return;
    }

    if (activeFlatIndex <= 3) {
      virtualizer.scrollToOffset(0);
      return;
    }

    const offsetAndAlign = virtualizer.getOffsetForIndex(activeFlatIndex - 1, 'auto');
    if (!offsetAndAlign) return;

    const [offset, align] = offsetAndAlign;
    if (align === 'auto') return;

    virtualizer.scrollToOffset(offset + listOffsetTop + 10, { align: 'start' });
  }, [activeFlatIndex, listOffsetTop, virtualizer, prevIndex]);

  /** Rows outside the view are not in the page, so each item states its position and set size. */
  const itemPositions = useMemo(() => {
    const positions = new Map<number, number>();
    const sizes = new Map<number | 'ungrouped', number>();
    const setOf = (entry: (typeof flatMenu)[number]) =>
      entry.groupTitle || isNavigation ? entry.groupIndex : 'ungrouped';
    flatMenu.forEach((entry, index) => {
      if (entry.type === 'item') {
        const count = (sizes.get(setOf(entry)) ?? 0) + 1;
        sizes.set(setOf(entry), count);
        positions.set(index, count);
      }
    });
    return { positions, sizeOf: (entry: (typeof flatMenu)[number]) => sizes.get(setOf(entry)) };
  }, [flatMenu, isNavigation]);

  keepRenderedRef.current = [activeFlatIndex, focusedRowRef.current];

  useEffect(() => {
    onActiveItemIdChange?.(activeItem?.id);
  }, [activeItem?.id, onActiveItemIdChange]);

  /** Real focus on items, except in a combobox where focus stays in the search field. */
  const rovingFocus = Boolean(keyboardEvents) && keyboardScope === 'focus' && !isCombobox && !isNavigation;
  const { onFocus: onListFocus } = useRovingFocus({
    enabled: rovingFocus,
    listRef: scrollRef,
    activeId: activeItem?.id,
  });

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

  useEffect(() => {
    const wasOpen = prevOpenRef.current;
    prevOpenRef.current = open;
    if (!open || wasOpen) return;
    virtualizer.measure();
    if (scrollToTopOnOpen) {
      // Through the virtualizer, or it scrolls back on the next measure.
      virtualizer.scrollToOffset(0);
      scrollRef.current?.scrollTo({ top: 0 });
    }
  }, [open, scrollToTopOnOpen, virtualizer]);

  const scrollRefStyle = {
    position: 'relative',
    maxHeight: style?.maxHeight || scrollMaxHeight,
    margin: '-0.5rem',
    padding: '0.5rem 0.5rem 1rem 0.5rem',
    minWidth: style?.minWidth ?? '20rem',
    overflowY: 'auto',
    ...style,
  } as CSSProperties;

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

  const lastIndex = flatMenu.length - 1;

  const renderRow = (virtualRow: ReturnType<typeof virtualizer.getVirtualItems>[number]) => {
    const entry = flatMenu[virtualRow.index];
    if (!entry) return null;

    const rowStyle: CSSProperties = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      transform: `translateY(${virtualRow.start}px)`,
    };

    const commonProps = {
      style: rowStyle,
      index: virtualRow.index,
      'data-index': virtualRow.index,
      ref: virtualizer.measureElement,
    };

    switch (entry.type) {
      case 'divider':
        return <MenuListDivider key={virtualRow.key} {...commonProps} style={{ ...rowStyle, padding: '0.25rem 0' }} />;

      case 'header':
        return (
          <MenuListHeading
            key={virtualRow.key}
            {...commonProps}
            as={isNavigation ? (entry.titleAs === 'text' ? 'p' : (`h${headingLevel}` as ElementType)) : undefined}
            title={entry.title || ''}
            level={1}
            hidden={!isNavigation}
          />
        );

      default: {
        const isCheckable = entry.itemProps?.role === 'checkbox' || entry.itemProps?.role === 'radio';
        const menuCheckableRole = entry.itemProps?.role === 'radio' ? 'menuitemradio' : 'menuitemcheckbox';
        const resolvedRole = isNavigation
          ? undefined
          : hasOptions
            ? 'option'
            : isCheckable
              ? menuCheckableRole
              : entry.itemProps?.role;
        return (
          <MenuListItem
            key={virtualRow.key}
            {...commonProps}
            // Padding cannot depend on which rows are rendered, since rows are measured.
            style={{
              ...rowStyle,
              paddingTop: virtualRow.index === 0 ? 0 : '0.25rem',
              paddingBottom: virtualRow.index === lastIndex ? 0 : '0.25rem',
            }}
            role={isNavigation ? 'listitem' : 'presentation'}
            aria-posinset={isNavigation ? itemPositions.positions.get(virtualRow.index) : undefined}
            aria-setsize={isNavigation ? itemPositions.sizeOf(entry) : undefined}
          >
            <MenuItem
              {...(entry.itemProps || {})}
              size={entry.itemProps?.size || size}
              color={entry.itemProps?.color || color}
              variant={entry.itemProps?.variant || variant}
              active={entry.active}
              role={resolvedRole}
              checkableType={isCheckable ? (entry.itemProps?.role as 'checkbox' | 'radio') : undefined}
              a11yMode={a11yMode}
              selected={entry.itemProps?.selected}
              aria-posinset={isNavigation ? undefined : itemPositions.positions.get(virtualRow.index)}
              aria-setsize={isNavigation ? undefined : itemPositions.sizeOf(entry)}
              tabIndex={entry.itemProps?.disabled || keyboardEvents ? -1 : 0}
              controlsPlacement={a11yMode === 'list' ? 'beside' : undefined}
            />
          </MenuListItem>
        );
      }
    }
  };

  /** Rows of a group are wrapped together: a named group in a menu or listbox, its own list in a plain list. */
  type VirtualRow = ReturnType<typeof virtualizer.getVirtualItems>[number];
  const segments: { key: string; grouped: boolean; title?: string; isText?: boolean; rows: VirtualRow[] }[] = [];
  for (const virtualRow of virtualizer.getVirtualItems()) {
    const entry = flatMenu[virtualRow.index];
    if (!entry) continue;
    const grouped = entry.type !== 'divider' && (isNavigation || Boolean(entry.groupTitle));
    const key = grouped ? `group-${entry.groupIndex}` : `row-${virtualRow.key}`;
    const last = segments[segments.length - 1];
    if (last && last.key === key) {
      last.rows.push(virtualRow);
    } else {
      segments.push({
        key,
        grouped,
        title: grouped ? entry.groupTitle : undefined,
        isText: entry.type !== 'divider' && entry.titleAs === 'text',
        rows: [virtualRow],
      });
    }
  }
  const isHeaderRow = (virtualRow: VirtualRow) => flatMenu[virtualRow.index]?.type === 'header';
  const plainStyle: CSSProperties = { margin: 0, padding: 0, listStyle: 'none' };

  const list = (
    <MenuList
      ref={scrollRef}
      style={scrollRefStyle}
      variant={variant}
      color={color}
      expanded={expanded}
      id={listId}
      role={hasOptions ? 'listbox' : isNavigation ? 'presentation' : 'menu'}
      aria-multiselectable={(hasOptions && isMultiSelectable(items)) || undefined}
      // The title row can be scrolled out of the page, so use the text.
      aria-label={isNavigation ? undefined : (listTitle ?? ariaLabel)}
      aria-labelledby={isNavigation || listTitle || ariaLabel ? undefined : ariaLabelledby}
      aria-activedescendant={
        keyboardEvents && !isCombobox && !isNavigation && !rovingFocus ? activeItem?.id : undefined
      }
      tabIndex={keyboardEvents ? -1 : undefined}
      focusTarget={keyboardEvents}
      onFocus={(event) => {
        const row = (event.target as HTMLElement).closest('[data-index]');
        focusedRowRef.current = row && row !== event.currentTarget ? Number(row.getAttribute('data-index')) : -1;
        if (rovingFocus) onListFocus(event);
      }}
      aria-busy={loading || undefined}
    >
      {loading && <MenuItemsLoading count={loadingCount} size={size} title={loadingTitle} />}

      <MenuListGroup
        ref={listGroupRef}
        style={{
          position: 'relative',
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
        }}
      >
        <MenuList role="presentation" style={{ width: '100%', minWidth: '100%' }}>
          {/* flatMap keeps keys stable, so rows are not remounted while scrolling */}
          {segments.flatMap((segment) => {
            if (!segment.grouped) {
              return segment.rows.map(renderRow);
            }
            if (isNavigation) {
              const itemRows = segment.rows.filter((row) => !isHeaderRow(row));
              return (
                <li key={segment.key} role="presentation">
                  {segment.rows.filter(isHeaderRow).map(renderRow)}
                  {itemRows.length > 0 && (
                    // biome-ignore lint/a11y/useSemanticElements: Safari drops list semantics without the role when list-style is none
                    <MenuList
                      role="list"
                      aria-label={segment.title && !segment.isText ? segment.title : undefined}
                      style={{ position: 'static' }}
                    >
                      {itemRows.map(renderRow)}
                    </MenuList>
                  )}
                </li>
              );
            }
            return (
              <li key={segment.key} role="presentation">
                {/* biome-ignore lint/a11y/useSemanticElements: a group in a menu or listbox cannot be a fieldset */}
                <ul role="group" aria-label={segment.title} style={plainStyle}>
                  {segment.rows.map(renderRow)}
                </ul>
              </li>
            );
          })}
        </MenuList>
      </MenuListGroup>
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
