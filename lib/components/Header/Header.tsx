'use client';
import type { BadgeProps } from '../Badge';
import { DrawerBase, DropdownBase } from '../Dropdown';
import { GlobalMenu, GlobalMenuButton, type GlobalMenuProps } from '../GlobalMenu';
import type { Account } from '../GlobalMenu';
import { useRootContext } from '../RootProvider';
import { Searchbar, type SearchbarProps } from '../Searchbar';
import { LocaleButton, LocaleSwitcher, type LocaleSwitcherProps } from './';
import { HeaderBase } from './HeaderBase';
import { HeaderGroup } from './HeaderGroup';
import { HeaderLogo, type HeaderLogoProps } from './HeaderLogo';
import { HeaderSearch } from './HeaderSearch';

import { useIsDesktop } from '../../hooks/useIsDesktop.ts';
import styles from './header.module.css';

/**
 * Props for the Header component.
 *
 * The Header component provides the main navigation and branding area for Altinn applications.
 * It includes global navigation, search functionality, account management, and locale switching.
 * The header is responsive and adapts to different screen sizes with mobile-friendly interactions.
 *
 * @example
 * ```tsx
 * // Basic header with menu and search
 * <Header
 *   menu={{
 *     items: [
 *       { id: 'home', title: 'Home', href: '/' },
 *       { id: 'services', title: 'Services', href: '/services' }
 *     ],
 *     menuLabel: 'Main menu'
 *   }}
 *   search={{
 *     name: 'global-search',
 *     placeholder: 'Search in Altinn...'
 *   }}
 * />
 *
 * // Header with account management and locale switching
 * <Header
 *   menu={{
 *     items: navigationItems,
 *     accountMenu: {
 *       items: userAccounts
 *     },
 *     logoutButton: {
 *       onClick: handleLogout
 *     }
 *   }}
 *   currentAccount={{
 *     id: 'user123',
 *     name: 'John Doe',
 *     type: 'person'
 *   }}
 *   locale={{
 *     options: [
 *       { id: 'nb', title: 'Norsk bokmål' },
 *       { id: 'en', title: 'English' }
 *     ]
 *   }}
 *   badge={{
 *     label: 3,
 *     color: 'danger'
 *   }}
 * />
 *
 * // Custom logo header
 * <Header
 *   logo={{
 *     title: 'Custom App',
 *     href: '/dashboard'
 *   }}
 *   menu={menuConfig}
 * />
 * ```
 */
export interface HeaderProps {
  /**
   * Configuration for the global navigation menu. Required prop that defines
   * the main navigation items, account management, and menu behavior.
   */
  menu: GlobalMenuProps;
  /**
   * Configuration for locale/language switching functionality. When provided,
   * displays a locale switcher button that allows users to change the application language.
   */
  locale?: LocaleSwitcherProps;
  /**
   * Configuration for the search functionality. When provided, displays a search
   * bar that can include autocomplete and custom search behavior.
   */
  search?: SearchbarProps;
  /**
   * The currently active user account. Used to display account information
   * in the global menu and affects account-related UI states.
   */
  currentAccount?: Account;
  /**
   * Badge to display on the global menu button. Typically used for notifications,
   * unread counts, or status indicators.
   */
  badge?: BadgeProps | undefined;
  /**
   * Configuration for the header logo/branding. Controls the logo appearance,
   * title text, and click behavior.
   * @default {}
   */
  logo?: HeaderLogoProps;
}

/**
 * Header component providing global navigation and application branding.
 *
 * The Header component serves as the primary navigation and branding area for Altinn applications.
 * It provides a consistent user experience across different applications while supporting
 * customization for specific needs. The header is fully responsive and includes mobile-optimized
 * interactions with drawer-based navigation on smaller screens.
 *
 * Key features:
 * - Global navigation menu with account management
 * - Integrated search functionality with autocomplete support
 * - Locale/language switching capabilities
 * - Notification badges and status indicators
 * - Responsive design with mobile drawer navigation
 * - Account switching for users with multiple accounts
 * - Customizable logo and branding
 * - Accessibility support with proper ARIA attributes
 *
 * Layout structure:
 * ```
 * HeaderBase
 * ├── HeaderLogo (branding/logo)
 * ├── HeaderGroup (navigation controls)
 * │   ├── LocaleButton (language switcher)
 * │   └── GlobalMenuButton (main menu + account)
 * ├── HeaderSearch (search functionality)
 * └── Mobile drawers (for small screens)
 *     ├── LocaleSwitcher drawer
 *     └── GlobalMenu drawer
 * ```
 *
 * The component integrates with RootProvider for state management and supports
 * multiple interaction modes:
 * - Desktop: Dropdown-based interactions
 * - Mobile: Full-screen drawer interactions
 * - Search: Expandable search overlay
 *
 * @example
 * ```tsx
 * // Complete header setup for an application
 * const headerConfig = {
 *   menu: {
 *     items: [
 *       {
 *         id: 'inbox',
 *         title: 'Inbox',
 *         href: '/inbox',
 *         icon: InboxIcon
 *       },
 *       {
 *         id: 'profile',
 *         title: 'Profile',
 *         href: '/profile',
 *         icon: UserIcon
 *       }
 *     ],
 *     accountMenu: {
 *       items: userAccounts,
 *       title: 'Switch account'
 *     },
 *     logoutButton: {
 *       onClick: () => signOut(),
 *       title: 'Sign out'
 *     },
 *     menuLabel: 'Main navigation'
 *   },
 *   search: {
 *     name: 'global-search',
 *     placeholder: 'Search services and content...',
 *     onEnter: handleSearch,
 *     autocomplete: {
 *       items: searchSuggestions
 *     }
 *   },
 *   locale: {
 *     title: 'Choose language',
 *     options: [
 *       { id: 'nb', title: 'Norsk bokmål' },
 *       { id: 'nn', title: 'Norsk nynorsk' },
 *       { id: 'en', title: 'English' }
 *     ],
 *     onChange: handleLocaleChange
 *   },
 *   currentAccount: {
 *     id: 'user-123',
 *     name: 'Jane Doe',
 *     type: 'person',
 *     description: 'Personal account'
 *   },
 *   badge: {
 *     label: unreadCount,
 *     color: 'danger',
 *     variant: 'base'
 *   }
 * };
 *
 * <Header {...headerConfig} />
 *
 * // Minimal header for simple applications
 * <Header
 *   menu={{
 *     items: basicNavItems,
 *     menuLabel: 'Navigation'
 *   }}
 * />
 * ```
 *
 * @param props - The props for the Header component
 * @returns A React element representing the application header
 */
export const Header = ({ menu, locale, search, currentAccount, logo = {}, badge }: HeaderProps) => {
  const { currentId, toggleId, openId, closeAll } = useRootContext();

  const onSearchFocus = () => {
    openId('search');
  };

  const onSearchClose = () => {
    toggleId('search');
  };

  const onToggleMenu = () => {
    toggleId('menu');
  };

  const onToggleLocale = () => {
    toggleId('locale');
  };

  const isDesktop = useIsDesktop();

  return (
    <HeaderBase
      currentId={currentId}
      open={currentId === 'search' || currentId === 'menu' || currentId === 'locale'}
      onClose={closeAll}
    >
      <HeaderLogo {...logo} className={styles.logo} />
      {search && isDesktop && (
        <HeaderSearch expanded={currentId === 'search'}>
          <Searchbar {...search} expanded={currentId === 'search'} onClose={onSearchClose} onFocus={onSearchFocus} />
        </HeaderSearch>
      )}
      <HeaderGroup>
        {locale && (
          <div className={styles.relative}>
            <LocaleButton onClick={onToggleLocale} expanded={currentId === 'locale'} />
          </div>
        )}
        <div className={styles.relative}>
          <GlobalMenuButton
            badge={badge}
            currentAccount={currentAccount}
            onClick={onToggleMenu}
            expanded={currentId === 'menu'}
            label={menu?.menuLabel}
          />
          {locale && (
            <DropdownBase
              layout="desktop"
              padding
              placement="right"
              open={currentId === 'locale'}
              className={styles.dropdown}
            >
              <LocaleSwitcher {...locale} />
            </DropdownBase>
          )}
          {menu && (
            <DropdownBase
              layout="desktop"
              padding
              placement="right"
              open={currentId === 'menu'}
              className={styles.dropdown}
            >
              <GlobalMenu {...menu} currentAccount={currentAccount} onClose={closeAll} />
            </DropdownBase>
          )}
        </div>
      </HeaderGroup>
      {search && !isDesktop && (
        <HeaderSearch expanded={currentId === 'search'}>
          <Searchbar {...search} expanded={currentId === 'search'} onClose={onSearchClose} onFocus={onSearchFocus} />
        </HeaderSearch>
      )}
      {locale && (
        <DrawerBase open={currentId === 'locale'} className={styles.drawer}>
          <LocaleSwitcher {...locale} />
        </DrawerBase>
      )}
      {menu && (
        <DrawerBase open={currentId === 'menu'} className={styles.drawer}>
          <GlobalMenu {...menu} currentAccount={currentAccount} onClose={closeAll} />
        </DrawerBase>
      )}
    </HeaderBase>
  );
};
