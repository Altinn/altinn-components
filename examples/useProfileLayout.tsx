import type { GlobalMenuProps, LayoutProps } from '../lib';
import { footer, header, profileMenu, useAccountMenu } from './';

export const useProfileLayout = (): LayoutProps => {
  const menu: GlobalMenuProps = useAccountMenu(header!.menu!);
  const currentAccount = menu.currentAccount;

  return {
    color: 'neutral',
    theme: 'subtle',
    sidebar: {
      menu: profileMenu,
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
