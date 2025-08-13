'use client';
import type { ReactNode } from 'react';
import { LayoutBase, LayoutBody, type LayoutColor, LayoutContent, LayoutSidebar, type LayoutTheme } from '.';
import { Footer, type FooterProps } from '../Footer';
import { Header, type HeaderProps } from '../Header';
import { Menu, type MenuProps } from '../Menu';
import { useRootContext } from '../RootProvider';

/**
 * Configuration for the layout sidebar section.
 *
 * The sidebar typically contains navigation menus and can be hidden on smaller screens
 * or when not needed. It supports both menu components and custom content.
 */
interface SidebarProps {
  /** Color theme for the sidebar background and content */
  color?: LayoutColor;
  /** Menu component configuration to display in the sidebar */
  menu?: MenuProps;
  /** Custom content to display in the sidebar alongside or instead of the menu */
  children?: ReactNode;
  /** Whether the sidebar should be hidden from view */
  hidden?: boolean;
}

/**
 * Configuration for the main content area of the layout.
 *
 * The content area is where the primary application content is displayed.
 */
interface ContentProps {
  /** Color theme for the content area background */
  color?: LayoutColor;
}

/**
 * Props for the Layout component.
 *
 * The Layout component provides a complete page structure with header, footer,
 * optional sidebar, and main content area. It's designed to be the root layout
 * component for applications using the Altinn design system.
 *
 * @example
 * ```tsx
 * // Basic layout with header and footer
 * <Layout
 *   header={{
 *     menu: globalMenuConfig,
 *     search: { placeholder: "Search..." }
 *   }}
 *   footer={{
 *     address: "Company Address",
 *     menu: { items: footerLinks }
 *   }}
 * >
 *   <YourAppContent />
 * </Layout>
 *
 * // Layout with sidebar navigation
 * <Layout
 *   color="company"
 *   theme="subtle"
 *   header={headerConfig}
 *   footer={footerConfig}
 *   sidebar={{
 *     menu: sidebarMenuConfig,
 *     color: "neutral"
 *   }}
 * >
 *   <MainContent />
 * </Layout>
 *
 * // Layout with custom sidebar content
 * <Layout
 *   header={headerConfig}
 *   sidebar={{
 *     children: <CustomSidebarContent />
 *   }}
 * >
 *   <AppContent />
 * </Layout>
 * ```
 */
export interface LayoutProps {
  /**
   * Overall color theme for the layout. Affects the color scheme of all layout sections.
   * Available options: 'neutral', 'company', 'person'
   */
  color?: LayoutColor;
  /**
   * Visual theme variant for the layout appearance.
   * - 'default': Standard appearance with full contrast
   * - 'subtle': Softer appearance with reduced contrast
   * @default 'subtle'
   */
  theme?: LayoutTheme;
  /**
   * Configuration for the header section. When provided, renders the Header component
   * with global navigation, search, and account management features.
   */
  header?: HeaderProps;
  /**
   * Configuration for the footer section. When provided, renders the Footer component
   * with contact information and footer links.
   */
  footer?: FooterProps;
  /**
   * Configuration for the sidebar section. When provided, renders a sidebar with
   * navigation menu and/or custom content. Can be hidden when not needed.
   */
  sidebar?: SidebarProps;
  /**
   * Configuration for the main content area styling.
   * @default {}
   */
  content?: ContentProps;
  /**
   * The main application content to display in the layout's content area.
   * This is where your application's pages and components should be rendered.
   */
  children?: ReactNode;
}

/**
 * Layout component providing a complete page structure for Altinn applications.
 *
 * The Layout component is the primary structural component that defines the overall
 * page layout including header, footer, optional sidebar, and main content area.
 * It provides a consistent structure across applications while allowing for
 * customization of individual sections.
 *
 * Layout Structure:
 * ```
 * LayoutBase (root container with theming)
 * ├── Header (global navigation, search, account)
 * ├── LayoutBody (main content container)
 * │   ├── LayoutSidebar (optional navigation sidebar)
 * │   │   ├── Menu (navigation menu)
 * │   │   └── Custom content
 * │   └── LayoutContent (main application content)
 * └── Footer (contact info, footer links)
 * ```
 *
 * Key features:
 * - Responsive design with mobile-first approach
 * - Consistent theming and color schemes
 * - Optional sidebar that can be hidden or omitted
 * - Integration with RootProvider for shared state
 * - Automatic layout adjustments based on content
 * - Accessibility support with proper semantic structure
 * - Support for both menu-based and custom sidebar content
 *
 * The component automatically handles:
 * - Responsive behavior (sidebar hidden on mobile)
 * - Color theme propagation to child components
 * - Layout state management through RootProvider
 * - Proper semantic HTML structure (header, main, aside, footer)
 * - Content area adjustments when sidebar is present/hidden
 *
 * @example
 * ```tsx
 * // Complete application layout
 * import { RootProvider, Layout } from '@altinn/altinn-components';
 *
 * function App() {
 *   return (
 *     <RootProvider>
 *       <Layout
 *         color="company"
 *         theme="subtle"
 *         header={{
 *           menu: {
 *             items: [
 *               { id: 'home', title: 'Home', href: '/' },
 *               { id: 'services', title: 'Services', href: '/services' }
 *             ]
 *           },
 *           search: {
 *             placeholder: 'Search services...',
 *             onSearch: handleSearch
 *           }
 *         }}
 *         sidebar={{
 *           menu: {
 *             items: localNavigationItems
 *           },
 *           color: 'neutral'
 *         }}
 *         footer={{
 *           address: 'Postboks 1382 Vika, 0114 Oslo',
 *           menu: {
 *             items: footerLinks
 *           }
 *         }}
 *       >
 *         <Routes>
 *           <Route path="/" element={<HomePage />} />
 *           <Route path="/services" element={<ServicesPage />} />
 *         </Routes>
 *       </Layout>
 *     </RootProvider>
 *   );
 * }
 *
 * // Minimal layout without sidebar
 * <Layout
 *   header={{ menu: globalMenu }}
 *   footer={{ address: "Contact info" }}
 * >
 *   <SimplePageContent />
 * </Layout>
 *
 * // Layout with hidden sidebar (full-width content)
 * <Layout
 *   header={headerConfig}
 *   sidebar={{
 *     menu: menuConfig,
 *     hidden: true
 *   }}
 * >
 *   <FullWidthContent />
 * </Layout>
 * ```
 *
 * @param props - The props for the Layout component
 * @returns A React element representing the complete page layout
 */
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
