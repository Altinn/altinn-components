import { adminMenu, adminMenuItems, useLayout } from "../";
import type { AvatarProps, BreadcrumbsLinkProps, LayoutProps } from "../../lib";

export type AdminSettings = Record<string, string>;

interface AdminLayoutProps {
  accountId?: string;
  account?: AvatarProps;
  pageId?: string;
  breadcrumbs?: BreadcrumbsLinkProps[];
  layout: LayoutProps;
  settings?: AdminSettings;
}

export const useAdminLayout = ({
  accountId = "party:diaspora",
  pageId = "admin",
}): AdminLayoutProps => {
  const baseHref = "/?path=/story/demo-admin";

  const layout = useLayout({ color: "neutral", theme: "subtle", accountId });
  const account = layout?.header?.menu?.currentAccount;

  const menuItems = adminMenuItems.map((item, index) => {
    const href = (index && [baseHref, item.id].join("--")) || baseHref;

    return {
      ...item,
      href,
      icon: (!index && account) || item?.icon,
      selected: item.id === pageId,
    };
  });

  const page = menuItems?.find((item) => item.selected);

  const breadcrumbs: BreadcrumbsLinkProps[] = [
    {
      label: "Forside",
    },
    {
      label: "Seksjon",
    },
    {
      label: (page?.title as string) || "Side",
    },
  ];

  const settings = {
    companyId: "928914038",
    companyType: "Forening/lag/innretning",
    address: "Høyenhallsvingen 16, 0667 Oslo",
    email: "post@diasporabergensis.no",
    phone: "+47 99010203",
  };

  return {
    breadcrumbs,
    account,
    settings,
    layout: {
      ...layout,
      sidebar: {
        menu: {
          ...adminMenu,
          items: menuItems,
        },
      },
    },
  };
};
