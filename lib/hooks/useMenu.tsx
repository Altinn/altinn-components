'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';

export interface UseMenuItemProps<T> {
  menuIndex: number;
  active?: boolean;
  props: T;
}

export interface UseMenuGroup<T, V> {
  items: UseMenuItemProps<T>[];
  props: Record<string, V>;
}

export interface UseMenuOutput<T, V> {
  menu: UseMenuGroup<T, V>[];
  activeIndex: number;
  setActiveIndex: (activeIndex: number) => void;
  flatItems: T[];
  activeItem?: T;
}

export interface UseMenuInput<T, V> {
  items: T[];
  groups: Record<string, V>;
  groupByKey?: keyof T;
  keyboardEvents?: boolean;
}

export const useMenu = <T, V>({
  items,
  groups,
  groupByKey,
  keyboardEvents = false,
}: UseMenuInput<T, V>): UseMenuOutput<T, V> => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  // Compute the menu structure and flat items
  const { menu, flatItems } = useMemo(() => {
    const grouped = items.reduce(
      (acc, item) => {
        const key = groupByKey && item[groupByKey] ? (item[groupByKey] as string) : 'ungrouped';
        acc[key] = acc[key] || [];
        acc[key].push(item);
        return acc;
      },
      {} as Record<string, T[]>,
    );

    const flatItems = Object.values(grouped).flat();

    const menu = Object.entries(grouped).map(([key, groupItems]) => ({
      items: groupItems.map((item) => ({
        menuIndex: flatItems.indexOf(item),
        active: activeIndex === flatItems.indexOf(item),
        props: item,
      })),
      props: groups[key] || {},
    }));

    return { menu, flatItems };
  }, [items, groupByKey, activeIndex, groups]);

  // Compute the active item
  const activeItem = useMemo(() => flatItems[activeIndex] || undefined, [flatItems, activeIndex]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        setActiveIndex((prevIndex) => (prevIndex + 1) % flatItems.length);
      } else if (event.key === 'ArrowUp') {
        setActiveIndex((prevIndex) => (prevIndex - 1 + flatItems.length) % flatItems.length);
      }
    },
    [flatItems.length],
  );

  // Bind/unbind keyboard event listeners
  useEffect(() => {
    if (keyboardEvents) {
      setActiveIndex(0);
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [handleKeyDown, keyboardEvents]);

  return { menu, activeIndex, setActiveIndex, flatItems, activeItem };
};
