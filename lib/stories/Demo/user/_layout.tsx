import { useLayout, useNavigation } from "..";
import { Layout, type LayoutProps } from "../../../components";
import { sitemap } from "../data";
export const UserLayout = ({ children }: LayoutProps) => {
  const { header, footer } = useLayout();
  const { currentAccount, articleId, pageId, setPageId } = useNavigation();

  const parentId = "user";
  const parent = sitemap.find((item) => item.id === parentId);
  const menuItems = parent?.items?.map((item) => {
    const id =
      (parentId === item.id && parentId) || [parentId, item.id].join("/");

    if (id === parentId) {
      return {
        ...item,
        avatar: { ...currentAccount, type: "person" },
        selected: pageId === id,
        onClick: () => setPageId(id),
      };
    }

    return {
      ...item,
      id,
      selected: pageId === id,
      onClick: () => setPageId(id),
    };
  });

  const layout = {
    theme: "subtle",
    color: "neutral",
    header,
    footer,
    sidebar: {
      hidden: articleId && true,
      menu: {
        defaultItemColor: "person",
        defaultItemTheme: "subtle",
        items: menuItems,
      },
    },
  };

  return <Layout {...layout}>{children}</Layout>;
};
