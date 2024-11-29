import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './skeleton.module.css';

export type SkeletonVariant = 'circle' | 'text';

interface SkeletonProps {
  loading?: boolean;
  variant?: SkeletonVariant;
  size?: string;
  children?: ReactNode;
  className?: string;
}

export const Skeleton = ({ loading = false, size, variant = 'text', className, children }: SkeletonProps) => {
  if (loading) {
    return (
      <span className={cx(styles.skelaton, className)} data-size={size} data-loading={loading} data-variant={variant}>
        {children}
      </span>
    );
  }

  return children;
};
