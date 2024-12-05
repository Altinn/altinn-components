import type { AccountMenuProps } from '../components';

export const accountMenuProps: AccountMenuProps = {
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
    },
    {
      id: 'bergen-bar',
      groupId: 'favourites',
      type: 'company',
      name: 'Bergen Bar',
      selected: false,
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
};
