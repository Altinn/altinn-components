import { ChevronUpDownIcon, EnterIcon, XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { isValidElement } from 'react';
import { type AccountMenuItemProps, Button, type ButtonProps, useRootContext } from '..';
import { Avatar, type AvatarProps } from '../Avatar';

import styles from './accountSelectorButton.module.css';

export interface AccountSelectorButtonProps extends ButtonProps {
  currentAccount?: AccountMenuItemProps;
  className?: string;
  expanded?: boolean;
  /** Display the button as a minimized, mobile-friendly version */
  minimized?: boolean;
  tabIndex?: number;
  loading?: boolean;
}

export const AccountSelectorButton = ({
  className,
  currentAccount,
  expanded = false,
  minimized = false,
  loading = false,
  ...buttonProps
}: AccountSelectorButtonProps) => {
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
        <Avatar name="loading" loading className={styles.avatar} />
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
        <Avatar {...(currentAccount?.icon as AvatarProps)} className={styles.avatar} />
        {!minimized && (
          <div className={styles.label}>
            <span className={styles.title}>{currentAccount.name}</span>
            <span className={styles.description}>
              {typeof description === 'string' ? description : isValidElement(description) ? description : null}
            </span>
          </div>
        )}
        {expanded ? (
          <XMarkIcon className={styles.icon} aria-hidden />
        ) : (
          <ChevronUpDownIcon className={styles.icon} aria-hidden />
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
      as="button"
      type="button"
      variant="ghost"
      color="company"
      aria-label={texts.login}
      className={cx(styles.button, styles.loginButton, className)}
      aria-expanded={expanded}
    >
      {!minimized && <span className={styles.label}>{texts.login}</span>}
      <EnterIcon className={styles.icon} aria-hidden />
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
