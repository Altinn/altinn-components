import { MenuHamburgerIcon, XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import type { ElementType } from 'react';
import { ButtonBase, ButtonIcon, ButtonLabel, type ButtonProps, useRootContext } from '../';
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
  color = 'accent',
  variant = 'solid',
  expanded,
  label = 'Menu',
  badge,
  ...buttonProps
}: GlobalMenuButtonProps) => {
  const isDesktop = useIsDesktop();
  const { languageCode } = useRootContext();
  const { close } = getTexts(languageCode);

  if (expanded) {
    return (
      <ButtonBase
        {...buttonProps}
        as={as}
        type="button"
        variant={variant}
        color={color}
        className={cx(styles.button, className)}
      >
        {isDesktop && (
          <>
            <ButtonIcon icon={<XMarkIcon className={styles.icon} aria-label={close} />} />
            <ButtonLabel>{label}</ButtonLabel>
          </>
        )}
        {!isDesktop && <ButtonIcon icon={<XMarkIcon className={styles.iconMobile} aria-label={close} />} />}
        {badge && <Badge {...badge} className={styles.badge} />}
      </ButtonBase>
    );
  }

  return (
    <ButtonBase
      {...buttonProps}
      as={as}
      type="button"
      variant={variant}
      color={color}
      className={cx(styles.button, className)}
    >
      {isDesktop && <ButtonIcon icon={<MenuHamburgerIcon className={styles.icon} aria-hidden />} />}
      <ButtonLabel>{label}</ButtonLabel>
      {badge && <Badge {...badge} className={styles.badge} />}
    </ButtonBase>
  );
};
