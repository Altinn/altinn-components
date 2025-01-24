'use client';
import type { ReactNode } from 'react';
import { LayoutBase, LayoutBody, type LayoutColor, LayoutContent, LayoutSidebar, type LayoutTheme } from '.';
import { Footer, type FooterProps } from '../Footer';
import { Header, type HeaderProps } from '../Header';
import { Menu, type MenuProps } from '../Menu';
import { useRootContext } from '../RootProvider';

interface SidebarProps {
  color?: LayoutColor;
  menu?: MenuProps;
  children?: ReactNode;
  hidden?: boolean;
}

interface ContentProps {
  color?: LayoutColor;
}

export interface LayoutProps {
  color?: LayoutColor;
  theme?: LayoutTheme;
  header?: HeaderProps;
  footer?: FooterProps;
  sidebar?: SidebarProps;
  content?: ContentProps;
  children?: ReactNode;
}

export const Layout = ({ color, theme = 'subtle', header, footer, sidebar, content = {}, children }: LayoutProps) => {
  const { currentId } = useRootContext();
  return (
    <LayoutBase color={color} theme={theme} currentId={currentId}>
      {header && <Header {...header} />}
      <LayoutBody currentId={currentId}>
        {sidebar && (
          <LayoutSidebar hidden={sidebar?.hidden} color={sidebar?.color} {...sidebar}>
            {sidebar?.menu && <Menu {...sidebar?.menu} />}
            {sidebar?.children}
          </LayoutSidebar>
        )}
        <LayoutContent color={content?.color}>{children}</LayoutContent>
      </LayoutBody>
      {footer && <Footer {...footer} />}
    </LayoutBase>
  );
};
