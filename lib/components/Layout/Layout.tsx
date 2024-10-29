import type { ReactNode } from "react";
import {
  LayoutBase,
  LayoutBody,
  LayoutContent,
  LayoutSidebar,
  type LayoutTheme,
} from ".";
import { Header, type HeaderProps } from "../Header";
import { Menu, type MenuProps } from "../Menu";

interface SidebarProps {
  theme?: LayoutTheme;
  menu?: MenuProps;
  children?: ReactNode;
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
  return (
    <LayoutBase theme={theme}>
      {header && <Header search={header?.search} {...header} />}
      <LayoutBody>
        {sidebar && (
          <LayoutSidebar theme={sidebar?.theme} {...sidebarProps}>
            {menu && <Menu {...menu} />}
            {sidebar?.children}
          </LayoutSidebar>
        )}
        <LayoutContent theme={content?.theme}>{children}</LayoutContent>
      </LayoutBody>
    </LayoutBase>
  );
};
