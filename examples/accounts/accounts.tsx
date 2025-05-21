import type { AccountMenuProps } from '../../lib';

export const accounts: AccountMenuProps['accounts'] = [
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
    id: 'party:bergenbar',
    groupId: 'favourites',
    type: 'company',
    name: 'Bergen bar',
    badge: {
      label: '2',
    },
  },
  {
    id: 'party:diaspora',
    groupId: 'favourites',
    type: 'company',
    name: 'Diaspora Bergensis',
    badge: {
      label: '34',
    },
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
    id: 'party:daily-pot',
    groupId: 'favourites',
    type: 'company',
    name: 'Daily Pot',
    badge: {
      label: '12',
    },
  },
  {
    id: 'customGroup',
    groupId: 'groups',
    type: 'person',
    name: 'Landslaget og meg',
    items: [
      { type: 'company', name: 'Landslaget' },
      { type: 'person', name: 'Mathias Dyngeland' },
    ],
    selected: false,
    badge: {
      size: 'xs',
      label: '19',
    },
  },
  {
    id: 'allAccounts',
    groupId: 'groups',
    type: 'company',
    name: 'Alle virksomheter',
    items: [{ name: 'Keeperhansker AS' }, { name: 'Stadion drift AS' }, { name: 'Landslaget' }],
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
];
