import { defaultAccounts, localeSwitcher, useGlobalMenu, useLocale, useSearchbar } from '../';
import type {
  AccountListItemProps,
  GlobalMenuProps,
  LocaleSwitcherProps,
  MenuItemProps,
  MenuProps,
  SearchbarProps,
} from '../../lib';
import type { AccountDataProps } from '../accounts';

interface UseHeaderProps {
  accountId?: string | null;
  accounts?: AccountListItemProps[];
  menu?: MenuProps;
  globalMenu?: GlobalMenuProps;
  locale?: LocaleSwitcherProps;
  search?: SearchbarProps;
}

export const useHeader = ({ accountId, accounts = defaultAccounts, menu, ...args }: UseHeaderProps) => {
  /* setup locale */
  const localeProps = args?.locale || localeSwitcher;
  const locale = useLocale(localeProps);

  /* setup search */
  const searchProps = args?.search || {
    name: 'search',
    placeholder: 'Søk i Altinn',
  };

  const search = useSearchbar(searchProps);

  /* setup globalMenu */

  const globalMenu = useGlobalMenu({
    ...args.globalMenu,
    accountId,
    accounts,
    menu,
  });

  /* setup mobileMenu */
  const mobileMenuItems = globalMenu?.menu?.items?.map((item: MenuItemProps) => {
    if (item.items) {
      return {
        ...item,
        expanded: true,
      };
    }
    return item;
  });

  const desktopMenuItems = globalMenu?.menu?.items?.map((item: MenuItemProps) => {
    if (item.items) {
      return {
        ...item,
        selected: item?.expanded,
        expanded: false,
      };
    }
    return item;
  });

  const mobileMenu = {
    ...globalMenu?.menu,
    items: mobileMenuItems,
  };

  const desktopMenu = {
    ...globalMenu?.menu,
    items: desktopMenuItems,
  };

  return {
    globalMenu,
    mobileMenu,
    desktopMenu,
    locale,
    search,
    currentAccount: (globalMenu as { currentAccount?: AccountDataProps })?.currentAccount,
  };
};
