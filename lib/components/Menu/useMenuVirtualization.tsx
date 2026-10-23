"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { useLayoutEffect, useMemo, useState } from "react";

export interface UseMenuVirtualizationProps<
  TItemProps = { [key: string]: unknown },
> {
  menu: Array<{
    items: Array<{
      props?: TItemProps & { hidden?: boolean };
      active?: boolean;
    }>;
    props?: { title?: string; [key: string]: unknown };
  }>;
  scrollRef: React.RefObject<HTMLUListElement>;
  open?: boolean;
  /**
   * When true, the virtualizer scrolls the nearest scrollable ancestor (e.g. a
   * fullscreen dialog or a viewport-height content region) instead of the list
   * element itself. This keeps the list bounded to that ancestor so windowing
   * stays intact while the surrounding page/drawer provides the scroll.
   */
  pageScroll?: boolean;
  /** The virtualized content container, used to measure its offset (scrollMargin) within the scroll ancestor. */
  contentRef?: React.RefObject<HTMLElement | null>;
}

// Walks up from the list to the nearest ancestor that scrolls vertically.
const findScrollParent = (el: HTMLElement | null): HTMLElement | null => {
  let node = el?.parentElement ?? null;
  while (node) {
    const { overflowY } = getComputedStyle(node);
    if (overflowY === "auto" || overflowY === "scroll") return node;
    node = node.parentElement;
  }
  return null;
};

export const useMenuVirtualization = <
  TItemProps = { [key: string]: unknown },
>({
  menu,
  scrollRef,
  pageScroll = false,
  contentRef,
}: UseMenuVirtualizationProps<TItemProps>) => {
  const [scrollMaxHeight, setScrollMaxHeight] = useState(400);
  const [scrollParent, setScrollParent] = useState<HTMLElement | null>(null);
  const [scrollMargin, setScrollMargin] = useState(0);

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const compute = () => {
      const top = el.getBoundingClientRect().top || 0;
      const next = Math.max(300, window.innerHeight - top - 8);
      setScrollMaxHeight((prev) => (prev === next ? prev : next));
    };

    compute();
    window.addEventListener("resize", compute);

    const ro = new ResizeObserver(() => compute());
    ro.observe(document.body);

    return () => {
      window.removeEventListener("resize", compute);
      ro.disconnect();
    };
  }, [scrollRef]);

  // In page-scroll mode, resolve the scrolling ancestor and the content's offset
  // within it so the virtualizer can window against that ancestor's scroll.
  useLayoutEffect(() => {
    if (!pageScroll) {
      setScrollParent(null);
      setScrollMargin(0);
      return;
    }
    const measure = () => {
      const parent = findScrollParent(scrollRef.current);
      setScrollParent(parent);
      const content = contentRef?.current;
      if (parent && content) {
        const next = Math.round(
          content.getBoundingClientRect().top -
            parent.getBoundingClientRect().top +
            parent.scrollTop,
        );
        setScrollMargin((prev) => (prev === next ? prev : next));
      }
    };

    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(() => measure());
    ro.observe(document.body);

    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [pageScroll, scrollRef, contentRef]);

  const flatMenu = useMemo(() => {
    return menu.flatMap((group, groupIndex) => {
      const items = group?.items?.filter((item) => !item.props?.hidden) || [];
      const groupProps = (group?.props || {}) as {
        title?: string;
        hidden?: boolean;
        divider?: boolean;
      };
      const { title, hidden = false, divider = true } = groupProps;

      if (hidden) {
        return [];
      }

      if (items.length === 0 && !title) {
        return [];
      }

      return [
        ...(groupIndex > 0 && divider ? [{ type: "divider" as const }] : []),
        ...(title ? [{ type: "header" as const, title }] : []),
        ...items.map((item) => ({
          type: "item" as const,
          itemProps: item.props || ({} as TItemProps),
          active: item.active,
        })),
      ];
    });
  }, [menu]);

  const virtualizer = useVirtualizer({
    count: flatMenu.length,
    getScrollElement: () =>
      pageScroll ? (scrollParent ?? scrollRef.current) : scrollRef.current,
    scrollMargin: pageScroll ? scrollMargin : 0,
    useAnimationFrameWithResizeObserver: true,
    estimateSize: (index) => {
      const entry = flatMenu[index];
      switch (entry?.type) {
        case "divider":
          return 9;
        case "header":
          return 36;
        default: {
          const description = (entry?.itemProps as { description?: unknown })
            ?.description;
          const hasDescription =
            typeof description === "string"
              ? description.length > 0
              : description != null;
          return hasDescription ? 60 : 44;
        }
      }
    },
    gap: 0,
    paddingEnd: -8,
  });

  return {
    flatMenu,
    virtualizer,
    scrollMaxHeight,
    scrollMargin: pageScroll ? scrollMargin : 0,
  };
};
