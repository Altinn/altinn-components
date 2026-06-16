'use client';
import { type ReactNode, useEffect, useRef, useState } from 'react';
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
import { Banner, type BannerColor, type BannerVariant } from '../Banner';
import { Breadcrumbs, type BreadcrumbsProps } from '../Breadcrumbs';
import { Footer, type FooterProps } from '../Footer';
import { GlobalHeader, type GlobalHeaderProps } from '../GlobalHeader';
import type { SvgElement } from '../Icon';
import { Menu, type MenuProps } from '../Menu';
import { useRootContext } from '../RootProvider';
import { SkipLink, type SkipLinkProps } from '../SkipLink';
import styles from './layoutBase.module.css';

interface SidebarProps extends LayoutSidebarProps {
  menu?: MenuProps;
  /** Accessible label for the sidebar navigation landmark. */
  ariaLabel?: string;
  children?: ReactNode;
}

interface ContentProps {
  color?: LayoutColor;
}

export interface LayoutBannerProps {
  title: string;
  link?: {
    label: string;
    href: string;
  };
  color?: BannerColor;
  variant?: BannerVariant;
  icon?: SvgElement;
}

export interface LayoutProps {
  banner?: LayoutBannerProps;
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
  banner,
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
  const bannerRef = useRef<HTMLDivElement>(null);
  const [bannerHeight, setBannerHeight] = useState(0);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setBannerHeight(entry.borderBoxSize[0]?.blockSize ?? entry.contentRect.height);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <LayoutBase color={color} theme={theme} currentId={currentId} bannerHeight={banner ? bannerHeight : 0}>
      {skipLink && <SkipLink {...skipLink} />}
      {banner && (
        <div
          ref={bannerRef}
          className={
            currentId === 'account' || currentId === 'menu' || currentId === 'locale'
              ? styles.bannerWrapperPinned
              : undefined
          }
          data-color="company"
        >
          <Banner
            title={
              banner.link ? (
                <>
                  {banner.title}{' '}
                  <a href={banner.link.href} target="_blank" rel="noreferrer">
                    {banner.link.label}
                  </a>
                </>
              ) : (
                banner.title
              )
            }
            color={banner.color}
            variant={banner.variant || 'strong'}
            icon={banner.icon}
            sticky={false}
          />
        </div>
      )}
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
              {sidebar?.menu && (
                <nav aria-label={sidebar?.ariaLabel ?? 'Sidebar'}>
                  <Menu {...sidebar?.menu} a11yMode="navigation" />
                </nav>
              )}
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
