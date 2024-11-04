import type { ReactNode } from 'react';
import { Icon, type IconName } from '../Icon';
import styles from './dialogTitle.module.css';

export type DialogTitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type DialogTitleVariant = 'default' | 'seen' | 'trash';

export type DialogTitleProps = {
  /** Size */
  size?: DialogTitleSize;
  /** Variant */
  variant?: DialogTitleVariant;
  /** Display an icon next to title */
  icon?: IconName;
  /** Dialog title */
  children?: ReactNode;
};

/**
 * Dialog title
 */

export const DialogTitle = ({ size = 'sm', variant, icon, children }: DialogTitleProps) => {
  return (
    <h2 className={styles.title} data-size={size} data-variant={variant}>
      <span>{children}</span>
      {icon ? <Icon name={icon} className={styles.icon} /> : ''}
    </h2>
  );
};
