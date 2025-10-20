import { MenuHamburgerIcon, XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import type { ElementType } from 'react';
import { ButtonBase, ButtonIcon, ButtonLabel, type ButtonProps } from '../';
import { Badge, type BadgeProps } from '../Badge';

import { useIsDesktop } from '../../hooks/useIsDesktop';
import styles from './globalMenuButton.module.css';

export interface GlobalMenuButtonProps extends ButtonProps {
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
  expanded,
  label = 'Menu',
  badge,
  ...buttonProps
}: GlobalMenuButtonProps) => {
  const isDesktop = useIsDesktop();

  if (expanded) {
    return (
      <ButtonBase {...buttonProps} as={as} variant={variant} color={color} className={cx(styles.button, className)}>
        {isDesktop && (
          <ButtonIcon className={styles.closeIcon} icon={<XMarkIcon className={styles.icon} aria-label="Close" />} />
        )}
        <ButtonLabel>{label}</ButtonLabel>
        {badge && <Badge {...badge} className={styles.badge} />}
      </ButtonBase>
    );
  }

  return (
    <ButtonBase {...buttonProps} as={as} variant={variant} color={color} className={cx(styles.button, className)}>
      {isDesktop && <ButtonIcon icon={<MenuHamburgerIcon className={styles.icon} aria-hidden />} />}
      <ButtonLabel>{label}</ButtonLabel>
      {badge && <Badge {...badge} className={styles.badge} />}
    </ButtonBase>
  );
};
