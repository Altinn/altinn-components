export const bookmarksItems = [
  {
    id: 'bookmark-1',
    groupId: 'user',
    title: 'Viktig!!!',
    params: [
      { type: 'search', label: 'tvangsmulk' },
      { type: 'filter', label: 'Krever handling' },
    ],
  },
  {
    id: 'bookmark-2b',
    title: 'Skattemeldinger under arbeid',
    groupId: 'all',
    params: [
      { type: 'scope', label: '4 enheter' },
      { type: 'filter', label: 'Skatteetaten' },
      { type: 'filter', label: 'Under arbeid' },
    ],
  },
  {
    id: 'bookmark-1b',
    title: 'Ting som krever handling',
    groupId: 'all',
    params: [
      { type: 'scope', label: '3 enheter' },
      { type: 'filter', label: 'Krever handling' },
    ],
  },
  {
    id: 'bookmark-3',
    groupId: 'company',
    title: 'Viktig fra Brønnøysundregistrene',
    params: [
      { type: 'filter', label: 'Brønnøysundregistrene' },
      { type: 'filter', label: 'Krever handling' },
    ],
  },
  {
    id: 'bookmark-2',
    groupId: 'company',
    params: [
      { type: 'search', label: 'Skatt' },
      { type: 'filter', label: 'Under arbeid' },
    ],
  },
];
