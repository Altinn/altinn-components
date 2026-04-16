import cx from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import type { Color, Theme } from '..';
import { Tooltip } from '..';
import styles from './badge.module.css';

export type BadgeColor = Color;
export type BadgeVariant = 'subtle' | 'strong' | 'outline' | 'dotted' | 'tinted' | 'base' | 'text';
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
  style?: CSSProperties;
  tooltip?: string;
  children?: ReactNode;
}

export const Badge = ({
  label,
  color,
  variant = 'subtle',
  theme,
  size = 'sm',
  tooltip,
  className,
  style,
  children,
}: BadgeProps) => {
  if (tooltip) {
    return (
      <Tooltip content={tooltip}>
        <span
          className={cx(styles.badge, className)}
          style={style}
          data-color={color}
          data-variant={variant}
          data-theme={theme}
          data-size={size}
          {...(size === 'xs' && { 'aria-hidden': true })}
        >
          <span className={styles.label}>{label || children}</span>
        </span>
      </Tooltip>
    );
  }

  return (
    <span
      className={cx(styles.badge, className)}
      style={style}
      data-color={color}
      data-variant={variant}
      data-theme={theme}
      data-size={size}
      {...(size === 'xs' && { 'aria-hidden': true })}
    >
      <span className={styles.label}>{label || children}</span>
    </span>
  );
};
