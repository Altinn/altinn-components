import { defaultAccounts, header as defaultHeader, footer, skipLink, useHeader } from '..';
import type { AccountListItemProps, HeaderProps, LayoutProps, MenuProps } from '../../lib';

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

  const onSelectAccount = (id: string) => {
    const accountUrl = getAccountIdUrl(id);
    window.location.href = accountUrl;
  };

  return {
    color,
    theme,
    skipLink,
    footer,
    header: {
      ...headerProps,
      globalMenu: {
        ...headerProps?.globalMenu,
        onSelectAccount,
      },
    } as HeaderProps,
    sidebar,
  };
};
