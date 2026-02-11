'use client';
import { type MouseEventHandler, useCallback, useEffect, useMemo, useState } from 'react';
import { useEnterKey } from './useEnterKey.ts';

export interface UseMenuItemProps<T> {
  menuIndex: number;
  props: T;
  active?: boolean;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
}

export interface UseMenuGroup<T, V> {
  items: UseMenuItemProps<T>[];
  props: Record<string, V>;
}

export interface UseMenuOutput<T, V> {
  menu: UseMenuGroup<T, V>[];
  activeIndex: number;
  setActiveIndex: (activeIndex: number) => void;
  activeItem: T | undefined;
}

export interface UseMenuInput<T, V> {
  items: T[];
  groups: Record<string, V>;
  ref?: React.Ref<HTMLElement>;
  groupByKey?: keyof T;
  keyboardEvents?: boolean;
  autoActivateFirstItem?: boolean;
  sortGroupBy?: (a: [string, T[]], b: [string, T[]]) => number;
  onSelect?: () => void;
  autoFocus?: boolean;
}

export const useMenu = <T, V>({
  items,
  groups,
  groupByKey,
  keyboardEvents = false,
  autoActivateFirstItem = true,
  sortGroupBy,
  onSelect,
  ref,
}: UseMenuInput<T, V>): UseMenuOutput<T, V> => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEnterKey((e) => {
    if (keyboardEvents) {
      const currentRef = ref && 'current' in ref ? ref.current : null;
      const activeItem = currentRef?.querySelector('[data-active="true"]') as HTMLElement | null;

      if (document.activeElement?.getAttribute('data-action') === 'clear-input') {
        return;
      }

      if (activeItem) {
        e.stopPropagation();
        e.preventDefault();

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

  const groupedItems = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        const key = groupByKey && item[groupByKey] ? (item[groupByKey] as string) : 'ungrouped';
        acc[key] = acc[key] || [];
        acc[key].push(item);
        return acc;
      },
      {} as Record<string, T[]>,
    );
  }, [items, groupByKey]);

  const flatItems: T[] = useMemo(
    () =>
      Object.values(groupedItems)
        .flat()
        // @ts-ignore: TODO: Fix Typescript error for disabled item
        .filter((item) => !item?.disabled),
    [groupedItems],
  );

  const menu = useMemo(() => {
    return Object.entries(groupedItems)
      .sort(sortGroupBy || (() => 0))
      .map(([key, groupItems]) => ({
        items: groupItems.map((item) => ({
          menuIndex: flatItems.indexOf(item),
          active: activeIndex === flatItems.indexOf(item),
          onMouseEnter: keyboardEvents
            ? () => {
                setActiveIndex(flatItems.indexOf(item));
              }
            : undefined,
          onMouseLeave: keyboardEvents
            ? () => {
                setActiveIndex(-1);
              }
            : undefined,
          props: item,
        })),
        props: {
          ...(groups[key] || {}),
        },
      }));
  }, [groupedItems, flatItems, activeIndex, keyboardEvents, sortGroupBy, groups]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActiveIndex((prevIndex) => (prevIndex <= 0 ? 0 : prevIndex - 1));
      }
    },
    [items.length],
  );

  useEffect(() => {
    if (keyboardEvents) {
      if (autoActivateFirstItem) {
        setActiveIndex(0);
      } else {
        setActiveIndex(-1);
      }
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, keyboardEvents, autoActivateFirstItem]);

  return { menu, activeIndex, setActiveIndex, activeItem: flatItems[activeIndex] };
};
