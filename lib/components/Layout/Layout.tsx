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
  return (
    <LayoutBase theme={theme}>
      {header && <Header account={header?.account} search={header?.search} />}
      <LayoutBody>
        {sidebar && (
          <LayoutSidebar theme={sidebar?.theme}>
            <Menu items={sidebar?.menu} />
          </LayoutSidebar>
        )}
        <LayoutContent theme={content?.theme}>{children}</LayoutContent>
      </LayoutBody>
    </LayoutBase>
  );
};
