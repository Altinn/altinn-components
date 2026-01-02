'use client';
import { useMemo } from 'react';
import type { MenuProps } from './Menu';
import type { MenuItemProps } from './MenuItem';

interface UseMenuItemsQuery {
  q?: string;
}

interface UseMenuItemsProps {
  query?: UseMenuItemsQuery;
  items?: MenuProps['items'];
  groups?: MenuProps['groups'];
  variant?: MenuProps['variant'];
  size?: MenuProps['size'];
}

export const useMenuItems = ({ query, items = [], groups = {}, variant, size }: UseMenuItemsProps) => {
  // add searchWords to items

  const noHitsItems = items?.filter(item => item.groupId === 'noHits')

  const searchItems = items.filter(item => item.groupId !== 'noHits').map((item) => {
    const searchWords = (item?.searchWords || [item?.title, item?.description].filter(Boolean)) as string[];

    return {
      ...item,
      searchWords,
    };
  });

  // search results


  const results = query?.q
    ? searchItems
      .filter((item) => {
        return item.searchWords?.some(
          (word) => query?.q && word?.toString().toLowerCase().includes(query.q.toLowerCase()),
        );
      })
      .map((item) => {
        return {
          ...item,
          groupId: 'search',
          highlightWords: query?.q?.split(' '),
        };
      })
    : undefined;

  // filtered items and groups

  const filteredItems = (query?.q ? results?.length ? results : noHitsItems : searchItems) || [];

  // create menu

  const menu = useMemo(() => {
    // 1. Replace _.groupBy with native .reduce()
    const groupedItems = filteredItems?.reduce(
      (acc, item) => {
        // Default to "undefined" group if no ID exists, similar to lodash
        const gId = item.groupId || 'undefined';

        if (!acc[gId]) {
          acc[gId] = [];
        }
        acc[gId].push(item as MenuItemProps);
        return acc;
      },
      {} as Record<string, MenuItemProps[]>,
    );

    // 2. Determine Group Order from item keys
    const allKeys = Object.keys(groupedItems);

    // 3. Map and Cascade Styles
    return allKeys
      .map((groupId) => {
        const groupItems = groupedItems[groupId];

        // get group config
        const groupConfig = groups[groupId] || {};

        // If the group exists in config but has no items, return null (or keep empty if groupid == "search")
        if (!groupItems && !groups[groupId] && groupId !== 'search') return null;

        // Calculate inherited group styles
        const groupSize = groupConfig.size || size;
        const groupVariant = groupConfig.variant || variant;

        // replace {count} with actual count for this group
        const title = groupConfig.title?.replace('{count}', groupItems?.length?.toString() || '0');

        return {
          ...groupConfig,
          title,
          groupId,
          size: groupSize,
          variant: groupVariant,
          items: (groupItems || []).map((item, index) => {
            return {
              ...item,
              // Ensure unique ID: combine group ID + index to prevent collisions
              id: item.id || `${groupId}-item-${index}`,
              // Logic: Item > Group > Root
              size: item.size || groupSize,
              variant: item.variant || groupVariant,
            };
          }),
        };
      })
      .filter(Boolean); // Remove null groups
  }, [filteredItems, groups, variant, size]);

  return {
    menu,
  };
};
