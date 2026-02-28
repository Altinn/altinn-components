'use client';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';
import type { BadgeProps } from '../Badge';
import { Dropdown } from '../Dropdown';
import { GlobalMenu, type GlobalMenuProps, type LocaleSwitcherProps } from '../GlobalMenu';
import type { MenuProps } from '../Menu';
import { useRootContext } from '../RootProvider';
import { AccountSelector, type AccountSelectorProps } from './AccountSelector.tsx';
import { AccountSelectorButton } from './AccountSelectorButton.tsx';
import { GlobalMenuButton } from './GlobalMenuButton';
import { HeaderLogo, type HeaderLogoProps } from './HeaderLogo.tsx';
import styles from './globalHeader.module.css';

export interface GlobalHeaderProps {
  globalMenu: GlobalMenuProps;
  /** Use to override globalMenu.menu on desktop */
  desktopMenu?: MenuProps;
  /** Use to override globalMenu.menu on mobile */
  mobileMenu?: MenuProps;
  locale?: LocaleSwitcherProps;
  accountSelector?: AccountSelectorProps;
  badge?: BadgeProps | undefined;
  logo?: HeaderLogoProps;
  onLoginClick?: () => void;
}

export const GlobalHeader = ({
  globalMenu,
  desktopMenu,
  mobileMenu,
  locale,
  accountSelector,
  logo = {},
  badge,
  onLoginClick,
}: GlobalHeaderProps) => {
  const { currentId, toggleId, closeAll } = useRootContext();

  const onToggleAccountMenu = () => {
    toggleId('account');
  };

  const onToggleMenu = () => {
    toggleId('menu');
  };

  const accountSelectionOpen = currentId === 'account' || accountSelector?.forceOpenFullScreen || false;

  const isDesktop = useIsDesktop();

  return (
    <header className={styles.header} data-current-id={currentId}>
      <div className={styles.container}>
        <HeaderLogo {...logo} badge={badge} className={styles.logo} />
        <nav className={styles.nav}>
          {accountSelector && (
            <Dropdown
              className={styles.dropdown}
              backdrop={false}
              id="header-account"
              open={accountSelectionOpen}
              variant="drawer"
              placement="right"
              onClose={closeAll}
              trigger={
                <AccountSelectorButton
                  currentAccount={accountSelector.accountMenu?.currentAccount}
                  minimized={!isDesktop}
                  onClick={accountSelector.accountMenu?.currentAccount ? onToggleAccountMenu : onLoginClick}
                  expanded={accountSelectionOpen}
                  loading={accountSelector.loading}
                  disabled={accountSelector.forceOpenFullScreen}
                />
              }
            >
              <AccountSelector {...accountSelector} forceOpenFullScreen={accountSelector.forceOpenFullScreen} />
            </Dropdown>
          )}
          <Dropdown
            className={styles.dropdown}
            id="header-menu"
            open={currentId === 'menu'}
            variant="drawer-dropdown"
            placement="right"
            size="md"
            onClose={closeAll}
            trigger={
              <GlobalMenuButton
                onClick={onToggleMenu}
                expanded={currentId === 'menu'}
                disabled={accountSelector?.forceOpenFullScreen}
                label={globalMenu?.menuLabel}
              />
            }
          >
            <GlobalMenu
              {...globalMenu}
              menu={isDesktop ? desktopMenu || globalMenu?.menu : mobileMenu || globalMenu?.menu}
              onClose={closeAll}
              localeSwitcher={locale}
              isOpen={currentId === 'menu'}
            />
          </Dropdown>
        </nav>
      </div>
    </header>
  );
};
