import { defaultAccounts, globalMenu, loginMenu, useAccounts } from '../';
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

  const { onSelectAccount, currentAccount, ...accountMenu } = useAccounts({
    accountId,
    accounts,
    includeGroups: false,
  });

  console.log('C', currentAccount);

  //  const accountMenu = props?.accountMenu || getAccountMenu({ accounts });

  /* first account is current user
  const currentEndUser = accountMenu?.items?.[0];
 */

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
