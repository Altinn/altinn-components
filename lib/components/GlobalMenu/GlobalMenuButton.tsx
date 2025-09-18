import { PadlockLockedIcon, XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import type { ElementType } from 'react';
import { type Account, ButtonBase, ButtonIcon, ButtonLabel, type ButtonProps } from '../';
import { Badge, type BadgeProps } from '../Badge';

import styles from './globalMenuButton.module.css';

export interface GlobalMenuButtonProps extends ButtonProps {
  currentAccount?: Account;
  label?: string;
  as?: ElementType;
  className?: string;
  expanded?: boolean;
  badge?: BadgeProps | undefined;
  tabIndex?: number;
}

export const GlobalMenuButton = ({
  className,
  as = 'button',
  color = 'accent',
  variant = 'solid',
  currentAccount,
  expanded,
  label = 'Menu',
  badge,
  ...buttonProps
}: GlobalMenuButtonProps) => {
  if (expanded) {
    return (
      <ButtonBase {...buttonProps} as={as} variant={variant} color={color} className={cx(styles.button, className)}>
        <ButtonLabel>{label}</ButtonLabel>
        <ButtonIcon className={styles.closeIcon} icon={<XMarkIcon className={styles.icon} aria-label="Close Icon" />} />
        {badge && <Badge {...badge} className={styles.badge} />}
      </ButtonBase>
    );
  }

  if (currentAccount) {
    return (
      <ButtonBase {...buttonProps} as={as} variant={variant} color={color} className={cx(styles.button, className)}>
        <ButtonLabel>{label}</ButtonLabel>
        <ButtonIcon className={styles.avatar} icon={currentAccount?.icon} />
        {badge && <Badge {...badge} className={styles.badge} />}
      </ButtonBase>
    );
  }

  return (
    <ButtonBase {...buttonProps} as={as} variant={variant} color={color} className={cx(styles.button, className)}>
      <ButtonLabel>{label}</ButtonLabel>
      <ButtonIcon
        className={styles.loginIcon}
        icon={<PadlockLockedIcon className={styles.icon} aria-label="Login Icon" />}
      />
      {badge && <Badge {...badge} className={styles.badge} />}
    </ButtonBase>
  );
};
