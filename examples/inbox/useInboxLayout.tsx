import { desktopMenu, desktopMenuItems, inboxBetaMenuItems, inboxMenu, useLayout } from '../';
import type { LayoutProps, MenuProps } from '../../lib';

interface InboxStorybookPageProps {
  [key: string]: string;
}

interface InboxLayoutProps extends LayoutProps {
  accountId?: string;
  pageId?: string;
  items?: MenuProps['items'];
  pages?: InboxStorybookPageProps;
}

export const useInboxLayout = ({
  accountId = 'diaspora',
  pageId = 'inbox',
  items = inboxBetaMenuItems,
  pages = {},
}): InboxLayoutProps => {
  const baseHref = '?id=';

  const storybookPages = {
    admin: 'demo-admin--dashboard-page',
    profile: 'demo-profile--dashboard-page',
    accounts: 'demo-profile--accounts-page',
    alerts: 'demo-profile--alerts-page',
    inbox: 'demo-inbox--inbox-page',
    drafts: 'demo-inbox--drafts-page',
    sent: 'demo-inbox--sent-page',
    bookmarks: 'demo-inbox--bookmarks-page',
    archive: 'demo-inbox--archive-page',
    trash: 'demo-inbox--trash-page',
    about: 'demo-inbox--about-page',
    'about-inbox': 'demo-inbox--about-inbox-page',
    ...pages,
  };

  const menuItems = items.map((item) => {
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

    const expanded = item.id === 'inbox';

    return {
      ...item,
      href,
      selected: item.id === pageId,
      expanded,
      items: expanded && mobileMenuChildren,
    };
  });

  const layout = useLayout({
    theme: 'subtle',
    accountId,
    menu: {
      ...desktopMenu,
      items: desktopItems as MenuProps['items'],
    },
    sidebar: {
      sticky: true,
      menu: {
        ...inboxMenu,
        items: menuItems,
      },
    },
  });

  return {
    ...layout,
    pageId,
  };
};
