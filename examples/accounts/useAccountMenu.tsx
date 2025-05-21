import { useState } from 'react';
import type { Account, GlobalMenuProps } from '../../lib';

interface UseAccountMenuProps extends GlobalMenuProps {
  accountId?: string;
}

export const useAccountMenu = ({ accountId, accounts, ...props }: UseAccountMenuProps) => {
  const defaultAccount = accounts?.find((item) => item.id === accountId) || accounts?.[0];

  const [currentAccount, setCurrentAccount] = useState<Account | undefined>(defaultAccount);

  const onSelectAccount = (id: string) => {
    const account = accounts?.find((item) => item.id === id);
    setCurrentAccount(account);
  };

  return {
    ...props,
    accounts,
    currentAccount,
    onSelectAccount,
  };
};
