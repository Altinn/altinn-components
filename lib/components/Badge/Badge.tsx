import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './badge.module.css';

export interface BadgeProps {
  label?: string | number;
  variant?: 'neutral' | 'strong';
  size?: 'medium' | 'small';
  children?: ReactNode;
}

// TODO: add aria-label to the badge
export const Badge = ({ label, variant = 'neutral', size = 'medium', children }: BadgeProps) => {
  const classNames = cx(styles.badge, {
    [styles.strong]: variant === 'strong',
    [styles.small]: size === 'small',
  });
  return <span className={classNames}>{label || children}</span>;
};
