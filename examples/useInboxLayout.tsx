import type { GlobalMenuProps, LayoutProps } from '../lib';
import { footer, header, inboxMenu, useAccountMenu } from './';
export const useInboxLayout = (): LayoutProps => {
  const menu: GlobalMenuProps = useAccountMenu(header!.menu!);
  const currentAccount = menu.currentAccount;

  return {
    color: 'company',
    theme: 'subtle',
    sidebar: {
      menu: inboxMenu,
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
