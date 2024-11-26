import type { Meta, StoryObj } from '@storybook/react';
import { Fragment, useState } from 'react';

import { ListItemAction, ListItemBase } from './';

const meta = {
  title: 'List/ListItemAction',
  component: ListItemAction,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    linkIcon: 'chevron-right',
  },
};

export const TextAndIcon: Story = {
  args: {
    linkText: '2 dager siden',
    linkIcon: 'chevron-right',
  },
};

export const BadgeAndIcon: Story = {
  args: {
    badge: {
      label: 'Admin',
    },
    linkIcon: 'chevron-down',
  },
};

export const ContextMenu: Story = {
  args: {
    menu: {
      items: [
        {
          label: 'Slett alle',
        },
      ],
    },
  },
};
