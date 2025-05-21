import { footer, header, inboxMenu, inboxMenuItems, useAccountMenu } from '../';
import type { GlobalMenuProps, LayoutProps } from '../../lib';

interface InboxLayoutProps extends LayoutProps {
  pageId?: string;
}

export const useInboxLayout = ({ pageId = 'inbox' }): InboxLayoutProps => {
  const menu: GlobalMenuProps = useAccountMenu(header!.menu!);
  const currentAccount = menu.currentAccount;

  const menuItems = inboxMenuItems.map((item) => {
    return {
      ...item,
      selected: item.id === pageId,
    };
  });

  return {
    //    color: "company",
    pageId,
    theme: 'subtle',
    sidebar: {
      menu: { ...inboxMenu, items: menuItems },
    },
    footer,
    header: {
      ...header,
      currentAccount,
      menu: {
        ...menu,
      },
    },
  };
};
