'use client';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';
import { AccountMenuButton } from '../Account/AccountMenuButton.tsx';
import type { BadgeProps } from '../Badge';
import { DrawerBase, DropdownBase } from '../Dropdown';
import { GlobalMenu, GlobalMenuButton, type GlobalMenuProps, type LocaleSwitcherProps } from '../GlobalMenu';
import type { MenuProps } from '../Menu';
import { useRootContext } from '../RootProvider';
import { AccountSelector, type AccountSelectorProps } from './AccountSelector.tsx';
import { GlobalSearch, type GlobalSearchProps } from './GlobalSearch.tsx';
import { GlobalSearchButton } from './GlobalSearchButton.tsx';
import { HeaderGroup } from './HeaderGroup.tsx';
import { HeaderLogo, type HeaderLogoProps } from './HeaderLogo.tsx';
import styles from './globalHeader.module.css';
import { GlobalHeaderBase } from './';

import cx from 'classnames';

export interface GlobalHeaderProps {
  globalMenu: GlobalMenuProps;
  /** Use to override globalMenu.menu on desktop */
  desktopMenu?: MenuProps;
  /** Use to override globalMenu.menu on mobile */
  mobileMenu?: MenuProps;
  globalSearch?: GlobalSearchProps;
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
  globalSearch,
  locale,
  accountSelector,
  logo = {},
  badge,
  onLoginClick,
}: GlobalHeaderProps) => {
  const { currentId, toggleId, openId, closeAll } = useRootContext();
  const isDesktop = useIsDesktop();

  const ToggleSearch = () => {
    toggleId('search');
  };

  const onToggleAccountMenu = () => {
    if (currentId === 'account' || currentId === 'accountFullscreen') {
      closeAll();
    } else {
      openId('account');
    }
  };

  const onToggleMenu = () => {
    toggleId('menu');
  };

  const accountSelectionOpen =
    currentId === 'account' || currentId === 'accountFullscreen' || accountSelector?.forceOpenFullScreen;

  const backdropOpen = accountSelectionOpen || currentId === 'menu' || currentId === 'search';

  return (
    <GlobalHeaderBase currentId={currentId} backdropOpen={backdropOpen} onCloseBackdrop={closeAll}>
      <HeaderLogo {...logo} badge={badge} className={styles.logo} />
      <HeaderGroup>
        {accountSelector && (
          <AccountMenuButton
            currentAccount={accountSelector.accountMenu?.currentAccount}
            minimized={!isDesktop}
            onClick={accountSelector.accountMenu?.currentAccount ? onToggleAccountMenu : onLoginClick}
            expanded={accountSelectionOpen}
            loading={accountSelector.loading}
            disabled={accountSelector.forceOpenFullScreen}
          />
        )}
        {globalSearch && (
          <GlobalSearchButton
            onClick={ToggleSearch}
            expanded={currentId === 'search'}
            disabled={accountSelector?.forceOpenFullScreen}
          />
        )}
        <div className={styles.relative}>
          <GlobalMenuButton
            onClick={onToggleMenu}
            expanded={currentId === 'menu'}
            disabled={accountSelector?.forceOpenFullScreen}
            label={globalMenu?.menuLabel}
          />
          {globalMenu && (
            <DropdownBase
              layout="desktop"
              padding
              size="lg"
              placement="right"
              open={currentId === 'menu'}
              className={styles.dropdown}
            >
              <GlobalMenu
                {...globalMenu}
                menu={desktopMenu || globalMenu?.menu}
                onClose={closeAll}
                localeSwitcher={locale}
                isOpen={currentId === 'menu'}
              />
            </DropdownBase>
          )}
        </div>
      </HeaderGroup>
      {globalMenu && (
        <DrawerBase open={currentId === 'menu'} className={styles.drawer}>
          <GlobalMenu
            {...globalMenu}
            menu={mobileMenu || globalMenu?.menu}
            onClose={closeAll}
            localeSwitcher={locale}
            isOpen={currentId === 'menu'}
          />
        </DrawerBase>
      )}
      {accountSelector && (
        <DrawerBase
          open={accountSelectionOpen}
          className={cx(styles.drawer, styles.floating)}
          dataLayout={isDesktop ? 'desktop' : 'mobile'}
        >
          <AccountSelector {...accountSelector} forceOpenFullScreen={accountSelector.forceOpenFullScreen} />
        </DrawerBase>
      )}
      {globalSearch && (
        <DrawerBase
          open={currentId === 'search'}
          className={cx(styles.drawer, styles.floating)}
          dataLayout={isDesktop ? 'desktop' : 'mobile'}
        >
          <GlobalSearch {...globalSearch} />
        </DrawerBase>
      )}
    </GlobalHeaderBase>
  );
};
