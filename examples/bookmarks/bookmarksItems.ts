export const bookmarksItems = [
  {
    id: 'bookmark-1',
    title: 'Mitt eget søk',
    saveButton: {
      label: 'Lagre søk',
    },
    removeButton: {
      label: 'Slett',
      onClick: () => {
        alert('Slett bokmerket 1');
      },
    },
    params: [
      { type: 'search', label: 'Skatt' },
      { type: 'filter', label: 'Krever handling' },
    ],
    expandIconAltText: 'expand icon',
  },
  {
    id: 'bookmark-2',
    params: [
      { type: 'search', label: 'Skatt' },
      { type: 'filter', label: 'Under arbeid' },
    ],
    saveButton: {
      label: 'Lagre søk',
    },
    removeButton: {
      label: 'Slett',
      onClick: () => {
        alert('Slett bokmerket 2');
      },
    },
    expandIconAltText: 'expand icon',
  },
  {
    id: 'bookmark-3',
    params: [
      { type: 'filter', label: 'Brønnøysundregistrene' },
      { type: 'filter', label: 'Krever handling' },
    ],
    saveButton: {
      label: 'Lagre søk',
    },
    removeButton: {
      label: 'Slett',
    },
    expandIconAltText: 'expand icon',
  },
];
