'use client';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect, useMemo, useRef, useState } from 'react';
import { MenuHeader, MenuItem, MenuList, MenuListItem } from '../';
import type { MenuItemProps } from '../';
import { useMenu } from '../../hooks';
import type { MenuGroupProps, MenuItemsProps } from './MenuItems';
import { MenuSearch } from './MenuSearch';
import styles from './menuItemsVirtual.module.css';

interface SeparatorEntry {
  type: 'separator';
}

interface TitleEntry {
  type: 'title';
  title: string;
}

interface ItemEntry {
  type: 'item';
  itemProps: MenuItemProps;
  active: boolean;
  hasChildren: boolean;
  isLastItem: boolean;
}

type MenuEntry = SeparatorEntry | TitleEntry | ItemEntry;

export const MenuItemsVirtual = ({
  level = 0,
  search,
  items,
  groups = {},
  defaultItemSize,
  defaultItemColor,
  defaultItemVariant,
  defaultIconTheme,
  keyboardEvents,
}: MenuItemsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // calculate scroll ref styles

  const scrollTop = scrollRef.current?.getBoundingClientRect().top;

  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const changeWindowSize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', changeWindowSize);
    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  const scrollMaxHeight = useMemo(() => {
    return (scrollTop && windowHeight - scrollTop - 8) || 400;
  }, [windowHeight, scrollTop]);

  const scrollRefStyles = {
    maxHeight: scrollMaxHeight <= 300 ? 300 : scrollMaxHeight,
  };

  const { menu } = useMenu<MenuItemProps, MenuGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents,
    ref: scrollRef,
  });

  const flatMenu = menu.flatMap((group, groupIndex) => {
    const groupProps: MenuGroupProps = group?.props || {};
    const { title } = groupProps;

    const items = group?.items?.filter((item) => !item.props?.hidden) || [];

    return [
      ...(groupIndex > 0 || level > 0 ? [{ type: 'separator' as const }] : []),
      ...(title ? [{ type: 'title' as const, title }] : []),
      ...items.map((item, index) => ({
        type: 'item' as const,
        itemProps: item.props || {},
        active: item.active,
        hasChildren: item.props?.expanded && item.props?.items,
        isLastItem: index === items.length - 1,
      })),
    ];
  });

  const virtualizer = useVirtualizer({
    count: flatMenu.length,
    gap: 8,
    estimateSize: () => {
      return 44;
    },
    getScrollElement: () => scrollRef.current,
  });
  const virtualItems = virtualizer.getVirtualItems();

  // biome-ignore lint/correctness/useExhaustiveDependencies: This hook does not specify all of its dependencies
  useEffect(() => {
    for (const virtualItem of virtualItems) {
      const element =
        (scrollRef.current?.querySelector(`[data-index="${virtualItem.index}"]`) as HTMLElement | null) ??
        (scrollRef.current?.querySelector(`[dataindex="${virtualItem.index}"]`) as HTMLElement | null) ??
        (scrollRef.current?.querySelector(`[dataIndex="${virtualItem.index}"]`) as HTMLElement | null);
      if (element) {
        virtualizer.measureElement(element);
      }
    }
  }, [virtualItems]);

  // --- keyboard-only neighbor-aware auto scroll (UP/DOWN) ---
  const lastInputWasKeyboardRef = useRef(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        lastInputWasKeyboardRef.current = true;
      }
    };
    const onMouseLike = () => {
      lastInputWasKeyboardRef.current = false;
    };

    document.addEventListener('keydown', onKeyDown, true);

    const scroller = scrollRef.current;
    scroller?.addEventListener('wheel', onMouseLike, { passive: true });
    scroller?.addEventListener('mousedown', onMouseLike, true);
    scroller?.addEventListener('mousemove', onMouseLike, true);
    scroller?.addEventListener('touchstart', onMouseLike, { passive: true });

    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      scroller?.removeEventListener('wheel', onMouseLike as EventListener);
      scroller?.removeEventListener('mousedown', onMouseLike as EventListener);
      scroller?.removeEventListener('mousemove', onMouseLike as EventListener);
      scroller?.removeEventListener('touchstart', onMouseLike as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!keyboardEvents) return;
    if (!lastInputWasKeyboardRef.current) return;

    const container = scrollRef.current;
    if (!container) return;

    const PAD = 6;

    const targetIndex = flatMenu.findIndex((entry) => entry.type === 'item' && entry.active);
    if (targetIndex < 0) return;

    const getRow = (i: number) =>
      (container.querySelector<HTMLElement>(`[data-index="${i}"]`) ||
        container.querySelector<HTMLElement>(`[dataindex="${i}"]`) ||
        container.querySelector<HTMLElement>(`[dataIndex="${i}"]`)) ??
      null;

    const activeEl = getRow(targetIndex);

    if (!activeEl) {
      virtualizer.scrollToIndex(targetIndex, { align: 'auto' });
      lastInputWasKeyboardRef.current = false;
      return;
    }

    const contRect = container.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();

    const prevEl = getRow(targetIndex - 1);
    const nextEl = getRow(targetIndex + 1);

    if (nextEl) {
      const nextRect = nextEl.getBoundingClientRect();
      if (nextRect.bottom > contRect.bottom) {
        container.scrollTop += nextRect.bottom - contRect.bottom + PAD;
        lastInputWasKeyboardRef.current = false;
        return;
      }
    }

    if (prevEl) {
      const prevRect = prevEl.getBoundingClientRect();
      if (prevRect.top < contRect.top) {
        container.scrollTop -= contRect.top - prevRect.top + PAD;
        lastInputWasKeyboardRef.current = false;
        return;
      }
    }

    if (activeRect.top < contRect.top + PAD) {
      container.scrollTop -= contRect.top + PAD - activeRect.top;
    } else if (activeRect.bottom > contRect.bottom - PAD) {
      container.scrollTop += activeRect.bottom - (contRect.bottom - PAD);
    }

    lastInputWasKeyboardRef.current = false;
  }, [flatMenu, keyboardEvents, virtualizer]);

  return (
    <MenuList>
      <div ref={scrollRef} className={styles.virtualScrollRef} style={scrollRefStyles}>
        {search && (
          <div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              marginTop: '-0.5rem',
            }}
          >
            <MenuSearch {...search} />
          </div>
        )}
        <div
          style={{
            position: 'relative',
            height: `${virtualizer.getTotalSize()}px`,
          }}
        >
          {virtualItems.map((virtualRow) => {
            const entry = flatMenu[virtualRow.index] as MenuEntry;
            if (!entry) return null;
            return (
              <MenuListItem
                dataIndex={virtualRow.index}
                key={virtualRow.key}
                className={styles.virtualMenuListItem}
                style={{ transform: `translateY(${virtualRow.start}px)` }}
                role={entry.type === 'separator' ? 'separator' : undefined}
              >
                {entry.type === 'title' && <MenuHeader title={entry.title} />}
                {entry.type === 'item' && (
                  <MenuItem
                    {...entry.itemProps}
                    size={entry.itemProps.size || defaultItemSize}
                    color={entry.itemProps.color || defaultItemColor}
                    variant={entry.itemProps.variant || defaultItemVariant}
                    iconTheme={entry.itemProps.iconTheme || defaultIconTheme}
                    active={entry.active}
                    tabIndex={entry.itemProps.disabled || keyboardEvents ? -1 : 0}
                  />
                )}
              </MenuListItem>
            );
          })}
        </div>
      </div>
    </MenuList>
  );
};
