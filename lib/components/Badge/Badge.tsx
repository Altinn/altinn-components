import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './badge.module.css';

export type BadgeColor = 'neutral' | 'alert';
export type BadgeSize = 'sm' | 'xs';

export interface BadgeProps {
  label?: string | number;
  color?: BadgeColor;
  size?: BadgeSize;
  className?: string;
  children?: ReactNode;
}

export const Badge = ({ label, color = 'neutral', size = 'sm', className, children }: BadgeProps) => {
  return (
    <span className={cx(styles.badge, className)} data-color={color} data-size={size}>
      <span className={styles.label}>{label || children}</span>
    </span>
  );
};
