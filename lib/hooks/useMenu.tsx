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
}

export interface UseMenuInput<T, V> {
  items: T[];
  groups: Record<string, V>;
  ref?: React.Ref<HTMLElement>;
  groupByKey?: keyof T;
  keyboardEvents?: boolean;
  sortGroupBy?: (a: [string, T[]], b: [string, T[]]) => number;
  onSelect?: () => void;
  autoFocus?: boolean;
}

export const useMenu = <T, V>({
  items,
  groups,
  groupByKey,
  keyboardEvents = false,
  sortGroupBy,
  onSelect,
  ref,
}: UseMenuInput<T, V>): UseMenuOutput<T, V> => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEnterKey((e) => {
    if (keyboardEvents) {
      const currentRef = ref && 'current' in ref ? ref.current : null;
      const activeItem = currentRef?.querySelector('[data-active="true"]') as HTMLElement | null;

      e.stopPropagation();
      e.preventDefault();

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

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const menu = useMemo(() => {
    const grouped = items.reduce(
      (acc, item) => {
        const key = groupByKey && item[groupByKey] ? (item[groupByKey] as string) : 'ungrouped';
        acc[key] = acc[key] || [];
        acc[key].push(item);
        return acc;
      },
      {} as Record<string, T[]>,
    );

    const flatItems: T[] = Object.values(grouped)
      .flat()
      // @ts-ignore: TODO: Fix Typescript error for disabled item
      .filter((item) => !item?.disabled);

    return Object.entries(grouped)
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
  }, [items, groupByKey, activeIndex, groups]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
      }
    },
    [items.length],
  );

  useEffect(() => {
    if (keyboardEvents) {
      setActiveIndex(0);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, keyboardEvents]);

  return { menu, activeIndex, setActiveIndex };
};
