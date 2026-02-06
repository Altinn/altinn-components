'use client';

import { InformationSquareIcon } from '@navikt/aksel-icons';
import * as React from 'react';
import { useRootContext } from '../RootProvider';
import type { MenuProps } from './Menu';
import type { MenuListSearchProps } from './MenuListSearch';

type SearchProps = Omit<MenuListSearchProps, 'name'> & { name?: string };

interface UseMenuSearchProps
  extends Pick<SearchProps, 'placeholder' | 'name' | 'onChange' | 'onClear' | 'clearButtonAltText'> {
  items?: MenuProps['items'];
  groups?: MenuProps['groups'];
}

type Texts = {
  placeholder: string;
  hits: (count: number) => string;
  selected: (count: number) => string;
  noResults: string;
};

const getTexts = (languageCode?: string): Texts => {
  switch (languageCode) {
    case 'nn':
      return {
        placeholder: 'Søk ...',
        hits: (n) => `${n} treff`,
        selected: (n) => `${n} valt`,
        noResults: 'Ingen treff',
      };
    case 'en':
      return {
        placeholder: 'Search ...',
        hits: (n) => `${n} hit${n === 1 ? '' : 's'}`,
        selected: (n) => `${n} selected`,
        noResults: 'No results',
      };
    default:
      return {
        placeholder: 'Søk ...',
        hits: (n) => `${n} treff`,
        selected: (n) => `${n} valgt`,
        noResults: 'Ingen treff',
      };
  }
};

const uniqById = (items: Array<{ id?: string }>) => {
  const seen = new Set<string>();
  const out: Array<{ id?: string }> = [];

  for (const item of items) {
    const id = item.id;
    if (!id) {
      out.push(item);
      continue;
    }
    if (!seen.has(id)) {
      seen.add(id);
      out.push(item);
    }
  }

  return out as typeof items;
};

export const useMenuSearch = ({
  placeholder,
  name,
  onChange,
  onClear,
  clearButtonAltText,
  items = [],
  groups = {},
}: UseMenuSearchProps) => {
  const { languageCode } = useRootContext();
  const texts = React.useMemo(() => getTexts(languageCode), [languageCode]);

  const [qRaw, setQRaw] = React.useState('');

  const onSearch = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQRaw(e.target.value);
      onChange?.(e);
    },
    [onChange],
  );

  const onSearchClear = React.useCallback(() => {
    setQRaw('');
    onClear?.();
  }, [onClear]);

  const q = React.useMemo(() => qRaw.trim().replace(/\s+/g, ' '), [qRaw]);
  const hasQuery = q.length > 0;
  const qLower = React.useMemo(() => q.toLowerCase(), [q]);
  const highlightWords = React.useMemo(() => (q ? q.split(' ') : []), [q]);

  const search = React.useMemo(
    () => ({
      placeholder: placeholder ?? texts.placeholder,
      name: name ?? 'search',
      value: qRaw,
      onChange: onSearch,
      onClear: onSearchClear,
      clearButtonAltText,
    }),
    [placeholder, texts.placeholder, name, qRaw, onSearch, onSearchClear, clearButtonAltText],
  );

  const searchItems = React.useMemo(
    () =>
      items.map((item) => {
        const derived = item?.searchWords?.length ? item.searchWords : [item?.title, item?.description].filter(Boolean);

        return {
          ...item,
          searchWords: (derived ?? []) as string[],
        };
      }),
    [items],
  );

  const defaultNoHitsItems = React.useMemo(
    () => [
      {
        id: 'emptySearch',
        title: texts.noResults,
        groupId: 'emptySearch',
        icon: InformationSquareIcon,
        size: 'sm',
        as: 'div',
      },
    ],
    [texts.noResults],
  );

  const noHits = React.useMemo(() => {
    const custom = items.filter((item) => item.groupId === 'emptySearch').map((item) => ({ ...item, hidden: false }));

    return custom.length ? custom : defaultNoHitsItems;
  }, [items, defaultNoHitsItems]);

  const { selectedItems, results } = React.useMemo(() => {
    if (!hasQuery) return { selectedItems: [], results: [] };

    const selected: typeof searchItems = [];
    const result: typeof searchItems = [];

    for (const item of searchItems) {
      if (item.checked === true) {
        selected.push({ ...item, groupId: 'selected' });
      }

      const words = item.searchWords ?? [];
      const hit = words.some((w) => String(w).toLowerCase().includes(qLower));

      if (hit) {
        result.push({
          ...item,
          groupId: 'search',
          highlightWords,
        });
      }
    }

    return { selectedItems: selected, results: result };
  }, [hasQuery, searchItems, qLower, highlightWords]);

  const resultsCount = results.length;
  const selectedCount = selectedItems.length;

  const defaultGroups = React.useMemo(
    () => ({
      search: {
        hidden: true,
        title: texts.hits(resultsCount),
      },
      selected: {
        hidden: true,
        title: texts.selected(selectedCount),
      },
      emptySearch: {
        hidden: true,
        title: texts.noResults,
      },
      ...groups,
    }),
    [texts, resultsCount, selectedCount, groups],
  );

  const searchGroups = React.useMemo(
    () => ({
      ...defaultGroups,
      search: {
        hidden: !hasQuery,
        title: texts.hits(resultsCount),
      },
      selected: {
        hidden: selectedCount === 0,
        title: texts.selected(selectedCount),
      },
      emptySearch: {
        hidden: hasQuery && (resultsCount > 0 || selectedCount > 0),
        title: texts.noResults,
      },
    }),
    [defaultGroups, hasQuery, texts, resultsCount, selectedCount],
  );

  // combine search results and selected items when searching
  const combinedResults = React.useMemo(() => {
    if (!hasQuery) return [];
    return uniqById([...results, ...selectedItems]);
  }, [hasQuery, results, selectedItems]);

  // combine selected items and no Hits
  const combinedNoHits = React.useMemo(() => [...(noHits || []), ...(selectedItems || [])], [noHits, selectedItems]);

  const displayItems = React.useMemo(() => {
    if (!hasQuery) return items;
    return resultsCount ? combinedResults : combinedNoHits;
  }, [hasQuery, items, resultsCount, combinedResults, combinedNoHits]);

  return {
    search,
    results,
    resultCount: resultsCount,
    hasQuery,
    items: displayItems,
    groups: searchGroups,
  };
};
