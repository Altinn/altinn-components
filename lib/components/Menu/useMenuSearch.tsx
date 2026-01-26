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

  // selected items (checked=true) when searching
  const selectedItems =
    q &&
    searchItems
      .filter((item) => item.checked === true)
      .map((item) => {
        return {
          ...item,
          groupId: 'selected',
        };
      });

  const defaultGroups = {
    search: {
      hidden: true,
      title: '{count} hits',
    },
    selected: {
      hidden: true,
      title: '{count} selected',
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
      hidden: !q,
      title: defaultGroups.search.title.replace('{count}', results?.length.toString()),
    },
    selected: {
      hidden: !(selectedItems?.length > 0),
      title: defaultGroups.selected.title.replace('{count}', selectedItems?.length.toString()),
    },
    emptySearch: {
      hidden: !!(q && (results?.length > 0 || selectedItems?.length > 0)),
      title: 'No hits',
    },
  };

  // combine search results and selected items when searching
  const combinedResults = q
    ? [...(results || []), ...(selectedItems || [])].filter(
        (item, index, array) => array.findIndex((i) => i.id === item.id) === index,
      )
    : [];

  return {
    search,
    results,
    items: q ? (combinedResults?.length ? combinedResults : noHits) : items,
    groups: searchGroups,
  };
};
