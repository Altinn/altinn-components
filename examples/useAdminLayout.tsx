import type { GlobalMenuProps, LayoutProps } from '../lib';
import { adminMenu, footer, header, useAccountMenu } from './';
export const useAdminLayout = (): LayoutProps => {
  const menu: GlobalMenuProps = useAccountMenu(header!.menu!);
  const currentAccount = menu.currentAccount;

  return {
    color: 'company',
    theme: 'subtle',
    sidebar: {
      menu: adminMenu,
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
