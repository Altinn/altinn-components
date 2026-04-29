'use client';
import type { ReactNode } from 'react';
import {
  LayoutBase,
  LayoutBody,
  type LayoutColor,
  LayoutContent,
  LayoutGrid,
  LayoutSidebar,
  type LayoutSidebarProps,
  type LayoutTheme,
} from '.';
import { Breadcrumbs, type BreadcrumbsProps } from '../Breadcrumbs';
import { Footer, type FooterProps } from '../Footer';
import { GlobalHeader, type GlobalHeaderProps } from '../GlobalHeader';
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
  header?: GlobalHeaderProps;
  footer?: FooterProps;
  sidebar?: SidebarProps;
  content?: ContentProps;
  children?: ReactNode;
  skipLink?: SkipLinkProps;
  breadcrumbs?: BreadcrumbsProps;
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
  breadcrumbs,
}: LayoutProps) => {
  const { currentId } = useRootContext();

  return (
    <LayoutBase color={color} theme={theme} currentId={currentId}>
      {skipLink && <SkipLink {...skipLink} />}
      {header && <GlobalHeader {...header} />}
      <LayoutGrid currentId={currentId}>
        {breadcrumbs && <Breadcrumbs {...breadcrumbs} />}
        <LayoutBody currentId={currentId}>
          {sidebar && (
            <LayoutSidebar
              sticky={sidebar?.sticky}
              hidden={sidebar?.hidden}
              color={sidebar?.color}
              footer={sidebar?.footer}
            >
              {sidebar?.menu && <Menu {...sidebar?.menu} />}
              {sidebar?.children}
            </LayoutSidebar>
          )}
          <LayoutContent color={content?.color} id="main-content">
            {children}
          </LayoutContent>
        </LayoutBody>
      </LayoutGrid>
      {footer && <Footer {...footer} />}
    </LayoutBase>
  );
};
