import { useAccountMenu, useAdminLayout, useAdminToolbar } from '../';
import type {
  AccountMenuItemProps,
  AccountMenuProps,
  BreadcrumbsLinkProps,
  Color,
  LayoutProps,
  ToolbarProps,
} from '../../lib';

export type AdminSettings = Record<string, string>;

interface UseAdminProps {
  defaultAccountId?: string;
  currentAccount?: AccountMenuItemProps;
  accountMenu?: AccountMenuProps;
  pageId?: string;
  layout?: LayoutProps;
  breadcrumbs?: BreadcrumbsLinkProps[];
  toolbar?: ToolbarProps;
  settings?: AdminSettings;
  color?: Color;
}

function getAccountIdFromUrl(): string {
  const parsedUrl = new URL(window.location.href);
  return parsedUrl.searchParams.get('accountId') ?? '';
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
    window.location.href = getAccountIdUrl(id);
  };

  const layout = useAdminLayout({ accountId, pageId });

  const menu = layout?.sidebar?.menu;
  const baseAccountMenu = useAccountMenu({ accountId });
  const currentAccount = baseAccountMenu?.currentAccount;

  const accountMenu = {
    search: baseAccountMenu?.search,
    groups: baseAccountMenu?.groups || {},
    items: baseAccountMenu?.items || [],
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

  const color: Color =
    currentAccount?.type === 'company' || currentAccount?.type === 'person' ? currentAccount.type : 'neutral';

  return {
    layout,
    currentAccount,
    accountMenu: accountMenu as AccountMenuProps,
    breadcrumbs,
    settings,
    toolbar: toolbar as ToolbarProps,
    color,
  };
};
