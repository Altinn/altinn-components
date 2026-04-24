import { desktopMenu, desktopMenuItems, profileMenu, profileMenuItems, useLayout } from '../';
import type { LayoutProps, MenuProps } from '../../lib';
import type { AccountDataProps } from '../accounts';

interface ProfileLayoutProps extends LayoutProps {
  accountId?: string;
  pageId?: string;
  account?: AccountDataProps;
}

export const useProfileLayout = ({ accountId = 'user', pageId = 'profile' }): ProfileLayoutProps => {
  const baseHref = '?id=';

  const storybookPages = {
    inbox: 'demo-inbox--inbox-page',
    admin: 'demo-admin--dashboard-page',
    profile: 'settings-settingslist--person-settings',
    accounts: 'account-accountlist--account-settings',
    bookmarks: 'settings-settingslist--bookmark-settings',
    alerts: 'settings-settingslist--alert-settings',
    contact: 'demo-profile--contact-page',
    settings: 'demo-profile--settings-page',
    access: 'demo-profile--access-page',
    users: 'demo-profile--users-page',
    'activity-log': 'timeline-activitylog--profile-activity-log',
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

  const mobileMenuChildren = menuItems?.slice(1)?.filter((item) => item.groupId !== 'shortcuts'); // all except top node and shortcuts

  const desktopItems = desktopMenuItems.map((item) => {
    const storyBookId = storybookPages?.[item.id as keyof typeof storybookPages];
    const href = storyBookId && [baseHref, storyBookId].join('') + '&accountId=' + accountId;

    const expanded = item.id === 'profile';

    if (expanded) {
      return {
        ...item,
        href,
        expanded,
        selected: item.id === pageId,
        items: mobileMenuChildren?.map((item) => {
          return {
            ...item,
            size: 'sm',
          };
        }),
      };
    }

    return {
      ...item,
      selected: item.id === pageId,
      href,
    };
  });

  const page = menuItems?.find((item) => item.selected);

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

  const layout = useLayout({
    accountId,
    color: 'neutral',
    theme: 'subtle',
    menu: {
      ...desktopMenu,
      items: desktopItems as MenuProps['items'],
    },
    sidebar: {
      sticky: true,
      menu: {
        ...profileMenu,
        items: menuItems,
      },
    },
  });

  return { ...layout, breadcrumbs };
};
