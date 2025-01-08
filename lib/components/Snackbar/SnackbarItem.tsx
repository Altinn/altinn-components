import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import { Icon, IconButton, type IconName } from '..';
import styles from './snackbarItem.module.css';

export enum SnackbarColorEnum {
  accent = 'accent',
  neutral = 'neutral',
  alert = 'alert',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  info = 'info',
}

export type SnackbarColor = keyof typeof SnackbarColorEnum;

export interface SnackbarItemProps {
  as?: ElementType;
  color?: SnackbarColor;
  icon?: IconName;
  message: string | ReactNode;
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
  color = 'accent',
  icon = 'bell',
  dismissable = true,
  onDismiss,
  ...rest
}: SnackbarItemProps) => {
  const Component = as || 'div';

  return (
    <Component className={cx(styles.item, className)} data-color={color} {...rest}>
      <div className={styles.media}>
        <Icon name={icon} variant="solid" className={styles.icon} />
      </div>
      <div className={styles.content}>{message}</div>
      {dismissable && (
        <div className={styles.action}>
          <IconButton icon="x-mark" variant="outline" onClick={onDismiss} className={styles.dismiss} />
        </div>
      )}
    </Component>
  );
};
