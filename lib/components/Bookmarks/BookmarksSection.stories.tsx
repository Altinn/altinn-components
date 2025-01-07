import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { BookmarksSection, type BookmarksSectionProps } from './BookmarksSection';

const meta = {
  title: 'Bookmarks/BookmarksSection',
  component: BookmarksSection,
  tags: ['autodocs'],
  parameters: {},
  args: {
    title: '3 lagrede søk',
    untitled: 'Uten tittel',
    titleField: {
      label: 'Tittel',
      placeholder: 'Uten tittel',
      helperText: 'Gi bokmerket et navn.',
    },
    description: 'Sist oppdatert 3 minutter siden',
    items: [
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
          { type: 'filter', label: 'Under arbeid' },
        ],
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
      },
    ],
  },
} satisfies Meta<typeof BookmarksSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const ExpandedItem: Story = {
  args: {
    ...meta.args,
    expandedId: 'bookmark-2',
  },
};

export const ControlledState = (args: BookmarksSectionProps) => {
  const [expandedId, setExpandedId] = useState<string>('');

  const onToggle = (id: string) => {
    setExpandedId((prevState) => {
      if (prevState === id) {
        return '';
      }
      return id;
    });
  };

  return <BookmarksSection {...args} expandedId={expandedId} onToggle={onToggle} />;
};

export const LoadingState: Story = {
  args: {
    loading: true,
    title: 'Henter lagrede søk ...',
    description: '',
    items: [{ id: '1', title: 'Loading the bookmark' }],
  },
};

export const EmptyState: Story = {
  args: {
    title: 'Ingen lagrede søk',
    description: "Du kan lagre søk ved å klikke på 'Lagre søk'",
    items: [],
  },
};

export const AsLink: Story = {
  args: {
    title: '2 lagrede søk',
    untitled: 'Uten tittel',
    titleField: {
      label: 'Tittel',
      placeholder: 'Uten tittel',
      helperText: 'Gi bokmerket et navn.',
    },
    description: 'Sist oppdatert 3 minutter siden',
    items: [
      {
        id: 'bookmark-1',
        title: 'Mitt eget søk',
        saveButton: {
          label: 'Lagre søk',
        },
        removeButton: {
          label: 'Slett',
        },
        as: (props) => <a {...props} href="#bookmark-1" />,
        params: [
          { type: 'search', label: 'Skatt' },
          { type: 'filter', label: 'Under arbeid' },
        ],
      },
      {
        id: 'bookmark-2',
        as: (props) => <a {...props} href="#bookmark-2" />,
        params: [
          { type: 'search', label: 'Skatt' },
          { type: 'filter', label: 'Under arbeid' },
        ],
        saveButton: {
          label: 'Lagre søk',
        },
        removeButton: {
          label: 'Slett',
        },
      },
    ],
  },
};
