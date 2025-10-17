'use client';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';
import { AccountMenuButton } from '../Account/AccountMenuButton.tsx';
import type { BadgeProps } from '../Badge/index.tsx';
import { DrawerBase, DropdownBase } from '../Dropdown/index.ts';
import { GlobalMenu, GlobalMenuButton, type GlobalMenuProps } from '../GlobalMenu/index.tsx';
import type { Account } from '../GlobalMenu_old/index.tsx';
import { useRootContext } from '../RootProvider/index.ts';
import {
  AccountMenu,
  type AccountMenuProps,
  HeaderGroup,
  HeaderLogo,
  type HeaderLogoProps,
  type MenuProps,
} from '../index.ts';
import styles from './globalHeader.module.css';
import { GlobalHeaderBase, LocaleSwitcher, type LocaleSwitcherProps } from './index.tsx';

export interface GlobalHeaderProps {
  globalMenu: GlobalMenuProps;
  /** Use to override globalMenu.menu on desktop */
  desktopMenu?: MenuProps;
  /** Use to override globalMenu.menu on mobile */
  mobileMenu?: MenuProps;
  accountMenu?: AccountMenuProps;
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
  locale,
  currentAccount,
  logo = {},
  badge,
}: GlobalHeaderProps) => {
  const { currentId, toggleId, openId, closeAll } = useRootContext();

  const onSearchFocus = () => {
    openId('search');
  };

  const onSearchClose = () => {
    toggleId('search');
  };

  const onToggleAccountMenu = () => {
    toggleId('account');
  };

  const onToggleMenu = () => {
    toggleId('menu');
  };

  const isDesktop = useIsDesktop();

  const handleSelectAccount = (id: string) => {
    onToggleAccountMenu();
    accountMenu?.onSelectAccount?.(id);
  };

  return (
    <GlobalHeaderBase currentId={currentId}>
      <HeaderLogo {...logo} badge={badge} className={styles.logo} />
      <HeaderGroup>
        {currentAccount && (
          <AccountMenuButton
            currentAccount={currentAccount}
            minimized={!isDesktop}
            onClick={onToggleAccountMenu}
            expanded={currentId === 'account'}
          />
        )}
        {locale && isDesktop && <LocaleSwitcher {...locale} />}
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
              <GlobalMenu {...globalMenu} menu={desktopMenu || globalMenu?.menu} onClose={closeAll} />
            </DropdownBase>
          )}
        </div>
      </HeaderGroup>
      {globalMenu && (
        <DrawerBase open={currentId === 'menu'} className={styles.drawer}>
          <GlobalMenu {...globalMenu} menu={mobileMenu || globalMenu?.menu} onClose={closeAll} />
        </DrawerBase>
      )}
      {globalMenu && (
        <DrawerBase
          open={currentId === 'account'}
          className={styles.drawer}
          dataLayout={isDesktop ? 'desktop' : 'mobile'}
        >
          {accountMenu && (
            <AccountMenu {...accountMenu} currentAccount={currentAccount} onSelectAccount={handleSelectAccount} />
          )}
        </DrawerBase>
      )}
    </GlobalHeaderBase>
  );
};
