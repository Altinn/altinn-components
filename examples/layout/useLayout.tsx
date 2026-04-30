import { defaultAccounts, header as defaultHeader, footer, skipLink, useAccountMenu, useHeader } from '..';
import type {
  AccountListItemProps,
  AccountMenuProps,
  AccountSelectorProps,
  GlobalHeaderProps,
  LayoutProps,
  MenuProps,
} from '../../lib';

interface UseLayoutProps extends LayoutProps {
  accounts?: AccountListItemProps[];
  accountId?: string | null;
  menu?: MenuProps;
}

function getAccountIdFromUrl(): string {
  const parsedUrl = new URL(window.location.href);
  const accountId = parsedUrl.searchParams.get('accountId') ?? '';
  return accountId;
}

function getAccountIdUrl(accountId: string): string {
  const url = new URL(window.location.href);
  url.searchParams.set('accountId', accountId);
  return url.toString();
}

export const useLayout = ({
  accounts = defaultAccounts,
  accountId,
  color = 'company',
  theme = 'default',
  header = defaultHeader,
  sidebar,
  menu,
}: UseLayoutProps): LayoutProps => {
  const applicableAccountId = getAccountIdFromUrl() || accountId;

  const headerProps = useHeader({
    ...header,
    accounts,
    accountId: applicableAccountId,
    menu,
  });

  const baseAccountMenu = useAccountMenu({ accountId: applicableAccountId, accounts });

  const onSelectAccount = (id: string) => {
    window.location.href = getAccountIdUrl(id);
  };

  const accountSelector: AccountSelectorProps = {
    accountMenu: {
      ...baseAccountMenu,
      onSelectAccount,
    } as AccountMenuProps,
  };

  return {
    color,
    theme,
    skipLink,
    footer,
    header: {
      ...headerProps,
      mobileMenu: headerProps?.mobileMenu,
      globalMenu: headerProps?.globalMenu,
      accountSelector,
    } as unknown as GlobalHeaderProps,
    sidebar,
  };
};
