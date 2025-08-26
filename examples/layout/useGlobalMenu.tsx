import { useState } from 'react';
import { defaultAccounts, getAccountMenu, globalMenu, loginMenu } from '../';
import type { Account, AccountListItemProps, GlobalMenuProps } from '../../lib';

interface UseGlobalMenuProps extends GlobalMenuProps {
  accountId?: string | null;
  accounts?: AccountListItemProps[];
}

export const useGlobalMenu = ({
  accountId = 'user',
  accounts = defaultAccounts,
  menuLabel = 'Meny',
  ...props
}: UseGlobalMenuProps) => {
  if (!accountId) {
    return { menu: loginMenu, menuLabel };
  }

  const accountMenu = props?.accountMenu || getAccountMenu({ accounts });

  /* first account is current user */
  const currentEndUser = accountMenu?.items?.[0];

  /* if no accountId, return first account */
  const defaultAccount =
    accountMenu?.items?.find((item) => item.id === accountId) ||
    accountMenu?.items?.find((item) => item.type === accountId) ||
    currentEndUser;

  const [currentAccount, setCurrentAccount] = useState<Account | undefined>(defaultAccount as Account | undefined);

  const onSelectAccount = (id: string) => {
    const account = accountMenu?.items?.find((item) => item.id === id);
    setCurrentAccount({
      id: account?.id,
      name: account?.name,
      type: account?.type,
      description: account?.description,
    } as Account);
  };

  return {
    ...globalMenu,
    ...props,
    menuLabel,
    accountMenu,
    currentAccount,
    onSelectAccount,
  } as GlobalMenuProps;
};
