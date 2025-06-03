import { defaultAccounts, localeSwitcher, useGlobalMenu, useInboxSearch, useLocale } from '../';
import type { Account, AccountListItemProps, HeaderProps } from '../../lib';

interface UseHeaderProps extends HeaderProps {
  accountId?: string | null;
  accounts?: AccountListItemProps[];
}

export const useHeader = ({ accountId = 'user', accounts = defaultAccounts, ...args }: UseHeaderProps) => {
  /* setup locale */
  const localeProps = args?.locale || localeSwitcher;
  const locale = useLocale(localeProps);

  /* setup search */
  const searchProps = args?.search || {
    name: 'search',
    placeholder: 'Søk i Altinn',
  };

  const search = useInboxSearch(searchProps);

  /* setup globalMenu */

  const menu = useGlobalMenu({ ...args.menu, accountId, accounts });

  return {
    menu,
    locale,
    search,
    currentAccount: menu?.currentAccount as Account,
  };
};
