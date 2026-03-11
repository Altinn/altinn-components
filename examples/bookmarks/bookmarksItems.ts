export const bookmarksItems = [
  {
    id: 'bookmark-1',
    title: 'Mitt eget søk',
    params: [
      { type: 'search', label: 'Skatt' },
      { type: 'filter', label: 'Krever handling' },
    ],
  },
  {
    id: 'bookmark-1b',
    title: 'Eget søk med scope',
    params: [
      { type: 'scope', label: '3 enheter' },
      { type: 'search', label: 'Skatt' },
      { type: 'filter', label: 'Krever handling' },
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
    id: 'bookmark-2b',
    params: [
      { type: 'scope', label: 'Alle virksomheter' },
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
