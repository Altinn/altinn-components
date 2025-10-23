'use client';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';
import { AccountMenuButton } from '../Account/AccountMenuButton.tsx';
import type { AccountMenuProps } from '../Account/index.tsx';
import type { BadgeProps } from '../Badge/index.tsx';
import { DrawerBase, DropdownBase } from '../Dropdown/index.ts';
import { GlobalMenu, GlobalMenuButton, type GlobalMenuProps, type LocaleSwitcherProps } from '../GlobalMenu/index.tsx';
import type { Account } from '../GlobalMenu_old/index.tsx';
import type { MenuProps } from '../Menu/index.ts';
import { useRootContext } from '../RootProvider/index.ts';
import { HeaderGroup, HeaderLogo, type HeaderLogoProps } from './';
import { AccountSelector } from './AccountSelector.tsx';
import { GlobalSearch, type GlobalSearchProps } from './GlobalSearch.tsx';
import { GlobalSearchButton } from './GlobalSearchButton.tsx';
import styles from './globalHeader.module.css';
import { GlobalHeaderBase } from './index.tsx';

import cx from 'classnames';

export interface GlobalHeaderProps {
  globalMenu: GlobalMenuProps;
  /** Use to override globalMenu.menu on desktop */
  desktopMenu?: MenuProps;
  /** Use to override globalMenu.menu on mobile */
  mobileMenu?: MenuProps;
  accountMenu?: AccountMenuProps;
  globalSearch?: GlobalSearchProps;
  locale?: LocaleSwitcherProps;
  currentAccount?: Account;
  badge?: BadgeProps | undefined;
  logo?: HeaderLogoProps;
}

export const GlobalHeader = ({
  globalMenu,
  desktopMenu,
  mobileMenu,
  accountMenu,
  globalSearch,
  locale,
  currentAccount,
  logo = {},
  badge,
}: GlobalHeaderProps) => {
  const { currentId, toggleId, openId, closeAll } = useRootContext();

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

  const accountSelectionOpen = currentId === 'account' || currentId === 'accountFullscreen';

  const isDesktop = useIsDesktop();

  const handleSelectAccount = (id: string) => {
    onToggleAccountMenu();
    accountMenu?.onSelectAccount?.(id);
  };

  return (
    <GlobalHeaderBase currentId={currentId} openBackdrop={currentId === 'menu'} onCloseBackdrop={closeAll}>
      <HeaderLogo {...logo} badge={badge} className={styles.logo} />
      <HeaderGroup>
        {currentAccount && (
          <AccountMenuButton
            currentAccount={currentAccount}
            minimized={!isDesktop}
            onClick={onToggleAccountMenu}
            expanded={currentId === 'account' || currentId === 'accountFullscreen'}
          />
        )}
        {globalSearch && <GlobalSearchButton onClick={ToggleSearch} expanded={currentId === 'search'} />}
        <div className={styles.relative}>
          <GlobalMenuButton onClick={onToggleMenu} expanded={currentId === 'menu'} label={globalMenu?.menuLabel} />
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
          />
        </DrawerBase>
      )}
      {accountMenu && (
        <DrawerBase
          open={accountSelectionOpen}
          className={cx(styles.drawer)}
          dataLayout={isDesktop ? 'desktop' : 'mobile'}
        >
          <AccountSelector
            accountMenu={accountMenu}
            currentAccount={currentAccount}
            onSelectAccount={handleSelectAccount}
            externalFullScreen={!isDesktop ? accountSelectionOpen : undefined}
          />
        </DrawerBase>
      )}
      {globalSearch && (
        <DrawerBase
          open={currentId === 'search'}
          className={cx(styles.drawer)}
          dataLayout={isDesktop ? 'desktop' : 'mobile'}
        >
          <GlobalSearch {...globalSearch} />
        </DrawerBase>
      )}
    </GlobalHeaderBase>
  );
};
