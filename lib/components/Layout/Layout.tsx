import { LayoutBase, LayoutBody, LayoutContent, LayoutSidebar } from ".";
import { Header } from "../Header";
import { Menu } from "../Menu";
import { Toolbar } from "../Toolbar";

export const Layout = ({
  theme,
  menu = [],
  menuTheme,
  menuColor,
  toolbar = {},
}: LayoutProps) => {
  return (
    <LayoutBase theme={theme}>
      <Header />
      <LayoutBody>
        <LayoutSidebar>
          <Menu items={menu} theme={menuTheme} color={menuColor} />
        </LayoutSidebar>
        <LayoutContent>
          <Toolbar menu={toolbar?.menu} filters={toolbar?.filters} />
        </LayoutContent>
      </LayoutBody>
    </LayoutBase>
  );
};
