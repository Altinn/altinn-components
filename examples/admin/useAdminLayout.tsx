import { adminMenu, adminMenuItems, desktopMenu, desktopMenuItems, useLayout } from '../';
import type { AvatarProps, BreadcrumbsLinkProps, LayoutProps } from '../../lib';

export type AdminSettings = Record<string, string>;

interface AdminLayoutProps {
  accountId?: string;
  account?: AvatarProps;
  pageId?: string;
  breadcrumbs?: BreadcrumbsLinkProps[];
  layout: LayoutProps;
  settings?: AdminSettings;
}

export const useAdminLayout = ({ accountId = 'diaspora', pageId = 'admin' }): AdminLayoutProps => {
  const baseHref = '?id=';

  const storybookPages = {
    admin: 'demo-admin--dashboard-page',
    profile: 'demo-profile--dashboard-page',
    accounts: 'demo-profile--accounts-page',
    alerts: 'demo-profile--alerts-page',
    inbox: 'demo-inbox--inbox-page',
    settings: 'demo-admin--settings-page',
    access: 'demo-admin--access-page',
    users: 'demo-admin--users-page',
    'activity-log': 'demo-admin--activity-log-page',
  };

  const desktopItems = desktopMenuItems.map((item) => {
    const storyBookId = storybookPages?.[item.id as keyof typeof storybookPages];
    const href = storyBookId && [baseHref, storyBookId].join('');

    return {
      ...item,
      href,
      selected: item.id === 'admin',
    };
  });

  const layout = useLayout({
    color: 'neutral',
    theme: 'subtle',
    accountId,
    menu: {
      ...desktopMenu,
      items: desktopItems,
    },
  });

  const account = layout?.header?.globalMenu?.currentAccount;

  const menuItems = adminMenuItems.map((item, index) => {
    const storyBookId = storybookPages?.[item.id as keyof typeof storybookPages];
    const href = storyBookId && [baseHref, storyBookId].join('');

    return {
      ...item,
      href,
      icon: (!index && account) || item?.icon,
      selected: item.id === pageId,
    };
  });

  const page = menuItems?.find((item) => item.selected);

  const breadcrumbs: BreadcrumbsLinkProps[] = [
    {
      label: 'Forside',
    },
    {
      label: 'Seksjon',
    },
    {
      label: (page?.title as string) || 'Side',
    },
  ];

  const settings = {
    companyId: '928914038',
    companyType: 'Forening/lag/innretning',
    address: 'Høyenhallsvingen 16, 0667 Oslo',
    email: 'post@diasporabergensis.no',
    phone: '+47 99010203',
  };

  return {
    breadcrumbs,
    account,
    settings,
    layout: {
      ...layout,
      sidebar: {
        menu: {
          ...adminMenu,
          variant: 'subtle',
          items: menuItems,
        },
      },
    },
  };
};
