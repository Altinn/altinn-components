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
        id: 'aurora',
        groupId: 'primary',
        type: 'person',
        name: 'Aurora Mikalsen',
        selected: true,
        badge: {
          label: '2',
        },
      },
      {
        id: 'bergen-bar',
        groupId: 'favourites',
        type: 'company',
        name: 'Bergen Bar',
        selected: false,
        badge: {
          label: '19',
        },
      },
      {
        id: 'allAccounts',
        groupId: 'groups',
        type: 'company',
        name: 'Alle virksomheter',
        accountNames: ['Keeperhansker AS', 'Stadion drift AS', 'Landslaget'],
        selected: false,
        badge: {
          label: '19',
        },
      },
      {
        id: 'keeper',
        groupId: 'secondary',
        type: 'company',
        name: 'Keeperhansker AS',
        selected: false,
      },
      {
        id: 'stadion-drift',
        groupId: 'secondary',
        type: 'company',
        name: 'Stadion drift AS',
        selected: false,
      },
      {
        id: 'sk-brann',
        groupId: 'favourites',
        type: 'company',
        name: 'Sportsklubben Brann',
        selected: false,
      },
      {
        id: 'norge',
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
