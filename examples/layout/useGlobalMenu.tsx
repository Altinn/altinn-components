import { defaultAccounts, globalMenu, loginMenu, useAccountMenu } from '../';
import type { AccountListItemProps, GlobalMenuProps } from '../../lib';

interface UseGlobalMenuProps extends GlobalMenuProps {
  accountId?: string | null;
  accounts?: AccountListItemProps[];
}

export const useGlobalMenu = ({
  accountId = 'user',
  accounts = defaultAccounts,
  menu = globalMenu.menu,
  menuLabel = 'Meny',
  ...props
}: UseGlobalMenuProps) => {
  if (!accountId) {
    return { menu: loginMenu, menuLabel };
  }

  const { onSelectAccount, currentAccount, ...accountMenu } = useAccountMenu({
    accountId,
    accounts,
    includeGroups: false,
  });

  return {
    ...globalMenu,
    ...props,
    menu,
    menuLabel,
    accountMenu,
    currentAccount,
    onSelectAccount,
  } as GlobalMenuProps;
};
