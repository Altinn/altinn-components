import type { Meta, StoryObj } from '@storybook/react';
import { accountMenu } from '../../../examples';
import { AccountMenu, type AccountMenuProps } from './AccountMenu';

const accountMenuWithSubItems: AccountMenuProps = {
  accountSearch: {
    placeholder: 'finn',
    name: 'search-account',
    getResultsLabel: (hits = 0) => {
      if (hits) {
        return hits + ' treff';
      }
      return 'Ingen treff';
    },
    hidden: false,
  },
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
      id: 'party:mathias',
      groupId: 'primary',
      type: 'person',
      name: 'Mathias Dyngeland',
      badge: {
        label: '12',
      },
      alertBadge: {
        label: '7 uleste',
      },
    },
    {
      id: 'party:bergerbar',
      groupId: 'favourites',
      type: 'company',
      name: 'Bergen bar',
      badge: {
        label: '2',
      },
      items: [
        {
          id: 'party:bergerbar-sub2',
          type: 'company',
          name: 'Bergen SubParty 1',
          badge: {
            label: '2',
          },
        },
        {
          id: 'party:bergerbar-sub3 ',
          type: 'company',
          name: 'Bergen SubParty 2',
          badge: {
            label: '2',
          },
        },
      ],
    },
    {
      id: 'party:brann',
      groupId: 'favourites',
      type: 'company',
      name: 'Sportsklubben Brann',
      badge: {
        label: '34',
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
        size: 'xs',
        label: '19',
      },
    },
    {
      id: 'party:keeperhansker',
      groupId: 'secondary',
      type: 'company',
      name: 'Keeperhansker AS',
      badge: {
        label: '34',
      },
      alertBadge: {
        label: '2 uleste',
      },
    },
    {
      id: 'party:stadiondrift',
      groupId: 'secondary',
      type: 'company',
      name: 'Stadion drift AS',
      badge: {
        label: '34',
      },
    },
    {
      id: 'party:landslaget',
      groupId: 'secondary',
      type: 'company',
      name: 'Landslaget',
      badge: {
        size: 'xs',
        label: '34',
      },
    },
  ],
};

const meta = {
  title: 'Menu/AccountMenu',
  component: AccountMenu,
  tags: ['autodocs'],
  parameters: {},
  args: {
    ...accountMenu,
  },
} satisfies Meta<typeof AccountMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const SubItems: Story = {
  args: {
    ...accountMenuWithSubItems,
  },
};
