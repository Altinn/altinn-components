import { inboxMenu, inboxMenuItems, useLayout } from '../';
import type { LayoutProps } from '../../lib';

interface InboxLayoutProps extends LayoutProps {
  pageId?: string;
}

export const useInboxLayout = ({ pageId = 'inbox' }): InboxLayoutProps => {
  const baseHref = '?id=';

  const storybookPages = {
    inbox: 'demo-inbox--inbox-page',
    drafts: 'demo-inbox--drafts-page',
    sent: 'demo-inbox--sent-page',
    bookmarks: 'demo-inbox--bookmarks-page',
    archive: 'demo-inbox--archive-page',
    trash: 'demo-inbox--trash-page',
  };

  const menuItems = inboxMenuItems.map((item) => {
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
