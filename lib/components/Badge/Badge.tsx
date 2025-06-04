import cx from 'classnames';
import type { ReactNode } from 'react';
import type { Color, Theme } from '..';
import styles from './badge.module.css';

export type BadgeColor = Color;
export type BadgeVariant = 'tinted' | 'base' | 'text';
/** Theme is deprecated, use variant instead */
export type BadgeTheme = Theme;
export type BadgeSize = 'sm' | 'xs';

export interface BadgeProps {
  label?: string | number;
  color?: BadgeColor;
  variant?: BadgeVariant;
  theme?: BadgeTheme;
  size?: BadgeSize;
  className?: string;
  children?: ReactNode;
}

export const Badge = ({ label, color, variant = 'tinted', theme, size = 'sm', className, children }: BadgeProps) => {
  return (
    <span
      className={cx(styles.badge, className)}
      data-color={color}
      data-variant={variant}
      data-theme={theme}
      data-size={size}
    >
      <span className={styles.label}>{label || children}</span>
    </span>
  );
};
