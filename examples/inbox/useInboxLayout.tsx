import { useLayout, inboxMenu, inboxMenuItems } from "../";
import type { LayoutProps } from "../../lib";

interface InboxLayoutProps extends LayoutProps {
  pageId?: string;
}

export const useInboxLayout = ({ pageId = "inbox" }): InboxLayoutProps => {
  const menuItems = inboxMenuItems.map((item) => {
    return {
      ...item,
      selected: item.id === pageId,
    };
  });

  const layout = useLayout({
    theme: "subtle",
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
