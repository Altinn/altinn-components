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
  header?: HeaderProps | GlobalHeaderProps;
  footer?: FooterProps;
  sidebar?: SidebarProps;
  content?: ContentProps;
  children?: ReactNode;
  skipLink?: SkipLinkProps;
  useGlobalHeader?: boolean; // TODO: Remove when new header is default
  breadcrumbs?: BreadcrumbsProps['items'];
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
  useGlobalHeader = false,
}: LayoutProps) => {
  const { currentId } = useRootContext();

  return (
    <LayoutBase color={color} theme={currentId === 'accountFullscreen' ? 'default' : theme} currentId={currentId}>
      {skipLink && <SkipLink {...skipLink} />}
      {header && (useGlobalHeader ? <GlobalHeader {...header} /> : <Header {...header} />)}
      <LayoutGrid currentId={currentId}>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
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
