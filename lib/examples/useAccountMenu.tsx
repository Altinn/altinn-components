import { useState } from 'react';
import type { Account, GlobalMenuProps } from '../components';

export const useAccountMenu = ({ accounts, ...props }: GlobalMenuProps) => {
  const [currentAccount, setCurrentAccount] = useState<Account | undefined>(accounts?.[0]);

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
