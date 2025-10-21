import { CaretDownCircleIcon, CaretUpCircleIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { useEffect } from 'react';
import { AccountMenu, type AccountMenuProps } from '../Account';
import { Button } from '../Button';
import { useRootContext } from '../RootProvider';
import styles from './accountSelector.module.css';

export interface AccountSelectorProps {
  accountMenu: AccountMenuProps;
  currentAccount?: AccountMenuProps['currentAccount'];
  onSelectAccount?: AccountMenuProps['onSelectAccount'];
  /** External control of fullscreen mode. When this flag is true, the account menu cannot be minimized or closed.
   * When the flag is set to false, the account menu cannot be maximized but can be opened and closed.
   * Set it to undefined to allow internal control of fullscreen mode
   */
  externalFullScreen?: boolean;
  className?: string;
}

export const AccountSelector = ({
  accountMenu,
  currentAccount,
  onSelectAccount,
  externalFullScreen,
  className,
}: AccountSelectorProps) => {
  const { currentId, openId, toggleId } = useRootContext();
  const isFullScreen = currentId === 'accountFullscreen';

  useEffect(() => {
    if (externalFullScreen !== undefined && !isFullScreen && externalFullScreen) {
      openId('accountFullscreen');
    } else if (externalFullScreen === false && isFullScreen) {
      toggleId('accountFullscreen');
    }
  }, [externalFullScreen, isFullScreen, openId, toggleId]);

  const toggleExpansion = () => {
    if (isFullScreen) {
      openId('account');
    } else {
      openId('accountFullscreen');
    }
  };

  return (
    <div className={cx(className, styles.accountSelector)}>
      <div className={cx(styles.accountMenu, isFullScreen && styles.fullScreen)}>
        <AccountMenu
          {...accountMenu}
          currentAccount={currentAccount}
          onSelectAccount={onSelectAccount}
          keyboardEvents={true}
        />
      </div>
      {externalFullScreen === undefined && (
        <Button
          icon={
            isFullScreen ? (
              <CaretUpCircleIcon className={styles.btnIcon} aria-hidden="true" />
            ) : (
              <CaretDownCircleIcon className={styles.btnIcon} aria-hidden="true" />
            )
          }
          variant="text"
          onClick={toggleExpansion}
        >
          {isFullScreen ? 'Minimer' : 'Vis i fullskjerm'}
        </Button>
      )}
    </div>
  );
};
