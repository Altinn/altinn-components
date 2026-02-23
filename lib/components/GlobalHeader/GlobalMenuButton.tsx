import { MenuHamburgerIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { ElementType } from 'react';
import { Button, type ButtonProps, useRootContext } from '..';
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

// TODO: Move to a common texts files when i18next is added
const getTexts = (languageCode: string | undefined) => {
  switch (languageCode) {
    case 'nn':
      return {
        close: 'Lukk meny',
      };
    case 'en':
      return {
        close: 'Close menu',
      };
    default:
      return {
        close: 'Lukk Meny',
      };
  }
};

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
  const { languageCode } = useRootContext();
  const { close } = getTexts(languageCode);

  return (
    <Button
      {...buttonProps}
      type="button"
      title={expanded ? close : label}
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
      <span className={styles.label}>{label}</span>
      {badge && <Badge {...badge} className={styles.badge} />}
    </Button>
  );
};
