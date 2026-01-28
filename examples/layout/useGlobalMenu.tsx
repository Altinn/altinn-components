import { defaultAccounts, globalMenu, loginMenu, useAccountMenu } from '../';
import type { AccountListItemProps, GlobalMenuProps_old } from '../../lib';
import type { GlobalMenuProps } from '../../lib/components/GlobalMenu';

interface UseGlobalMenuProps extends GlobalMenuProps_old {
  accountId?: string | null;
  sectionId?: string;
  accounts?: AccountListItemProps[];
}

export const useGlobalMenu = ({
  accountId = 'user',
  sectionId,
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

  // filter out admin if userId === "user"

  const applicableMenuItems = menu?.items
    ?.filter((item) => {
      if (currentAccount?.id === 'user' && item.id === 'admin') {
        return false;
      }
      return true;
    })
    ?.map((item) => {
      return {
        ...item,
      };
    });

  return {
    ...globalMenu,
    ...props,
    menu: {
      ...menu,
      items: applicableMenuItems,
    },
    menuLabel,
    accountMenu: {
      ...accountMenu,
      virtualized: true,
    },
    currentAccount,
    onSelectAccount,
  } as GlobalMenuProps_old;
};

export const useGlobalHeaderMenu = ({ menu = globalMenu.menu, menuLabel = 'Meny', ...props }: UseGlobalMenuProps) => {
  const applicableMenuItems = menu?.items?.map((item) => {
    return {
      ...item,
    };
  });

  return {
    ...globalMenu,
    ...props,
    menu: {
      ...menu,
      items: applicableMenuItems,
    },
    menuLabel,
    accountMenu: {
      virtualized: true,
    },
  } as GlobalMenuProps;
};
