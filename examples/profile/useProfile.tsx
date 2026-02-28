import { useProfileLayout } from '../';
import type { Account, GlobalMenuProps_old, LayoutProps } from '../../lib';

interface UseProfileProps {
  defaultAccountId?: string;
  pageId?: string;
  currentAccount?: Account;
  layout?: LayoutProps;
}

function getAccountIdFromUrl(): string {
  const parsedUrl = new URL(window.location.href);
  const accountId = parsedUrl.searchParams.get('accountId') ?? '';
  return accountId;
}

function getAccountIdUrl(accountId: string): string {
  const url = new URL(window.location.href);
  url.searchParams.set('accountId', accountId);

  // redirect to admin

  if (accountId !== 'user') {
    url.searchParams.set('id', 'demo-admin--dashboard-page');
  }

  return url.toString();
}

export const useProfile = ({ defaultAccountId = 'user', pageId = 'profile' }): UseProfileProps => {
  const accountId = getAccountIdFromUrl() || defaultAccountId;

  const onSelectAccount = (id: string) => {
    const accountUrl = getAccountIdUrl(id);
    window.location.href = accountUrl;
  };

  const layout = useProfileLayout({
    accountId,
    pageId,
  });

  const globalMenu = layout?.header?.globalMenu as GlobalMenuProps_old;
  const menu = layout?.sidebar?.menu;
  const currentAccount = globalMenu?.currentAccount;
  const page = menu?.items?.find((item) => item.selected);

  const breadcrumbs = {
    items: [
      {
        label: 'Forside',
      },
      {
        label: 'Min profil',
      },
      {
        label: (page?.title as string) || 'Side',
      },
    ],
  };

  return {
    layout: {
      ...layout,
      breadcrumbs,
      color: 'person',
      theme: 'neutral',
      header: {
        ...layout.header,
        globalMenu: {
          ...layout.header?.globalMenu,
          onSelectAccount,
        },
      },
    },
    currentAccount,
  };
};
