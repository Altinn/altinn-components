import { EnterIcon, XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { type Account, ButtonBase, ButtonIcon, ButtonLabel, type ButtonProps } from '..';
import { Avatar, type AvatarProps } from '../Avatar';

import styles from './accountMenuButton.module.css';

export interface AccountMenuButtonProps extends ButtonProps {
  currentAccount?: Account;
  label?: string;
  className?: string;
  expanded?: boolean;
  /** Display the button as a minimized, mobile-friendly version */
  minimized?: boolean;
  tabIndex?: number;
}

export const AccountMenuButton = ({
  className,
  currentAccount,
  expanded,
  label = 'Log inn',
  minimized = false,
  ...buttonProps
}: AccountMenuButtonProps) => {
  if (currentAccount) {
    return (
      <ButtonBase
        {...buttonProps}
        as={'button'}
        type="button"
        variant={'text'}
        color={'accent'}
        className={cx(styles.button, className)}
      >
        {!minimized && (
          <ButtonLabel>
            {
              <div className={styles.labelContainer}>
                {currentAccount.name}
                <span className={styles.description}>{currentAccount.description}</span>
              </div>
            }
          </ButtonLabel>
        )}
        {expanded ? (
          <ButtonIcon
            className={styles.closeIcon}
            icon={<XMarkIcon className={styles.icon} aria-label="Close Icon" />}
          />
        ) : (
          <ButtonIcon
            className={styles.avatarIcon}
            icon={<Avatar {...(currentAccount?.icon as AvatarProps)} className={styles.avatar} />}
          />
        )}
      </ButtonBase>
    );
  }

  return (
    <ButtonBase
      {...buttonProps}
      as={'button'}
      type="button"
      variant={'text'}
      color={'accent'}
      className={cx(styles.button, className)}
    >
      {!minimized && <ButtonLabel>{label}</ButtonLabel>}
      <ButtonIcon className={styles.loginIcon} icon={<EnterIcon className={styles.icon} aria-hidden />} />
    </ButtonBase>
  );
};
