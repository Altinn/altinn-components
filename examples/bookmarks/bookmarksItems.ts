import { MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@navikt/aksel-icons';

export const bookmarksItems = [
  {
    id: 'bookmark-1',
    title: 'Mitt eget søk',
    contextMenu: {
      items: [
        {
          id: 'search-inbox',
          title: 'Søk i innboks',
          icon: MagnifyingGlassIcon,
        },
        {
          id: 'edit-saved-search',
          title: 'Rediger tittel',
          icon: PencilIcon,
        },
        {
          id: 'delete-saved-search',
          title: 'Slett søk',
          icon: TrashIcon,
        },
      ],
    },
    onClose: () => {
      alert('Lukk bokmerket 1');
    },

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
    onClose: () => {
      alert('Lukk bokmerket 1');
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
    onClose: () => {
      alert('Lukk bokmerket 1');
    },
    saveButton: {
      label: 'Lagre søk',
    },
    removeButton: {
      label: 'Slett',
    },
    expandIconAltText: 'expand icon',
  },
];
