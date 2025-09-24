import { type ChangeEvent, useState } from 'react';
import type { AutocompleteItemProps, AutocompleteProps, DialogListItemProps, SearchbarProps } from '../../lib';

interface UseInboxSearchProps extends SearchbarProps {
  accountId?: string;
  items?: DialogListItemProps[];
}

export const useInboxSearch = ({
  accountId,
  name = 'inbox-search',
  placeholder = 'Søk i innboks',
  value,
  items,
}: UseInboxSearchProps): SearchbarProps => {
  const [q, setQ] = useState<string>(value || '');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };

  const scopes = [
    {
      type: 'scope',
      groupId: '1',
      id: 'inbox',
      href: '#',
      label: q ? (
        <span>
          <mark>{q}</mark> i innboksen
        </span>
      ) : (
        'Alt i innboksen'
      ),
    },
  ];

  const bookmarks = [
    {
      type: 'bookmark',
      params: [
        { type: 'search', label: 'Skatt' },
        { type: 'filter', label: 'Krever handling' },
      ],
    },
    {
      type: 'bookmark',
      params: [
        { type: 'filter', label: 'Brønnøysundregistrene' },
        { type: 'filter', label: 'Krever handling' },
      ],
    },
  ].map((bookmark, index) => ({
    ...bookmark,
    id: 'bookmark-' + (index + 1),
    groupId: '2',
    linkIcon: true,
    href: '#',
  }));

  const bookmarkSuggestions = q
    ? bookmarks.filter((item) => item.params.some((param) => param.label.toLowerCase().includes(q.toLowerCase())))
    : bookmarks;

  const suggestions = q
    ? items
        ?.filter((item: DialogListItemProps) => item.title.toLowerCase().includes(q.toLowerCase()))
        ?.slice(0, 5)
        ?.map((item: DialogListItemProps) => ({
          groupId: '3',
          href: '#',
          title: item?.title,
          description: item?.summary,
          linkIcon: true,
          highlightWords: [q],
        })) || []
    : [];

  const autocomplete: AutocompleteProps = {
    groups: {
      2: {
        title: '',
      },
      3: {
        title: 'Anbefalte treff',
      },
    },
    items: [...scopes, ...bookmarkSuggestions, ...suggestions] as AutocompleteItemProps[],
  };

  const onEnter = () => {
    console.log('Search entered:', q);
    window.location.href =
      '/iframe.html?id=demo-inbox--search-page&viewMode=story' +
      `&q=${encodeURIComponent(q)}` +
      '&accountId=' +
      accountId;
  };

  return {
    name,
    placeholder,
    value: q,
    onChange,
    onClear: () => setQ(''),
    onEnter,
    autocomplete,
  };
};
