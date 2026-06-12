import { MenuHamburgerIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { ElementType } from 'react';
import { Button, type ButtonProps } from '..';
import { Badge, type BadgeProps } from '../Badge';
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
  color = 'company',
  variant = 'solid',
  onClick,
  expanded,
  label = 'Menu',
  badge,
  ...buttonProps
}: GlobalMenuButtonProps) => {
  return (
    <Button
      {...buttonProps}
      type="button"
      onClick={onClick}
      color={color}
      variant={variant}
      className={styles.button}
      aria-haspopup="menu"
      aria-expanded={expanded}
    >
      {expanded ? (
        <XMarkIcon className={styles.icon} aria-hidden="true" />
      ) : (
        <MenuHamburgerIcon className={styles.icon} aria-hidden="true" />
      )}
      <span className={styles.label}>{label}</span>
      {badge && <Badge {...badge} className={styles.badge} />}
    </Button>
  );
};
