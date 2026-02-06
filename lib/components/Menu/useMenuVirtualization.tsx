'use client';

import { useVirtualizer } from '@tanstack/react-virtual';
import { useLayoutEffect, useMemo, useState } from 'react';

export interface UseMenuVirtualizationProps<TItemProps = { [key: string]: unknown }> {
  menu: Array<{
    items: Array<{ props?: TItemProps & { hidden?: boolean }; active?: boolean }>;
    props?: { title?: string; [key: string]: unknown };
  }>;
  scrollRef: React.RefObject<HTMLUListElement>;
  open?: boolean;
}

export const useMenuVirtualization = <TItemProps = { [key: string]: unknown }>({
  menu,
  scrollRef,
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

  const flatMenu = useMemo(() => {
    return menu.flatMap((group, groupIndex) => {
      const items = group?.items?.filter((item) => !item.props?.hidden) || [];
      const groupProps = (group?.props || {}) as { title?: string; hidden?: boolean; divider?: boolean };
      const { title, hidden = false, divider = true } = groupProps;

      if (hidden) {
        return [];
      }

      if (items.length === 0 && !title) {
        return [];
      }

      return [
        ...(groupIndex > 0 && divider ? [{ type: 'divider' as const }] : []),
        ...(title ? [{ type: 'header' as const, title }] : []),
        ...items.map((item) => ({
          type: 'item' as const,
          itemProps: item.props || ({} as TItemProps),
          active: item.active,
        })),
      ];
    });
  }, [menu]);

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
        default:
          return 44;
      }
    },
    gap: 0,
    paddingEnd: -8,
  });

  return { flatMenu, virtualizer, scrollMaxHeight };
};
