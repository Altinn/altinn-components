import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import styles from './skeleton.module.css';

export type SkeletonVariant = 'circle' | 'text';

interface SkeletonProps {
  as?: ElementType;
  loading?: boolean;
  variant?: SkeletonVariant;
  size?: string;
  children?: ReactNode;
  className?: string;
}

export const Skeleton = ({
  as = 'span',
  loading = false,
  size,
  variant = 'text',
  className,
  children,
}: SkeletonProps) => {
  const Component = as;

  if (loading) {
    return (
      <Component
        className={cx(styles.skeleton, className)}
        aria-busy
        data-size={size}
        data-loading={loading}
        data-variant={variant}
        aria-hidden
      >
        <div aria-hidden="true">{children}</div>
      </Component>
    );
  }

  return children;
};
