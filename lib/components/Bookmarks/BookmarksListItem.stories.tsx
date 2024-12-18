import type { Meta, StoryObj } from '@storybook/react';
import { BookmarksListItem } from './BookmarksListItem';

const meta = {
  title: 'Bookmarks/BookmarksListItem',
  component: BookmarksListItem,
  tags: ['autodocs', 'outdated'],
  parameters: {},
  args: {
    id: 'id',
    params: [
      {
        type: 'search',
        label: 'mva',
      },
      {
        type: 'filter',
        label: 'Skatteetaten',
      },
    ],
    href: '#',
  },
} satisfies Meta<typeof BookmarksListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomTitle: Story = {
  args: {
    title: 'Mitt lagrede søk',
  },
};

export const Expanded: Story = {
  args: {
    title: 'Mitt lagrede søk',
    expanded: true,
    untitled: 'Uten tittel',
    titleField: {
      label: 'Tittel',
      placeholder: 'Uten tittel',
      helperText: 'Gi bokmerket et navn.',
    },
    saveButton: {
      label: 'Lagre endringer',
    },
    removeButton: {
      label: 'Slett bokmerke',
    },
  },
};

export const LotsOfParams: Story = {
  args: {
    params: [
      {
        label: 'skatt',
      },
      {
        label: 'inkasso',
      },
      {
        type: 'filter',
        label: 'Namsmannen',
      },
      {
        type: 'filter',
        label: 'Denne uken',
      },
    ],
  },
};
