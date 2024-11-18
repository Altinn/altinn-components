import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { GlobalMenu } from './GlobalMenu';

const meta = {
  title: 'GlobalMenu/GlobalMenu',
  component: GlobalMenu,
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
    currentAccount: {
      type: 'person',
      name: 'Mathias Dyngeland',
      description: 'Fødselsnr. 07101995 XXXXXX',
    },
    accounts: [
      {
        id: 'party:mathias',
        groupId: 'primary',
        type: 'person',
        name: 'Mathias Dyngeland',
      },
      {
        id: 'party:bergerbar',
        groupId: 'favourites',
        type: 'company',
        name: 'Bergen bar',
      },
      {
        id: 'party:keeperhansker',
        groupId: 'secondary',
        type: 'company',
        name: 'Keeperhansker AS',
      },
      {
        id: 'party:stadiondrift',
        groupId: 'secondary',
        type: 'company',
        name: 'Stadion drift AS',
      },
      {
        id: 'party:brann',
        groupId: 'favourites',
        type: 'company',
        name: 'Sportsklubben Brann',
      },
      {
        id: 'party:landslaget',
        groupId: 'secondary',
        type: 'company',
        name: 'Landslaget',
      },
    ],
    groups: {
      apps: {
        divider: true,
      },
    },
    items: [
      {
        id: 'inbox',
        groupId: 'apps',
        size: 'lg',
        icon: 'inbox',
        title: 'Innboks',
        badge: {
          color: 'alert',
          label: '4',
        },
      },
      {
        id: 'access',
        groupId: 'apps',
        size: 'lg',
        icon: 'bookmark',
        title: 'Tilganger',
        badge: {
          color: 'alert',
          label: '2',
        },
      },
      {
        id: 'access',
        groupId: 'apps',
        size: 'lg',
        icon: 'menu-grid',
        title: 'Alle skjema',
      },
      {
        id: 'startup',
        groupId: 'help',
        color: 'neutral',
        size: 'sm',
        icon: 'buildings2',
        title: 'Starte og drive bedrift',
      },
      {
        id: 'help',
        groupId: 'help',
        size: 'sm',
        color: 'neutral',
        icon: 'chat-exclamationmark',
        title: 'Trenger du hjelp?',
      },
    ],
  },
} satisfies Meta<typeof GlobalMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Login: Story = {
  args: {
    currentAccount: undefined,
    items: [
      {
        id: 'login',
        groupId: 'login',
        size: 'lg',
        color: 'strong',
        icon: 'padlock-locked',
        title: 'Logg inn',
      },
      {
        id: 'startup',
        groupId: 'help',
        color: 'neutral',
        size: 'sm',
        icon: 'buildings2',
        title: 'Starte og drive bedrift',
      },
      {
        id: 'help',
        groupId: 'help',
        color: 'neutral',
        size: 'sm',
        icon: 'chat-exclamationmark',
        title: 'Trenger du hjelp?',
      },
    ],
  },
};

export const Company: Story = {
  args: {
    currentAccount: {
      type: 'company',
      name: 'Sportsklubben Brann',
      description: 'Org. nr. 934908988',
    },
  },
};

export const CustomLabels: Story = {
  args: {
    logoutLabel: 'Logg ut',
    menuLabel: 'Meny',
    backLabel: 'Tilbake',
    changeLabel: 'Endre konto',
    accountSearch: {
      placeholder: 'Søk etter konto',
      getResultsLabel: (hits = 0) => {
        if (hits) {
          return hits + ' treff';
        }
        return 'Ingen treff';
      },
      hidden: false,
    },
  },
};
