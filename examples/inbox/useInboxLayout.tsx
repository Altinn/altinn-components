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
  accountId = 'user',
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
    inbox: 'inbox-inboxpage--inbox',
    drafts: 'inbox-inboxpage--drafts',
    archive: 'inbox-inboxpage--archive',
    trash: 'inbox-inboxpage--trash',
    sent: 'inbox-inboxpage--sent',
    bookmarks: 'bookmarks-demo--inbox-all-accounts',
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

  const currentPage = menuItems?.find((item) => item.selected);

  const breadcrumbs = {
    items: [
      {
        href: '#',
        label: 'Forside',
      },
      {
        href: '#',
        label: 'Inbox',
      },
      ...(currentPage && currentPage.id !== 'inbox' ? [{ href: '#', label: currentPage.title }] : []),
    ],
  };

  const layout = useLayout({
    accountId,
    menu: {
      ...desktopMenu,
      items: desktopItems as MenuProps['items'],
    },
    theme: 'inbox',
    color: 'person',
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
    breadcrumbs,
    pageId,
  };
};
