import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';

import { type BookmarksListItemProps, ListBase } from '..';
import { MetaItem } from '../Meta';
import { BookmarksListItem } from './BookmarksListItem';

const sizes = ['lg', 'md', 'sm', 'xs'];

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

export const Sizes = (args: BookmarksListItemProps) => {
  return (
    <ListBase>
      {sizes?.map((size) => {
        return (
          <Fragment key={size}>
            <BookmarksListItem {...args} />
            <MetaItem>{size}</MetaItem>
          </Fragment>
        );
      })}
    </ListBase>
  );
};
