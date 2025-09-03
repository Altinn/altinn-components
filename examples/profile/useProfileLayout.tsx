import { desktopMenu, desktopMenuItems, footer, profileMenu, profileMenuItems, useLayout } from '../';
import type { BreadcrumbsLinkProps, LayoutProps } from '../../lib';

interface ProfileLayoutProps extends LayoutProps {
  pageId?: string;
  breadcrumbs?: BreadcrumbsLinkProps[];
}

export const useProfileLayout = ({ pageId = 'profile' }): ProfileLayoutProps => {
  const baseHref = '?id=';

  const storybookPages = {
    inbox: 'demo-inbox--inbox-page',
    admin: 'demo-admin--dashboard-page',
    profile: 'demo-profile--dashboard-page',
    accounts: 'demo-profile--accounts-page',
    alerts: 'demo-profile--alerts-page',
    settings: 'demo-profile--settings-page',
    access: 'demo-profile--access-page',
    users: 'demo-profile--users-page',
    'activity-log': 'demo-profile--activity-log-page',
  };

  const menuItems = profileMenuItems.map((item) => {
    const storyBookId = storybookPages?.[item.id as keyof typeof storybookPages];
    const href = storyBookId && [baseHref, storyBookId].join('');

    return {
      ...item,
      href,
      selected: item.id === pageId,
    };
  });

  const page = menuItems?.find((item) => item.selected);

  const desktopItems = desktopMenuItems.map((item) => {
    const storyBookId = storybookPages?.[item.id as keyof typeof storybookPages];
    const href = storyBookId && [baseHref, storyBookId].join('');

    return {
      ...item,
      href,
      selected: item.id === 'profile',
    };
  });

  const layout = useLayout({
    color: 'neutral',
    theme: 'subtle',
    menu: {
      ...desktopMenu,
      items: desktopItems,
    },
    sidebar: {
      menu: { ...profileMenu, items: menuItems },
    },
  });

  const currentAccount = layout.header?.currentAccount;

  const breadcrumbs = [
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

  return {
    ...layout,
    breadcrumbs,
    footer,
  };
};
