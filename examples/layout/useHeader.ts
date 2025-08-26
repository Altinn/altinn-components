import { defaultAccounts, localeSwitcher, useGlobalMenu, useLocale, useSearchbar } from '../';
import type { Account, AccountListItemProps, HeaderProps } from '../../lib';

interface UseHeaderProps extends HeaderProps {
  accountId?: string | null;
  accounts?: AccountListItemProps[];
}

export const useHeader = ({ accountId, accounts = defaultAccounts, ...args }: UseHeaderProps) => {
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

  const globalMenu = useGlobalMenu({ ...args.globalMenu, accountId, accounts });

  return {
    globalMenu,
    locale,
    search,
    currentAccount: globalMenu?.currentAccount as Account,
  };
};
