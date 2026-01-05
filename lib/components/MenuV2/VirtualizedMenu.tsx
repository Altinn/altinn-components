'use client';

import { useMemo, useRef, useState } from 'react';
import type { MenuProps } from './Menu';
import { MenuItem, type MenuItemProps } from './MenuItem';
import { MenuSearch } from './MenuSearch';
import styles from './menu.module.css';
import { useMenuItems } from './useMenuItems';

export interface VirtualizedMenuProps extends MenuProps {
  // height of container
  containerHeight?: number;
  // fallback height of an item, before calculated
  estimatedItemHeight?: number;
}

// Internal type for our flattened list
type FlatItemType = 'divider' | 'header' | 'item';

interface FlatItem {
  id: string;
  type: FlatItemType;
  data?: MenuItemProps; // Holds MenuItemProps
  title?: string; // For headers
  level: number; // For identifiying level in the menu
  index: number; // Original index reference
}

export const VirtualizedMenu = ({
  searchable,
  searchProps = {
    placeholder: 'Search ...',
  },
  items = [],
  groups = {},
  variant = 'default',
  size,
  level = 1,
  maxLevels = 3,
  containerHeight = 400,
  estimatedItemHeight = 40,
}: VirtualizedMenuProps) => {
  // default search

  const [q, setQ] = useState('');

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
  };

  const search = searchable && {
    ...searchProps,
    name: 'search',
    value: q,
    onChange: onSearch,
  };

  // 1. Get the structured data from the hook
  const { menu } = useMenuItems({
    query: { q },
    items,
    groups,
    variant,
    size,
  });

  // 2. Flatten the recursive structure into a linear list
  // This allows the virtualizer to see everything as one long list
  const flatItems = useMemo(() => {
    const result: FlatItem[] = [];
    let globalIndex = 0;

    // Recursive helper to flatten items
    const processItems = (itemList: MenuItemProps[], currentLevel: number) => {
      itemList.forEach((item, idx) => {
        // Add the item itself
        result.push({
          id: item.id || `item-${currentLevel}-${idx}`,
          type: 'item',
          data: item,
          level: currentLevel,
          index: globalIndex++,
        });

        // Recursively add children if they exist
        if (item.items && item.items.length > 0 && currentLevel < maxLevels) {
          processItems(item.items, currentLevel + 1);
        }
      });
    };

    // Process top-level groups
    menu?.forEach((group, groupIndex) => {
      if (groupIndex > 0 || (level > 1 && groupIndex < 1)) {
        result.push({ id: `div-${groupIndex}`, type: 'divider', level, index: globalIndex++ });
      }

      // Group Header
      if (group?.title) {
        result.push({
          id: `grp-${groupIndex}`,
          type: 'header',
          title: group.title,
          level,
          index: globalIndex++,
        });
      }

      // Process Items in this group
      if (group?.items) {
        processItems(group.items, level);
      }
    });

    return result;
  }, [menu, level, maxLevels]);

  // --- Virtualization Logic ---

  const [scrollTop, setScrollTop] = useState(0);
  const [heightMap, setHeightMap] = useState<Record<number, number>>({});
  const containerRef = useRef<HTMLUListElement>(null);

  // Calculate positions
  const { positions, totalHeight } = useMemo(() => {
    let currentTop = 0;
    const computedPositions = flatItems.map((item, index) => {
      const height = heightMap[index] ?? estimatedItemHeight;
      const pos = { index, top: currentTop, height, item };
      currentTop += height;
      return pos;
    });
    return { positions: computedPositions, totalHeight: currentTop };
  }, [flatItems, heightMap]);

  // Find visible range
  const startIndex = useMemo(() => {
    const node = positions.find((p) => p.top + p.height > scrollTop);
    return node ? node.index : 0;
  }, [scrollTop, positions]);

  let endIndex = startIndex;
  let offset = positions[startIndex]?.top ?? 0;
  while (endIndex < positions.length - 1 && offset < scrollTop + containerHeight) {
    offset += positions[endIndex].height;
    endIndex++;
  }

  // Buffer
  const BUFFER = 3;
  const visibleStart = Math.max(0, startIndex - BUFFER);
  const visibleEnd = Math.min(positions.length - 1, endIndex + BUFFER);
  const visibleItems = positions.slice(visibleStart, visibleEnd + 1);

  // Measurement Callback
  const measureRef = (index: number) => (el: HTMLLIElement | null) => {
    if (el) {
      // Use RequestAnimationFrame to avoid ResizeObserver loops in strict mode
      requestAnimationFrame(() => {
        const realHeight = el.getBoundingClientRect().height;
        if (Math.abs(realHeight - (heightMap[index] || 0)) > 0.5) {
          setHeightMap((prev) => ({ ...prev, [index]: realHeight }));
        }
      });
    }
  };

  const onScroll = (e: React.UIEvent<HTMLUListElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  // render MenuItem

  const VirtualizedMenuItem = ({
    flatItem,
    style,
    index,
  }: { flatItem: FlatItem; style: React.CSSProperties; index: number }) => {
    switch (flatItem.type) {
      case 'divider':
        return (
          <li role="separator" ref={measureRef(index)} style={style}>
            <hr className={styles.divider} />
          </li>
        );
      case 'header':
        return (
          <li className={styles.header} role="heading" ref={measureRef(index)} style={style}>
            <h4 className={styles.heading}>{flatItem.title}</h4>
          </li>
        );
      case 'item':
        const itemProps = flatItem.data as MenuItemProps;
        return (
          <li className={styles.item} role="menuitem" ref={measureRef(index)} style={style}>
            <MenuItem {...itemProps} />
          </li>
        );
      default:
        return null;
    }
  };

  return (
    <ul
      ref={containerRef}
      className={styles.list}
      data-variant={variant}
      onScroll={onScroll}
      style={{
        height: `${containerHeight}px`,
        overflowY: 'auto',
        position: 'relative',
        // Ensure the container handles the scrolling, not the window
        display: 'block',
        padding: '0.5rem',
        margin: '-0.5rem',
      }}
    >
      {search && (
        <li className={styles.search}>
          <MenuSearch {...search} />
        </li>
      )}
      <li className={styles.group}>
        <ul className={styles.list} style={{ height: `${totalHeight}px`, position: 'relative', width: '100%' }}>
          {visibleItems.map(({ index, top, item }) => (
            <VirtualizedMenuItem
              key={item.id}
              flatItem={item}
              index={index}
              style={{
                position: 'absolute',
                top: `${top}px`,
                left: 0,
                width: '100%',
              }}
            />
          ))}
        </ul>
      </li>
    </ul>
  );
};
