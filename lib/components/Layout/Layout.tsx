import type { ReactNode } from 'react';
import { LayoutBase, LayoutBody, LayoutContent, LayoutSidebar, type LayoutTheme } from '.';
import { Header, type HeaderProps } from '../Header';
import { Menu, type MenuProps } from '../Menu';

interface SidebarProps {
  theme?: LayoutTheme;
  menu?: MenuProps;
  children?: ReactNode;
  hidden?: boolean;
}

interface ContentProps {
  theme?: LayoutTheme;
}

export interface LayoutProps {
  theme?: LayoutTheme;
  header?: HeaderProps;
  sidebar: SidebarProps;
  content: ContentProps;
  children: ReactNode;
}

export const Layout = ({ theme = 'global', header, sidebar = {}, content = {}, children }: LayoutProps) => {
  const { menu, ...sideRestProps } = sidebar;
  return (
    <LayoutBase theme={theme}>
      {header && <Header {...header} />}
      <LayoutBody>
        {sidebar && (
          <LayoutSidebar hidden={sidebar?.hidden} theme={sidebar?.theme} {...sideRestProps}>
            {menu && <Menu {...menu} />}
            {sidebar?.children}
            {sidebar?.hidden && 'HIDDEN'}
          </LayoutSidebar>
        )}
        <LayoutContent theme={content?.theme}>{children}</LayoutContent>
      </LayoutBody>
    </LayoutBase>
  );
};
