import { MenuHamburgerIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { ElementType } from 'react';
import { Button, type ButtonProps, useRootContext } from '..';
import { Badge, type BadgeProps } from '../Badge';
import { getCommonTexts } from '../RootProvider/commonTexts.ts';
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
  label,
  badge,
  ...buttonProps
}: GlobalMenuButtonProps) => {
  const { languageCode } = useRootContext();
  return (
    <Button
      {...buttonProps}
      type="button"
      onClick={onClick}
      color={color}
      variant={variant}
      className={styles.button}
      aria-expanded={expanded}
    >
      {expanded ? (
        <XMarkIcon className={styles.icon} aria-hidden="true" />
      ) : (
        <MenuHamburgerIcon className={styles.icon} aria-hidden="true" />
      )}
      <span className={styles.label}>{label ?? getCommonTexts(languageCode).menu}</span>
      {badge && <Badge {...badge} className={styles.badge} />}
    </Button>
  );
};
