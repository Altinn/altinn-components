'use client';

import { defaultRangeExtractor, useVirtualizer } from '@tanstack/react-virtual';
import { useLayoutEffect, useMemo, useState } from 'react';
import { findListTitleIndex } from './aria.ts';

export interface UseMenuVirtualizationProps<TItemProps = { [key: string]: unknown }> {
  menu: Array<{
    items: Array<{ props?: TItemProps & { hidden?: boolean }; active?: boolean }>;
    props?: { title?: string; [key: string]: unknown };
  }>;
  scrollRef: React.RefObject<HTMLUListElement>;
  open?: boolean;
  /** Let a single title on the first group name the whole list. */
  allowListTitle?: boolean;
  /** Rows to keep rendered when scrolled out of view */
  keepRenderedRef?: React.RefObject<number[]>;
}

export const useMenuVirtualization = <TItemProps = { [key: string]: unknown }>({
  menu,
  scrollRef,
  allowListTitle = false,
  keepRenderedRef,
}: UseMenuVirtualizationProps<TItemProps>) => {
  const [scrollMaxHeight, setScrollMaxHeight] = useState(400);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const compute = () => {
      const top = el.getBoundingClientRect().top || 0;
      const next = Math.max(300, window.innerHeight - top - 8);
      setScrollMaxHeight((prev) => (prev === next ? prev : next));
    };

    compute();
    window.addEventListener('resize', compute);

    const ro = new ResizeObserver(() => compute());
    ro.observe(document.body);

    return () => {
      window.removeEventListener('resize', compute);
      ro.disconnect();
    };
  }, [scrollRef]);

  const listTitleIndex = useMemo(
    () => (allowListTitle ? findListTitleIndex(menu.map((group) => group?.props)) : -1),
    [menu, allowListTitle],
  );
  const listTitle = listTitleIndex >= 0 ? menu[listTitleIndex]?.props?.title : undefined;

  const flatMenu = useMemo(() => {
    return menu.flatMap((group, groupIndex) => {
      const items = group?.items?.filter((item) => !item.props?.hidden) || [];
      const groupProps = (group?.props || {}) as {
        title?: string;
        titleAs?: 'heading' | 'text';
        hidden?: boolean;
        divider?: boolean;
      };
      const { title, titleAs = 'heading', hidden = false, divider = true } = groupProps;

      if (hidden) {
        return [];
      }

      if (items.length === 0 && !title) {
        return [];
      }

      const groupTitle = groupIndex === listTitleIndex ? undefined : title || undefined;

      return [
        ...(groupIndex > 0 && divider ? [{ type: 'divider' as const, groupIndex }] : []),
        ...(title ? [{ type: 'header' as const, title, titleAs, groupIndex, groupTitle }] : []),
        ...items.map((item) => ({
          type: 'item' as const,
          itemProps: item.props || ({} as TItemProps),
          active: item.active,
          groupIndex,
          groupTitle,
          titleAs,
        })),
      ];
    });
  }, [menu, listTitleIndex]);

  const virtualizer = useVirtualizer({
    count: flatMenu.length,
    getScrollElement: () => scrollRef.current,
    useAnimationFrameWithResizeObserver: true,
    estimateSize: (index) => {
      const entry = flatMenu[index];
      switch (entry?.type) {
        case 'divider':
          return 9;
        case 'header':
          return 36;
        default: {
          const description = (entry?.itemProps as { description?: unknown })?.description;
          const hasDescription = typeof description === 'string' ? description.length > 0 : description != null;
          return hasDescription ? 60 : 44;
        }
      }
    },
    gap: 0,
    paddingEnd: -8,
    rangeExtractor: (range) => {
      const indexes = defaultRangeExtractor(range);
      const keep = (keepRenderedRef?.current ?? []).filter(
        (index) => index >= 0 && index < range.count && !indexes.includes(index),
      );
      return keep.length ? [...indexes, ...new Set(keep)].sort((a, b) => a - b) : indexes;
    },
  });

  return { flatMenu, virtualizer, scrollMaxHeight, listTitle };
};
