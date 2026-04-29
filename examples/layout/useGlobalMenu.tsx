import { defaultAccounts, globalMenu, loginMenu, useAccountMenu } from '../';
import type { AccountListItemProps, MenuItemProps, MenuProps } from '../../lib';
import type { GlobalMenuProps } from '../../lib/components/GlobalMenu';

interface UseGlobalMenuProps {
  accountId?: string | null;
  sectionId?: string;
  accounts?: AccountListItemProps[];
  menu?: MenuProps;
  menuLabel?: string;
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
    ?.filter((item: MenuItemProps) => {
      if (currentAccount?.id === 'user' && item.id === 'admin') {
        return false;
      }
      return true;
    })
    ?.map((item: MenuItemProps) => {
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
  };
};

export const useGlobalHeaderMenu = ({ menu = globalMenu.menu, menuLabel = 'Meny', ...props }: UseGlobalMenuProps) => {
  const applicableMenuItems = menu?.items?.map((item: MenuItemProps) => {
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
