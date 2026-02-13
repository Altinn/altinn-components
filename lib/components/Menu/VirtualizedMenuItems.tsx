'use client';

import { type CSSProperties, useLayoutEffect } from 'react';
import type React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { MenuItem, MenuList, MenuListDivider, MenuListGroup, MenuListHeading, MenuListItem } from '../';
import type { MenuItemProps } from '../';
import { useMenu } from '../../hooks';
import type { MenuGroupProps, MenuItemsProps } from './MenuItems';
import { MenuListSearch } from './MenuListSearch.tsx';
import { useMenuVirtualization } from './useMenuVirtualization';

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
    open,
    scrollToTopOnOpen = false,
    autoActivateFirstItem = true,
    announceNoResults = false,
    onActiveItemIdChange,
  } = props;

  const isCombobox = a11yMode === 'combobox';
  const listId = isCombobox && id ? `${id}-listbox` : id;
  const prevOpenRef = useRef<boolean | undefined>(open);
  const [isListNavigationActive, setIsListNavigationActive] = useState(false);

  const itemsWithIds = useMemo(
    () =>
      items.map((item, index) => ({
        ...item,
        id: item.id || `${id}-item-${index}`,
      })),
    [items, id],
  );

  const { menu, activeItem, setActiveIndex, activeIndex } = useMenu<MenuItemProps, MenuGroupProps>({
    items: itemsWithIds,
    groups,
    groupByKey: 'groupId',
    keyboardEvents,
    autoActivateFirstItem,
    ref: scrollRef,
  });

  const { flatMenu, virtualizer, scrollMaxHeight } = useMenuVirtualization<MenuItemProps>({
    menu,
    scrollRef: scrollRef as React.RefObject<HTMLUListElement>,
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

  const itemPositions = useMemo(() => {
    const positions = new Map<number, number>();
    let count = 0;
    flatMenu.forEach((entry, index) => {
      if (entry.type === 'item') {
        count += 1;
        positions.set(index, count);
      }
    });
    return { positions, total: count };
  }, [flatMenu]);

  useEffect(() => {
    onActiveItemIdChange?.(activeItem?.id);
  }, [activeItem?.id, onActiveItemIdChange]);

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

  useEffect(() => {
    if (!scrollToTopOnOpen) {
      prevOpenRef.current = open;
      return;
    }
    const wasOpen = prevOpenRef.current;
    prevOpenRef.current = open;
    if (open && !wasOpen) {
      scrollRef.current?.scrollTo({ top: 0 });
    }
  }, [open, scrollToTopOnOpen]);

  const scrollRefStyle = {
    position: 'relative',
    maxHeight: style?.maxHeight || scrollMaxHeight,
    margin: '-0.5rem',
    padding: '0.5rem',
    minWidth: style?.minWidth ?? '20rem',
    overflowY: 'auto',
    ...style,
  } as CSSProperties;

  return (
    <MenuList
      ref={scrollRef}
      style={scrollRefStyle}
      variant={variant}
      color={color}
      expanded={expanded}
      id={listId}
      role={isCombobox ? 'listbox' : undefined}
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

      <MenuListGroup
        ref={listGroupRef}
        style={{
          position: 'relative',
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
        }}
      >
        <MenuList style={{ width: '100%', minWidth: '100%' }}>
          {virtualizer.getVirtualItems().map((virtualRow) => {
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
                return (
                  <MenuListDivider
                    key={virtualRow.key}
                    {...commonProps}
                    style={{ ...rowStyle, padding: '0.25rem 0' }}
                  />
                );

              case 'header':
                return <MenuListHeading key={virtualRow.key} {...commonProps} title={entry.title || ''} level={1} />;

              default: {
                const isCheckable = entry.itemProps?.role === 'checkbox' || entry.itemProps?.role === 'radio';
                const resolvedRole = isCombobox && !isCheckable ? 'option' : entry.itemProps?.role;
                return (
                  <MenuListItem
                    key={virtualRow.key}
                    {...commonProps}
                    role={isCombobox || isCheckable ? 'presentation' : 'menuitem'}
                  >
                    <MenuItem
                      {...(entry.itemProps || {})}
                      size={entry.itemProps?.size || size}
                      color={entry.itemProps?.color || color}
                      variant={entry.itemProps?.variant || variant}
                      active={entry.active}
                      role={resolvedRole}
                      selected={entry.itemProps?.selected}
                      aria-posinset={isCombobox ? itemPositions.positions.get(virtualRow.index) : undefined}
                      aria-setsize={isCombobox ? itemPositions.total : undefined}
                      tabIndex={entry.itemProps?.disabled || keyboardEvents ? -1 : 0}
                    />
                  </MenuListItem>
                );
              }
            }
          })}
        </MenuList>
      </MenuListGroup>
    </MenuList>
  );
};
