import type { AccountMenuItem } from '../../../components';

export const accounts: AccountMenuItem[] = [
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
    id: 'party:brann',
    groupId: 'favourites',
    type: 'company',
    name: 'Sportsklubben Brann',
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
    id: 'party:landslaget',
    groupId: 'secondary',
    type: 'company',
    name: 'Landslaget',
  },
];
