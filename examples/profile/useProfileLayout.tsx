import { footer, profileMenu, profileMenuItems, useLayout } from "../";
import type { BreadcrumbsLinkProps, LayoutProps } from "../../lib";

interface ProfileLayoutProps extends LayoutProps {
  pageId?: string;
  breadcrumbs?: BreadcrumbsLinkProps[];
}

export const useProfileLayout = ({
  pageId = "profile",
}): ProfileLayoutProps => {
  const baseHref = "/?path=/story/demo-profile";

  const menuItems = profileMenuItems.map((item, index) => {
    const href = (index && [baseHref, item.id].join("--")) || baseHref;

    return {
      ...item,
      href,
      selected: item.id === pageId,
    };
  });

  const page = menuItems?.find((item) => item.selected);

  const layout = useLayout({
    color: "neutral",
    theme: "subtle",
    sidebar: {
      menu: { ...profileMenu, items: menuItems },
    },
  });

  const currentAccount = layout.header?.currentAccount;

  const breadcrumbs = [
    {
      label: "Forside",
    },
    {
      label: currentAccount?.name || "Seksjon",
    },
    {
      label: page?.title || "Side",
    },
  ];

  return {
    ...layout,
    breadcrumbs,
    footer,
  };
};
