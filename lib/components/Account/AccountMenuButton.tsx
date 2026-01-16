import { EnterIcon, XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { isValidElement } from 'react';
import { type AccountMenuItemProps, Button, ButtonIcon, ButtonLabel, type ButtonProps, useRootContext } from '..';
import { Avatar, type AvatarProps } from '../Avatar';

import styles from './accountMenuButton.module.css';

export interface AccountMenuButtonProps extends ButtonProps {
  currentAccount?: AccountMenuItemProps;
  className?: string;
  expanded?: boolean;
  /** Display the button as a minimized, mobile-friendly version */
  minimized?: boolean;
  tabIndex?: number;
  loading?: boolean;
}

export const AccountMenuButton = ({
  className,
  currentAccount,
  expanded = false,
  minimized = false,
  loading = false,
  ...buttonProps
}: AccountMenuButtonProps) => {
  const { languageCode } = useRootContext();
  const texts = getTexts(languageCode);

  if (loading) {
    return (
      <Button
        {...buttonProps}
        as={'button'}
        type="button"
        variant="ghost"
        color="company"
        className={cx(styles.button, styles.loading, className)}
        disabled
        aria-label="loading"
      >
        <ButtonIcon className={styles.avatarIcon} icon={<Avatar name="loading" loading className={styles.avatar} />} />
      </Button>
    );
  }

  if (currentAccount) {
    let description = currentAccount.description;
    if (currentAccount.role === 'subunit' && typeof description === 'string' && description) {
      const orgNoDescription = description.split(',');
      description = `${orgNoDescription[0]}, ${texts.subunit}`;
    }
    return (
      <Button
        {...buttonProps}
        as="button"
        type="button"
        variant="ghost"
        color="company"
        className={cx(styles.button, className)}
        aria-label={expanded ? texts.close : currentAccount.name}
        aria-expanded={expanded}
      >
        {!minimized && (
          <ButtonLabel>
            {
              <div className={styles.labelContainer}>
                {currentAccount.name}
                <span className={styles.description}>
                  {typeof description === 'string' ? description : isValidElement(description) ? description : null}
                </span>
              </div>
            }
          </ButtonLabel>
        )}
        {expanded ? (
          <ButtonIcon className={styles.closeIcon} icon={<XMarkIcon className={styles.icon} aria-hidden />} />
        ) : (
          <ButtonIcon
            className={styles.avatarIcon}
            icon={<Avatar {...(currentAccount?.icon as AvatarProps)} className={styles.avatar} />}
          />
        )}
      </Button>
    );
  }

  if (expanded) {
    // If the menu is expanded but no current account is selected, do not allow closing
    return null;
  }

  return (
    <Button
      {...buttonProps}
      as={'button'}
      type="button"
      variant={'ghost'}
      color={'company'}
      aria-label={texts.login}
      className={cx(styles.button, className)}
      aria-expanded={expanded}
    >
      {!minimized && <ButtonLabel>{texts.login}</ButtonLabel>}
      <ButtonIcon className={styles.loginIcon} icon={<EnterIcon className={styles.icon} aria-hidden />} />
    </Button>
  );
};

// TODO: Move to a common texts files when i18next is added
// This is only a temporary solution for providing texts in different languages in a very simple POC
const getTexts = (languageCode: string | undefined) => {
  switch (languageCode) {
    case 'nn':
      return {
        login: 'Logg inn',
        close: 'Lukk kontomeny',
        subunit: 'undereining',
      };
    case 'en':
      return {
        login: 'Log in',
        close: 'Close Account Menu',
        subunit: 'subunit',
      };
    default:
      return {
        login: 'Logg inn',
        close: 'Lukk kontomeny',
        subunit: 'underenhet',
      };
  }
};
