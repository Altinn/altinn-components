import { footer, header, loginMenu, useAccountMenu } from '.';
import type { GlobalMenuProps, LayoutProps } from '../lib';
export const useLayout = ({
  color = 'company',
  theme = 'default',
  accountId,
}: {
  color?: LayoutProps['color'];
  theme?: LayoutProps['theme'];
  accountId?: string;
}): LayoutProps => {
  const menu: GlobalMenuProps = accountId ? useAccountMenu({ ...header!.menu!, accountId }) : loginMenu;

  const currentAccount = menu.currentAccount;

  return {
    color,
    theme,
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
