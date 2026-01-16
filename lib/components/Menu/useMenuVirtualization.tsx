'use client';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect, useMemo, useState } from 'react';

export interface UseMenuVirtualizationProps {
  menu: any[];
  keyboardEvents?: boolean;
  scrollRef: React.RefObject<HTMLUListElement>;
}

export const useMenuVirtualization = ({ menu, keyboardEvents, scrollRef }: UseMenuVirtualizationProps) => {
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollMaxHeight = useMemo(() => {
    const rect = scrollRef?.current?.getBoundingClientRect();

    console.log('RECT', scrollRef);

    const scrollTop = rect?.top || 0;
    const calculated = (scrollTop && windowHeight - scrollTop - 8) || 400;
    return calculated <= 300 ? 300 : calculated;
  }, [windowHeight, scrollRef.current]);

  const flatMenu = useMemo(() => {
    return menu.flatMap((group, groupIndex) => {
      const items = group?.items?.filter((item: any) => !item.props?.hidden) || [];
      const title = group?.props?.title;
      return [
        ...(groupIndex > 0 ? [{ type: 'divider' as const }] : []),
        ...(title ? [{ type: 'header' as const, title }] : []),
        ...items.map((item: any) => ({
          type: 'item' as const,
          itemProps: item.props || {},
          active: item.active,
        })),
      ];
    });
  }, [menu]);

  const virtualizer = useVirtualizer({
    count: flatMenu.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => 50,
    overscan: 10,
  });

  useEffect(() => {
    if (!keyboardEvents) return;
    const activeIndex = flatMenu.findIndex((item) => item.type === 'item' && item.active);
    if (activeIndex !== -1) {
      virtualizer.scrollToIndex(activeIndex, { align: 'auto' });
    }
  }, [flatMenu, keyboardEvents, virtualizer]);

  return { flatMenu, virtualizer, scrollMaxHeight };
};
