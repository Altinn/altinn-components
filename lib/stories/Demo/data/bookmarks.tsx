import type { BookmarksListItemProps } from '../../../../components';

export const bookmarks: BookmarksListItemProps[] = [
  {
    id: 'bookmark-1',
    title: 'Mitt eget søk',
    params: [
      { type: 'search', label: 'Skatt' },
      { type: 'filter', label: 'Under arbeid' },
    ],
  },
  {
    id: 'bookmark-2',
    params: [
      { type: 'search', label: 'Skatt' },
      { type: 'filter', label: 'Under arbeid' },
    ],
  },
  {
    id: 'bookmark-3',
    params: [
      { type: 'filter', label: 'Brønnøysundregistrene' },
      { type: 'filter', label: 'Krever handling' },
    ],
  },
];
