import { EnterIcon, XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { isValidElement } from 'react';
import { type AccountMenuItemProps, ButtonBase, ButtonIcon, ButtonLabel, type ButtonProps } from '..';
import { Avatar, type AvatarProps } from '../Avatar';

import styles from './accountMenuButton.module.css';

export interface AccountMenuButtonProps extends ButtonProps {
  currentAccount?: AccountMenuItemProps;
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
  minimized = false,
  ...buttonProps
}: AccountMenuButtonProps) => {
  const { login } = getTexts(undefined);
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
                <span className={styles.description}>
                  {typeof currentAccount.description === 'string'
                    ? currentAccount.description
                    : isValidElement(currentAccount.description)
                      ? currentAccount.description
                      : null}
                </span>
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
      {!minimized && <ButtonLabel>{login}</ButtonLabel>}
      <ButtonIcon className={styles.loginIcon} icon={<EnterIcon className={styles.icon} aria-hidden />} />
    </ButtonBase>
  );
};

// TODO: Move to a common texts files when i18next is added
// This is only a temporary solution for providing texts in different languages in a very simple POC
const getTexts = (languageCode: string | undefined) => {
  switch (languageCode) {
    case 'nn':
      return {
        login: 'Logg inn',
      };
    case 'en':
      return {
        login: 'Log in',
      };
    default:
      return {
        login: 'Logg inn',
      };
  }
};
