import { useLayout, useNavigation } from "..";
import { Layout, type LayoutProps } from "../../../components";
import { sitemap } from "../data";
export const CompanyLayout = ({ children }: LayoutProps) => {
  const { currentAccount, pageId, articleId, setPageId } = useNavigation();
  const { header, footer } = useLayout();

  const parentId = "company";
  const parent = sitemap.find((item) => item.id === parentId);
  const menuItems = parent?.items?.map((item) => {
    const id =
      (parentId === item.id && parentId) || [parentId, item.id].join("/");

    if (id === parentId) {
      return {
        ...item,
        avatar: currentAccount,
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
        defaultItemColor: "company",
        defaultItemTheme: "subtle",
        items: menuItems,
      },
    },
  };

  return <Layout {...layout}>{children}</Layout>;
};
