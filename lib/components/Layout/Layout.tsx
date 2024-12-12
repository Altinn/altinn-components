'use client';
import type { ReactNode } from 'react';
import { LayoutBase, LayoutBody, LayoutContent, LayoutSidebar, type LayoutTheme } from '.';
import { Footer, type FooterProps } from '../Footer';
import { Header, type HeaderProps } from '../Header';
import { Menu, type MenuProps } from '../Menu';
import { useRootContext } from '../RootProvider';

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
  footer?: FooterProps;
  sidebar?: SidebarProps;
  content?: ContentProps;
  children?: ReactNode;
}

export const Layout = ({ theme = 'global', header, footer, sidebar = {}, content = {}, children }: LayoutProps) => {
  const { currentId } = useRootContext();
  const { menu, ...sideRestProps } = sidebar;
  return (
    <LayoutBase theme={theme} currentId={currentId}>
      {header && <Header {...header} />}
      <LayoutBody currentId={currentId}>
        {sidebar && (
          <LayoutSidebar hidden={sidebar?.hidden} theme={sidebar?.theme} {...sideRestProps}>
            {menu && <Menu {...menu} />}
            {sidebar?.children}
          </LayoutSidebar>
        )}
        <LayoutContent theme={content?.theme}>{children}</LayoutContent>
      </LayoutBody>
      {footer && <Footer {...footer} />}
    </LayoutBase>
  );
};
