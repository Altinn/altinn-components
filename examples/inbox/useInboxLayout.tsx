import { inboxMenu, inboxMenuItems, useLayout } from '../';
import type { LayoutProps, MenuProps } from '../../lib';

interface InboxStorybookPageProps {
  [key: string]: string;
}

interface InboxLayoutProps extends LayoutProps {
  pageId?: string;
  items?: MenuProps['items'];
  pages?: InboxStorybookPageProps;
}

export const useInboxLayout = ({ pageId = 'inbox', items = inboxMenuItems, pages = {} }): InboxLayoutProps => {
  const baseHref = '?id=';

  const storybookPages = {
    inbox: 'demo-inbox--inbox-page',
    drafts: 'demo-inbox--drafts-page',
    sent: 'demo-inbox--sent-page',
    bookmarks: 'demo-inbox--bookmarks-page',
    archive: 'demo-inbox--archive-page',
    trash: 'demo-inbox--trash-page',
    ...pages,
  };

  const menuItems = items.map((item) => {
    const storyBookId = storybookPages?.[item.id as keyof typeof storybookPages];
    const href = storyBookId && [baseHref, storyBookId].join('');

    return {
      ...item,
      href,
      selected: item.id === pageId,
    };
  });

  const layout = useLayout({
    theme: 'subtle',
    sidebar: {
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
