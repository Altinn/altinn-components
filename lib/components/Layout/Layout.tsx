'use client';
import type { ReactNode } from 'react';
import {
  LayoutBase,
  LayoutBody,
  type LayoutColor,
  LayoutContent,
  LayoutSidebar,
  type LayoutSidebarProps,
  type LayoutTheme,
} from '.';
import { Footer, type FooterProps } from '../Footer';
import { Header, type HeaderProps } from '../Header';
import { Menu, type MenuProps } from '../Menu';
import { useRootContext } from '../RootProvider';
import { SkipLink, type SkipLinkProps } from '../SkipLink';

interface SidebarProps extends LayoutSidebarProps {
  menu?: MenuProps;
  children?: ReactNode;
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
  skipLink?: SkipLinkProps;
}

export const Layout = ({
  color,
  theme = 'subtle',
  header,
  footer,
  sidebar,
  content = {},
  children,
  skipLink,
}: LayoutProps) => {
  const { currentId } = useRootContext();
  return (
    <LayoutBase color={color} theme={theme} currentId={currentId}>
      {skipLink && <SkipLink {...skipLink} />}
      {header && <Header {...header} />}
      <LayoutBody currentId={currentId}>
        {sidebar && (
          <LayoutSidebar hidden={sidebar?.hidden} color={sidebar?.color} {...sidebar}>
            {sidebar?.menu && <Menu {...sidebar?.menu} />}
            {sidebar?.children}
          </LayoutSidebar>
        )}
        <LayoutContent color={content?.color} id="main-content">
          {children}
        </LayoutContent>
      </LayoutBody>
      {footer && <Footer {...footer} />}
    </LayoutBase>
  );
};
