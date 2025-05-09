import { footer, header, profileMenu, profileMenuItems, useAccountMenu } from '../';
import type { BreadcrumbsLinkProps, GlobalMenuProps, LayoutProps } from '../../lib';

interface ProfileLayoutProps extends LayoutProps {
  pageId?: string;
  breadcrumbs?: BreadcrumbsLinkProps[];
}

export const useProfileLayout = ({ pageId = 'profile' }): ProfileLayoutProps => {
  const menu: GlobalMenuProps = useAccountMenu(header!.menu!);
  const currentAccount = menu.currentAccount;

  const baseHref = '/?path=/story/demo-profile';

  const menuItems = profileMenuItems.map((item, index) => {
    const href = (index && [baseHref, item.id].join('--')) || baseHref;

    return {
      ...item,
      href,
      selected: item.id === pageId,
    };
  });

  const page = menuItems?.find((item) => item.selected);

  const breadcrumbs = [
    {
      label: 'Forside',
    },
    {
      label: currentAccount?.name || 'Seksjon',
    },
    {
      label: page?.title || 'Side',
    },
  ];

  return {
    breadcrumbs,
    color: 'neutral',
    theme: 'subtle',
    sidebar: {
      menu: { ...profileMenu, items: menuItems },
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
