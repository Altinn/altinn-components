import { useLayout, useNavigation } from "..";
import {
  Layout,
  type LayoutColor,
  type LayoutProps,
  type LayoutSidebarProps,
} from "../../../components";
import { sitemap } from "../data";

export const CategoryLayout = ({ children }: LayoutProps) => {
  const { pageId, setPageId } = useNavigation();
  const { header, footer } = useLayout();

  const layout = {
    color: "neutral",
    theme: "default",
    header,
    footer,
  };

  const parents = pageId?.split("/");
  const parentId = parents?.[0];
  const sectionId = parents?.[1];

  if (sectionId) {
    const parent = sitemap.find((item) => item.id === parentId);
    const section = parent?.items?.find((item) => item.id === sectionId);

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
    ]?.map((item) => {
      return {
        ...item,
        selected: pageId === item.id,
        onClick: () => item?.id && setPageId?.(item.id),
      };
    });

    const sidebar = {
      color: "company" as LayoutColor,
      menu: {
        id: "categories",
        defaultIconTheme: "surface",
        items,
      },
    } as LayoutSidebarProps;

    return (
      <Layout {...layout} theme="default" sidebar={sidebar}>
        {children}
      </Layout>
    );
  }

  return <Layout {...layout}>{children}</Layout>;
};
