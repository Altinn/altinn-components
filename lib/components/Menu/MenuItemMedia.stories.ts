import type { Meta, StoryObj } from '@storybook/react';

import { MenuItemMedia } from './MenuItemMedia';

const meta = {
  title: 'Menu/MenuItemMedia',
  component: MenuItemMedia,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof MenuItemMedia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    icon: 'inbox',
  },
};

export const Avatar: Story = {
  args: {
    avatar: {
      type: 'company',
      name: 'Bergen Bar',
    },
  },
};

export const AvatarGroup: Story = {
  args: {
    avatarGroup: {
      items: [
        {
          type: 'company',
          name: 'Bergen Bar',
        },
        {
          type: 'company',
          name: 'Oslolosens landhandleri',
        },
        {
          type: 'company',
          name: 'Drammens Teater',
        },
      ],
    },
  },
};
