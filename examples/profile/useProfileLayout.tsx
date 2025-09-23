import { desktopMenu, desktopMenuItems, profileMenu, profileMenuItems, useLayout } from '../';
import type { Account, BreadcrumbsLinkProps, LayoutProps } from '../../lib';

interface ProfileLayoutProps extends LayoutProps {
  accountId?: string;
  pageId?: string;
  breadcrumbs?: BreadcrumbsLinkProps[];
  account?: Account;
}

export const useProfileLayout = ({ accountId = 'user', pageId = 'profile' }): ProfileLayoutProps => {
  const baseHref = '?id=';

  const storybookPages = {
    inbox: 'demo-inbox--inbox-page',
    admin: 'demo-admin--dashboard-page',
    profile: 'demo-profile--dashboard-page',
    accounts: 'demo-profile--accounts-page',
    alerts: 'demo-profile--alerts-page',
    contact: 'demo-profile--contact-page',
    settings: 'demo-profile--settings-page',
    access: 'demo-profile--access-page',
    users: 'demo-profile--users-page',
    'activity-log': 'demo-profile--activity-log-page',
  };

  const menuItems = profileMenuItems.map((item) => {
    const storyBookId = storybookPages?.[item.id as keyof typeof storybookPages];
    const href = storyBookId && [baseHref, storyBookId].join('') + '&accountId=' + accountId;

    return {
      ...item,
      href,
      selected: item.id === pageId,
    };
  });

  const desktopItems = desktopMenuItems.map((item) => {
    const storyBookId = storybookPages?.[item.id as keyof typeof storybookPages];
    const href = storyBookId && [baseHref, storyBookId].join('') + '&accountId=' + accountId;

    return {
      ...item,
      href,
      selected: item.id === 'profile',
    };
  });

  const layout = useLayout({
    accountId,
    color: 'neutral',
    theme: 'subtle',
    menu: {
      ...desktopMenu,
      items: desktopItems,
    },
    sidebar: {
      menu: {
        ...profileMenu,
        items: menuItems,
      },
    },
  });

  return layout;
};
