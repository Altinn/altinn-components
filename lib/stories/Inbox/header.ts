import type { HeaderProps } from '../../components';

export const header: HeaderProps = {
  search: {
    name: 'search',
    placeholder: 'Søk i Altinn',
  },
  menu: {
    accounts: [
      {
        type: 'person',
        name: 'Aurora Mikalsen',
        selected: true,
      },
    ],
  },
};
