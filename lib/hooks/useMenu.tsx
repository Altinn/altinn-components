'use client';
import { type MouseEventHandler, useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  /** `focus`: keys only act when focus is in the list, and add Home, End, Space and type-ahead. Default `document`. */
  keyboardScope?: 'document' | 'focus';
  /** Text for type-ahead */
  getItemLabel?: (item: T) => string | undefined;
  /** Scroll the active item into view when a key moves it */
  revealActiveItem?: boolean;
}

const OTHER_CONTROLS = 'button, a[href], input, select, textarea, [contenteditable="true"]';

const isTextEntry = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  if (target.isContentEditable || target.tagName === 'TEXTAREA') return true;
  if (target.tagName !== 'INPUT') return false;
  return !['checkbox', 'radio', 'button', 'submit', 'reset'].includes((target as HTMLInputElement).type);
};

export const useMenu = <T, V>({
  items,
  groups,
  groupByKey,
  keyboardEvents = false,
  autoActivateFirstItem = true,
  sortGroupBy,
  onSelect,
  ref,
  keyboardScope = 'document',
  getItemLabel,
  revealActiveItem = false,
}: UseMenuInput<T, V>): UseMenuOutput<T, V> => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  /** Only key moves scroll the list, not hover. */
  const movedByKeyRef = useRef(false);
  const scoped = keyboardScope === 'focus';

  const getList = useCallback(() => (ref && 'current' in ref ? ref.current : null), [ref]);

  /** In `focus` scope the keys belong to the list, its panel, or the input that controls it. */
  const isInScope = useCallback(
    (target: EventTarget | null) => {
      if (!scoped) return true;
      const list = getList();
      if (!list || !(target instanceof HTMLElement)) return false;
      if (list.contains(target)) return true;
      if (list.id && target.getAttribute('aria-controls') === list.id) return true;
      const scopeRoot = list.closest('[data-menu-scope]');
      return Boolean(scopeRoot?.contains(target)) && !target.matches(OTHER_CONTROLS);
    },
    [scoped, getList],
  );

  const activate = useCallback(
    (e: KeyboardEvent) => {
      const activeItem = getList()?.querySelector('[data-active="true"]') as HTMLElement | null;

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
    },
    [getList, onSelect],
  );
  const activateRef = useRef(activate);
  activateRef.current = activate;

  useEnterKey((e) => {
    if (keyboardEvents) {
      if (!isInScope(e.target)) {
        return;
      }

      if (document.activeElement?.getAttribute('data-action') === 'clear-input') {
        return;
      }

      activate(e);
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

  /** Hidden items and items in hidden groups are skipped. */
  const flatItems: T[] = useMemo(
    () =>
      Object.entries(groupedItems)
        .filter(([key]) => !(groups[key] as { hidden?: boolean } | undefined)?.hidden)
        .flatMap(([, groupItems]) => groupItems)
        .filter((item) => {
          const { disabled, hidden } = (item ?? {}) as { disabled?: boolean; hidden?: boolean };
          return !disabled && !hidden;
        }),
    [groupedItems, groups],
  );

  const indexByItem = useMemo(() => {
    const map = new Map<T, number>();
    for (let i = 0; i < flatItems.length; i++) {
      map.set(flatItems[i], i);
    }
    return map;
  }, [flatItems]);

  const menu = useMemo(() => {
    return Object.entries(groupedItems)
      .sort(sortGroupBy || (() => 0))
      .map(([key, groupItems]) => ({
        items: groupItems.map((item) => {
          const menuIndex = indexByItem.get(item) ?? -1;
          return {
            menuIndex,
            active: activeIndex === menuIndex,
            onMouseEnter: keyboardEvents
              ? () => {
                  setActiveIndex(menuIndex);
                }
              : undefined,
            onMouseLeave: keyboardEvents
              ? () => {
                  setActiveIndex(-1);
                }
              : undefined,
            props: item,
          };
        }),
        props: {
          ...(groups[key] || {}),
        },
      }));
  }, [groupedItems, indexByItem, activeIndex, keyboardEvents, sortGroupBy, groups]);

  const getItemLabelRef = useRef(getItemLabel);
  getItemLabelRef.current = getItemLabel;
  const flatItemsRef = useRef(flatItems);
  flatItemsRef.current = flatItems;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (flatItems.length === 0) {
        return;
      }
      if (!isInScope(event.target)) {
        return;
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        movedByKeyRef.current = true;
        setActiveIndex((prevIndex) => (prevIndex + 1) % flatItems.length);
        return;
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        movedByKeyRef.current = true;
        setActiveIndex((prevIndex) => (prevIndex <= 0 ? 0 : prevIndex - 1));
        return;
      }

      // Not taken from fields the user types in.
      if (!scoped || isTextEntry(event.target) || event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      if (event.key === 'Home') {
        event.preventDefault();
        movedByKeyRef.current = true;
        setActiveIndex(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        movedByKeyRef.current = true;
        setActiveIndex(flatItems.length - 1);
      } else if (event.key === ' ') {
        // A focused button clicks on Space by itself.
        if (event.target instanceof HTMLButtonElement && event.target.dataset.active === 'true') return;
        event.preventDefault();
        activateRef.current(event);
      } else if (event.key.length === 1) {
        const char = event.key.toLocaleLowerCase();
        const labels = flatItemsRef.current.map((item) => getItemLabelRef.current?.(item)?.toLocaleLowerCase());
        movedByKeyRef.current = true;
        setActiveIndex((prevIndex) => {
          for (let step = 1; step <= labels.length; step++) {
            const index = (Math.max(prevIndex, -1) + step) % labels.length;
            if (labels[index]?.startsWith(char)) return index;
          }
          return prevIndex;
        });
      }
    },
    [flatItems.length, isInScope, scoped],
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: runs when the active item changes
  useEffect(() => {
    if (!movedByKeyRef.current) return;
    movedByKeyRef.current = false;
    if (!revealActiveItem) return;
    getList()?.querySelector<HTMLElement>('[data-active="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  return { menu, activeIndex, setActiveIndex, activeItem: flatItems[activeIndex] };
};
