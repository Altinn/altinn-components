import type { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';

import { MetaItem } from '../Meta';
import { List, ListBase, ListItem } from './';

const sizes = ['lg', 'md', 'sm', 'xs'];

const meta = {
  title: 'List/List',
  component: List,
  tags: ['autodocs'],
  parameters: {},
  args: {
    items: [
      {
        id: '1',
        title: 'Title',
        description: 'Description',
        href: '#',
      },
      {
        id: '2',
        title: 'Title',
        description: 'Description',
        href: '#',
      },
      {
        id: '3',
        title: 'Title',
        description: 'Description',
        href: '#',
      },
    ],
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
