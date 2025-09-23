import { useAdminLayout, useAdminToolbar } from '../';
import type { Account, AccountMenuProps, BreadcrumbsLinkProps, LayoutProps, ToolbarProps } from '../../lib';

export type AdminSettings = Record<string, string>;

interface UseAdminProps {
  defaultAccountId?: string;
  currentAccount?: Account;
  accountMenu?: AccountMenuProps;
  pageId?: string;
  layout?: LayoutProps;
  breadcrumbs?: BreadcrumbsLinkProps[];
  toolbar?: ToolbarProps;
  settings?: AdminSettings;
}

function getAccountIdFromUrl(): string {
  const parsedUrl = new URL(window.location.href);
  const accountId = parsedUrl.searchParams.get('accountId') ?? '';
  return accountId;
}

function getAccountIdUrl(accountId: string): string {
  const url = new URL(window.location.href);
  url.searchParams.set('accountId', accountId);

  // redirect to profile

  if (accountId === 'user') {
    url.searchParams.set('id', 'demo-profile--dashboard-page');
  }

  return url.toString();
}

export const useAdmin = ({ defaultAccountId = 'diaspora', pageId = 'admin' }): UseAdminProps => {
  const accountId = getAccountIdFromUrl() || defaultAccountId;

  const onSelectAccount = (id: string) => {
    const accountUrl = getAccountIdUrl(id);
    window.location.href = accountUrl;
  };

  const layout = useAdminLayout({ accountId, pageId });

  const globalMenu = layout?.header?.globalMenu;
  const menu = layout?.sidebar?.menu;
  const currentAccount = globalMenu?.currentAccount;

  const accountMenu = {
    search: globalMenu?.accountMenu?.search,
    groups: globalMenu?.accountMenu?.groups || {},
    items: globalMenu?.accountMenu?.items || [],
    onSelectAccount,
    currentAccount,
  };

  const page = menu?.items?.find((item) => item.selected);

  const breadcrumbs: BreadcrumbsLinkProps[] = [
    {
      label: 'Forside',
    },
    {
      label: (currentAccount?.name as string) || 'Seksjon',
    },
    {
      label: (page?.title as string) || 'Side',
    },
  ];

  const settings = {
    companyId: '928914038',
    companyType: 'Forening/lag/innretning',
    address: 'c/o Paal Zandstra Krokeide, Høyenhallsvingen 16, 0667 Oslo',
    email: 'post@diasporabergensis.no',
    phone: '+47 99010203',
    naceCode: '94.992 Aktiviteter i andre medlemsorganisasjoner ellers',
  };

  const toolbar = useAdminToolbar({ accountMenu });

  return {
    layout: {
      ...layout,
      header: {
        ...layout.header,
        globalMenu: {
          ...layout.header?.globalMenu,
          onSelectAccount,
        },
      },
    },
    currentAccount,
    accountMenu,
    breadcrumbs,
    settings,
    toolbar: toolbar as ToolbarProps,
  };
};
