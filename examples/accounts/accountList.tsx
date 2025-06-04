import type { AccountListItemProps } from '../../lib';
import { accounts, getAccountItems } from './';

export const accountListGroups = {
  primary: {
    title: 'Deg selv',
  },
  favourites: {
    title: 'Favoritter',
  },
  groups: {
    title: 'Grupper',
  },
  secondary: {
    title: 'Andre kontoer',
  },
};

export const getAccountList = ({
  accounts,
}: {
  accounts?: AccountListItemProps[];
}) => {
  const items = getAccountItems({ accounts });

  return {
    items,
    groups: accountListGroups,
  };
};

export const accountList = getAccountList({ accounts });
