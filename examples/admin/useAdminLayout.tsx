import { adminMenu, adminMenuItems, desktopMenu, desktopMenuItems, useLayout } from '../';
import type { LayoutProps, MenuProps } from '../../lib';

interface AdminLayoutProps extends LayoutProps {
  accountId?: string;
  pageId?: string;
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

  const menuItems = adminMenuItems.map((item) => {
    const storyBookId = storybookPages?.[item.id as keyof typeof storybookPages];
    const href = storyBookId && [baseHref, storyBookId].join('') + '&accountId=' + accountId;

    return {
      ...item,
      href,
      selected: item.id === pageId,
    };
  });

  const mobileMenuChildren = menuItems?.slice(1)?.filter((item) => item.groupId !== 'shortcuts'); // all except top node and shortcuts

  const desktopItems = desktopMenuItems.map((item) => {
    const storyBookId = storybookPages?.[item.id as keyof typeof storybookPages];
    const href = storyBookId && [baseHref, storyBookId].join('') + '&accountId=' + accountId;

    const expanded = item.id === 'admin';

    return {
      ...item,
      href,
      expanded,
      selected: item.id === pageId,
      items: expanded && mobileMenuChildren,
    };
  });

  const layout = useLayout({
    color: 'neutral',
    theme: 'subtle',
    accountId,
    menu: {
      ...desktopMenu,
      items: desktopItems as MenuProps['items'],
    },
  });

  const currentAccount = layout?.header?.currentAccount;

  return {
    ...layout,
    color: currentAccount?.type,
    sidebar: {
      menu: {
        ...adminMenu,
        color: currentAccount?.type,
        variant: 'subtle',
        items: menuItems?.filter((item) => {
          if (currentAccount?.type === 'person' && item.groupId === '5') {
            return false;
          }

          return true;
        }),
      },
    },
  };
};
