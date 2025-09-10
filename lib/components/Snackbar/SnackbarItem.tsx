import { BellFillIcon, XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import { Icon, IconButton, type SvgElement } from '..';
import styles from './snackbarItem.module.css';

export enum SnackbarColorEnum {
  accent = 'accent',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  info = 'info',
}

export type SnackbarColor = keyof typeof SnackbarColorEnum;

export interface SnackbarItemProps {
  as?: ElementType;
  color?: SnackbarColor;
  icon?: SvgElement;
  message: string | ReactNode;
  iconAltText?: string;
  href?: string;
  className?: string;
  dismissable?: boolean;
  onDismiss?: () => void;
  children?: ReactNode;
}

export const SnackbarItem = ({
  as,
  message,
  className,
  color,
  icon = BellFillIcon,
  iconAltText = 'Bell icon',
  dismissable = true,
  onDismiss,
  ...rest
}: SnackbarItemProps) => {
  const Component = as || 'div';

  return (
    <Component className={cx(styles.item, className)} data-color={color} role="alert" {...rest}>
      <Icon svgElement={icon} className={styles.icon} aria-hidden="true" />
      <div className={styles.content}>{message}</div>
      {dismissable && (
        <div className={styles.action}>
          <IconButton
            icon={XMarkIcon}
            variant="solid"
            onClick={onDismiss}
            className={styles.dismiss}
            iconAltText="close"
          />
        </div>
      )}
    </Component>
  );
};
