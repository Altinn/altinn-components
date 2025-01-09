import { accounts } from '.';
import type { AccountMenuProps } from '../../../components';

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
  accountGroups: {
    primary: {
      title: 'Deg selv og favoritter',
    },
    secondary: {
      title: 'Andre kontoer',
    },
  },
  accounts,
};
