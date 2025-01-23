import { useLayout, useNavigation } from "..";
import {
  Layout,
  type LayoutColor,
  type LayoutProps,
  type LayoutSidebarProps,
} from "../../../components";
import { sitemap } from "./_data";

export const DocsLayout = ({ children }: LayoutProps) => {
  const { parents, parentId, sectionId, pageId, setPageId } = useNavigation();
  const { header, footer } = useLayout();

  const layout = {
    color: "neutral",
    theme: "default",
    header,
    footer,
  };

  const parent = sitemap.find((item) => item.id === parentId);
  const section = parent?.items?.find((item) => item.id === sectionId);

  if (sectionId) {
    const menuItems =
      section?.items?.map((item) => {
        const id = [parentId, sectionId, item.id].join("/");
        return {
          ...item,
          groupId: "3",
          id,
        };
      }) || [];

    const items = [
      { ...parent, groupId: "1" },
      { ...section, groupId: "2", id: [parentId, section?.id].join("/") },
      ...menuItems,
    ]?.map((item) => ({
      ...item,
      selected: pageId === item.id,
      onClick: () => item?.id && setPageId?.(item.id),
    }));

    const sidebar: LayoutSidebarProps = {
      color: "company" as LayoutColor,
      menu: {
        id: "categories",
        defaultItemTheme: "surface",
        items,
      },
    };

    return (
      <Layout {...layout} theme="default" sidebar={sidebar}>
        {children}
      </Layout>
    );
  }

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

  const sidebar = {
    color: "company" as LayoutColor,
    menu: {
      defaultItemTheme: "surface",
      items: [parent, ...menuItems],
    },
  };

  return (
    <Layout {...layout} sidebar={sidebar}>
      {children}
    </Layout>
  );
};
