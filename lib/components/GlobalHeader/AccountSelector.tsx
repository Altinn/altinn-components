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
  fullScreen?: boolean;
  className?: string;
}

export const AccountSelector = ({
  accountMenu,
  currentAccount,
  onSelectAccount,
  fullScreen,
  className,
}: AccountSelectorProps) => {
  const { currentId, toggleId, openId } = useRootContext();
  const isFullScreen = currentId === 'accountFullscreen';

  useEffect(() => {
    if (fullScreen !== undefined && isFullScreen !== fullScreen) {
      toggleId('accountFullscreen');
    }
  }, [fullScreen, isFullScreen, toggleId]);

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
    </div>
  );
};
