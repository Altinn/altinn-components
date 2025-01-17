import { useLayout, useNavigation } from "..";
import { Layout, type LayoutProps } from "../../../components";
import { sitemap } from "..";
export const CompanyLayout = ({ children }: LayoutProps) => {
  const { currentAccount, pageId, sectionId, articleId, childId, setPageId } = useNavigation();
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
      selected: pageId === id || pageId?.startsWith(id),
      onClick: () => setPageId(id),
    };
  });

  const hiddenSidebar = sectionId === "users" && articleId  || sectionId === "access" && childId

  const layout = {
    theme: "subtle",
    color: "neutral",
    header,
    footer,
    sidebar: {
      hidden: hiddenSidebar && true,
      menu: {
        defaultItemColor: "company",
        defaultItemTheme: "subtle",
        items: menuItems,
      },
    },
  };

  return <Layout {...layout}>{children}</Layout>;
};
