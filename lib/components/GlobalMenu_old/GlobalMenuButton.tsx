import { PadlockLockedIcon, XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import type { ElementType } from 'react';
import { type Account, Button, ButtonIcon, ButtonLabel, type ButtonProps } from '..';
import { Avatar, type AvatarProps } from '../Avatar';
import { Badge, type BadgeProps } from '../Badge';

import styles from './globalMenuButton.module.css';

export interface GlobalMenuButtonProps_old extends ButtonProps {
  currentAccount?: Account;
  label?: string;
  as?: ElementType;
  className?: string;
  expanded?: boolean;
  badge?: BadgeProps | undefined;
  tabIndex?: number;
}

export const GlobalMenuButton_old = ({
  className,
  as = 'button',
  color = 'company',
  variant = 'solid',
  currentAccount,
  expanded,
  label = 'Menu',
  badge,
  ...buttonProps
}: GlobalMenuButtonProps_old) => {
  if (expanded) {
    return (
      <Button {...buttonProps} as={as} variant={variant} color={color} className={cx(styles.button, className)}>
        <ButtonLabel>{label}</ButtonLabel>
        <ButtonIcon className={styles.closeIcon} icon={<XMarkIcon className={styles.icon} aria-label="Close Icon" />} />
        {badge && <Badge {...badge} className={styles.badge} />}
      </Button>
    );
  }

  if (currentAccount) {
    return (
      <Button {...buttonProps} as={as} variant={variant} color={color} className={cx(styles.button, className)}>
        <ButtonLabel>{label}</ButtonLabel>
        <ButtonIcon
          className={styles.avatarIcon}
          icon={<Avatar {...(currentAccount?.icon as AvatarProps)} className={styles.avatar} />}
        />
        {badge && <Badge {...badge} className={styles.badge} />}
      </Button>
    );
  }

  return (
    <Button {...buttonProps} as={as} variant={variant} color={color} className={cx(styles.button, className)}>
      <ButtonLabel>{label}</ButtonLabel>
      <ButtonIcon
        className={styles.loginIcon}
        icon={<PadlockLockedIcon className={styles.icon} aria-label="Login Icon" />}
      />
      {badge && <Badge {...badge} className={styles.badge} />}
    </Button>
  );
};
