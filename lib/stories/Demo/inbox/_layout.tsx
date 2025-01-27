import { useBulk, useLayout, useNavigation } from "..";
import { Layout, LayoutAction, type LayoutProps } from "../../../components";
import { dialogMenuItems, sitemap } from "../data";
export const InboxLayout = ({ children }: LayoutProps) => {
  const { currentAccount, pageId, setPageId } = useNavigation();
  const { header, footer } = useLayout();
  const { count, unselectAll } = useBulk();

  const parents = pageId?.split("/");
  const parentId = parents?.[0];
  const sectionId = parents?.[1] || "inbox";

  const parent = sitemap.find((item) => item.id === parentId);

  const menuItems =
    parent?.items?.map((item) => {
      const id = [parentId, item.id].join("/");

      return {
        ...item,
        id,
        selected: item.id?.startsWith(sectionId),
        onClick: () => setPageId?.(id),
      };
    }) || [];

  const layout = {
    theme: "subtle",
    color: count ? "neutral" : currentAccount?.type || "neutral",
    header,
    footer,
    sidebar: {
      hidden: count && true,
      menu: {
        defaultIconTheme: "default",
        items: menuItems,
      },
    },
  };

  return (
    <Layout {...layout}>
      <LayoutAction
        title={count + " selected"}
        hidden={!count}
        onDismiss={unselectAll}
        menu={{ items: dialogMenuItems }}
      >
        {children}
      </LayoutAction>
    </Layout>
  );
};
