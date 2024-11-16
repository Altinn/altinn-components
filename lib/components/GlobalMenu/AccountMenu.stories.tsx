import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { AccountMenu } from './AccountMenu';

const meta = {
  title: 'GlobalMenu/AccountMenu',
  component: AccountMenu,
  tags: ['autodocs'],
  parameters: {},
  args: {
    accountGroups: {
      primary: {
        title: 'Deg selv og favoritter',
      },
      secondary: {
        title: 'Andre kontoer',
      },
    },
    accounts: [
      {
        groupId: 'primary',
        type: 'person',
        name: 'Aurora Mikalsen',
        selected: true,
      },
      {
        groupId: 'favourites',
        type: 'company',
        name: 'Bergen Bar',
        selected: false,
      },
      {
        groupId: 'secondary',
        type: 'company',
        name: 'Keeperhansker AS',
        selected: false,
      },
      {
        groupId: 'secondary',
        type: 'company',
        name: 'Stadion drift AS',
        selected: false,
      },
      {
        groupId: 'favourites',
        type: 'company',
        name: 'Sportsklubben Brann',
        selected: false,
      },
      {
        groupId: 'secondary',
        type: 'company',
        name: 'Landslaget',
        selected: false,
      },
    ],
  },
} satisfies Meta<typeof AccountMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
