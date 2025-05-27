import type { HeaderProps, AccountListItemProps } from "../../lib";
import {
  defaultAccounts,
  useInboxSearch,
  useAccountMenu,
  useLocale,
  globalMenu,
  loginMenu,
  localeSwitcher,
} from "../";

interface UseHeaderProps extends HeaderProps {
  accounts?: AccountListItemProps[];
  accountId?: string | null | undefined;
}

export const useHeader = ({
  accountId = "user",
  accounts = defaultAccounts,
  ...args
}: UseHeaderProps) => {
  /* setup locale */
  const localeProps = args?.locale || localeSwitcher;
  const locale = useLocale(localeProps);

  /* setup search */
  const searchProps = args?.search || {
    name: "search",
    placeholder: "Søk i Altinn",
  };
  const search = useInboxSearch(searchProps);

  /* if no accountId, return login menu */
  if (accountId === null || accountId === undefined) {
    return {
      menu: loginMenu,
      locale,
      search,
    };
  }

  /* setup account menu */
  const accountMenu = accounts && useAccountMenu({ accounts, accountId });

  /* first account is user */
  const currentEndUser = accountMenu?.items[0];
  const currentEndUserLabel =
    currentEndUser && "Logget inn som " + currentEndUser.name;

  /* current account */
  const currentAccount = accountMenu?.currentAccount;

  /* set menu from props or default */
  const globalMenuProps = args?.menu || currentAccount ? globalMenu : loginMenu;

  const menu = {
    ...globalMenuProps,
    accountMenu,
    onSelectAccount: accountMenu?.onSelectAccount,
    currentEndUserLabel,
  };

  return {
    menu,
    locale,
    search,
    currentAccount,
  };
};
