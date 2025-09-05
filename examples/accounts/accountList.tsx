import type { AccountListItemProps } from '../../lib';
import { accounts, getAccountItems } from './';

export const accountListGroups = {
  primary: {
    title: 'Favoritter',
  },
  favourites: {
    //    title: 'Favoritter',
  },
  groups: {
    //    title: 'Grupper',
  },
  secondary: {
    title: 'Andre aktører',
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
