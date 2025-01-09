import cx from 'classnames';
import type { ReactNode } from 'react';
import type { Color } from '..';
import styles from './badge.module.css';

export type BadgeColor = Color;
export type BadgeVariant = 'subtle' | 'strong';
export type BadgeSize = 'sm' | 'xs';

export interface BadgeProps {
  label?: string | number;
  color?: BadgeColor;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children?: ReactNode;
}

export const Badge = ({
  label,
  color = 'neutral',
  variant = 'subtle',
  size = 'sm',
  className,
  children,
}: BadgeProps) => {
  return (
    <span className={cx(styles.badge, className)} data-color={color} data-variant={variant} data-size={size}>
      <span className={styles.label}>{label || children}</span>
    </span>
  );
};
