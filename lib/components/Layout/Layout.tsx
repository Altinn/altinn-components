import { LayoutBase, LayoutBody, LayoutContent, LayoutSidebar } from ".";
import { Header } from "../Header";
import { Menu } from "../Menu";
import { Toolbar } from "../Toolbar";

export const Layout = ({
  theme = "global",
  menu = [],
  sidebarTheme,
  contentTheme,
  toolbar = {},
}: LayoutProps) => {
  return (
    <LayoutBase theme={theme}>
      <Header />
      <LayoutBody>
        <LayoutSidebar theme={sidebarTheme}>
          <Menu items={menu} />
        </LayoutSidebar>
        <LayoutContent theme={contentTheme}>
          <Toolbar menu={toolbar?.menu} filters={toolbar?.filters} />
        </LayoutContent>
      </LayoutBody>
    </LayoutBase>
  );
};
