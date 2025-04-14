import type { AccountMenuProps } from '../lib';

export const accountMenu: AccountMenuProps = {
  accountSearch: {
    placeholder: 'Finn konto',
    name: 'search-account',
    getResultsLabel: (hits = 0) => {
      if (hits) {
        return hits + ' treff';
      }
      return 'Ingen treff';
    },
    hidden: false,
  },
  isVirtualized: false,
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
  ],
};

export const accountMenuWithLongList: AccountMenuProps = {
  accountSearch: {
    placeholder: 'Finn konto',
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
  accounts: generateAccounts(10000),
};

function generateAccounts(count = 10000) {
  const groups = ['primary', 'favourites', 'secondary', 'groups'];
  const types: Array<'person' | 'company'> = ['person', 'company'];
  const names = [
    'Mathias Dyngeland',
    'Bergen bar',
    'Sportsklubben Brann',
    'Keeperhansker AS',
    'Stadion drift AS',
    'Landslaget',
  ];

  return Array.from({ length: count }, (_, i) => {
    const type = types[Math.floor(Math.random() * types.length)];
    const groupId = groups[Math.floor(Math.random() * groups.length)];
    const name = names[Math.floor(Math.random() * names.length)];

    const account = {
      id: `party:account${i}`,
      groupId,
      type,
      name,
      badge: {
        label: `${Math.floor(Math.random() * 50) + 1}`,
      },
      alertBadge: { label: `${Math.floor(Math.random() * 10) + 1} uleste` },
      accountNames: [''],
      selected: false,
    };

    if (Math.random() > 0.7) {
      account.alertBadge = {
        label: `${Math.floor(Math.random() * 10) + 1} uleste`,
      };
    }

    if (groupId === 'groups') {
      account.accountNames = names.slice(0, Math.floor(Math.random() * names.length) + 1);
      account.selected = false;
    }

    return account;
  });
}
