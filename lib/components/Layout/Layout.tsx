import type { ReactNode } from "react";
import {
  LayoutBase,
  LayoutBody,
  LayoutContent,
  LayoutSidebar,
  type LayoutTheme,
} from ".";
import { Header, type HeaderProps } from "../Header";
import { Menu, type MenuItemProps } from "../Menu";

interface SidebarProps {
  theme?: LayoutTheme;
  menu?: MenuItemProps;
}

interface ContentProps {
  theme: LayoutTheme;
}

export interface LayoutProps {
  theme: LayoutTheme;
  header: HeaderProps;
  sidebar: SidebarProps;
  content: ContentProps;
  children: ReactNode;
}

export const Layout = ({
  theme = "global",
  header,
  sidebar,
  content,
  children,
}: LayoutProps) => {

  const { menu, ...sidebarProps } = sidebar;
  const sideMenuItems = menu ? [menu] : [];

  return (
    <LayoutBase theme={theme}>
      {header && <Header search={header?.search} {...header} />}
      <LayoutBody>
        {sidebar && (
          <LayoutSidebar theme={sidebar?.theme} {...sidebarProps}>
            <Menu items={sideMenuItems} />
          </LayoutSidebar>
        )}
        <LayoutContent theme={content?.theme}>{children}</LayoutContent>
      </LayoutBody>
    </LayoutBase>
  );
};
