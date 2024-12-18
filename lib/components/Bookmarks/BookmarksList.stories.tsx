import type { Meta, StoryObj } from '@storybook/react';
import { BookmarksList } from './BookmarksList';

const meta = {
  title: 'Bookmarks/BookmarksList',
  component: BookmarksList,
  tags: ['autodocs'],
  parameters: {},
  args: {
    items: [
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
    ],
  },
} satisfies Meta<typeof BookmarksList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithContextMenu: Story = {
  args: {
    items: meta.args.items.map((item) => {
      return {
        ...item,
        menu: {
          id: [item.id, 'menu'].join('-'),
          items: [
            {
              id: [item.id, 'edit'].join('-'),
              icon: 'pencil',
              title: 'Rediger søk',
            },
            {
              id: [item.id, 'trash'].join('-'),
              icon: 'trash',
              title: 'Slett søk',
            },
          ],
        },
      };
    }),
  },
};
