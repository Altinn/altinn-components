'use client';
import { useState } from 'react';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';
import { AccountSelector, type AccountSelectorProps } from '../AccountSelector';
import type { BadgeProps } from '../Badge';
import { GlobalMenu, type GlobalMenuProps, type LocaleSwitcherProps } from '../GlobalMenu';
import type { MenuProps } from '../Menu';
import { useRootContext } from '../RootProvider';
import { GlobalAccountButton } from './GlobalAccountButton.tsx';
import { GlobalMenuButton } from './GlobalMenuButton';
import { HeaderDrawer } from './HeaderDrawer';
import { HeaderDropdown } from './HeaderDropdown';
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

  const [expanded, setExpanded] = useState(false);

  const isDesktop = useIsDesktop();

  return (
    <header className={styles.header} data-current-id={currentId}>
      <div className={styles.container}>
        <HeaderLogo {...logo} badge={badge} className={styles.logo} />
        <nav className={styles.nav}>
          {accountSelector && (
            <>
              <GlobalAccountButton
                currentAccount={accountSelector.accountMenu?.currentAccount}
                onClick={accountSelector.accountMenu?.currentAccount ? onToggleAccountMenu : onLoginClick}
                expanded={accountSelectionOpen}
                loading={accountSelector.loading}
                disabled={accountSelector.forceOpenFullScreen}
              />
              <HeaderDrawer
                id="header-account"
                open={accountSelectionOpen}
                onClose={closeAll}
                closedBy={accountSelector?.forceOpenFullScreen ? 'none' : 'any'}
                expanded={accountSelector?.forceOpenFullScreen || expanded}
                onToggle={() => setExpanded(!expanded)}
              >
                <AccountSelector {...accountSelector} forceOpenFullScreen={accountSelector.forceOpenFullScreen} />
              </HeaderDrawer>
            </>
          )}
          <HeaderDropdown
            id="header-menu"
            open={currentId === 'menu'}
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
          </HeaderDropdown>
        </nav>
      </div>
    </header>
  );
};
