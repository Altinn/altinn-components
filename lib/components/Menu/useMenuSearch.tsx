'use client';
import { InformationSquareIcon } from '@navikt/aksel-icons';
import { useState } from 'react';
import type { MenuProps } from './Menu';

interface UseMenuSearchProps {
  placeholder?: string;
  items?: MenuProps['items'];
  groups?: MenuProps['groups'];
}

export const useMenuSearch = ({ placeholder = 'Søk ...', items = [], groups = {} }: UseMenuSearchProps) => {
  const [q, setQ] = useState('');

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
  };

  const search = {
    placeholder,
    name: 'search',
    value: q,
    onChange: onSearch,
  };

  // add searchWords to items

  const searchItems = items.map((item) => {
    const searchWords = (item?.searchWords || [item?.title, item?.description].filter(Boolean)) as string[];

    return {
      ...item,
      searchWords,
    };
  });

  // default no hits item

  const defaultNoHitsItems = [
    {
      id: 'emptySearch',
      title: 'Result is empty',
      groupId: 'emptySearch',
      icon: InformationSquareIcon,
      size: 'sm',
      as: 'div',
    },
  ];

  const noHitsItems = items
    ?.filter((item) => item.groupId === 'emptySearch')
    ?.map((item) => {
      return {
        ...item,
        hidden: false,
      };
    });

  const noHits = noHitsItems?.length ? noHitsItems : defaultNoHitsItems;

  // search results

  const results =
    q &&
    searchItems
      .filter((item) => {
        return item.searchWords?.some((word) => q && word?.toString().toLowerCase().includes(q.toLowerCase()));
      })
      .map((item) => {
        return {
          ...item,
          groupId: 'search',
          highlightWords: q?.split(' '),
        };
      });

  const defaultGroups = {
    search: {
      hidden: true,
      title: '{count} hits',
    },
    emptySearch: {
      hidden: true,
      title: 'No hits',
    },
    ...groups,
  };

  const searchGroups = {
    ...defaultGroups,
    search: {
      hidden: !(results?.length > 0),
      title: defaultGroups.search.title.replace('{count}', results.length.toString()),
    },
    emptySearch: {
      hidden: !!(q && results?.length > 0),
      title: 'No hits',
    },
  };

  return {
    search,
    results,
    items: q ? (results?.length ? results : noHits) : items,
    groups: searchGroups,
  };
};
