import cx from 'classnames';
import type { ReactNode } from 'react';
import { Skeleton } from '../Skeleton';
import styles from './heading.module.css';

export type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type HeadingWeight = 'normal' | 'medium' | 'bold';
export type HeadingComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';

export interface HeadingProps {
  loading?: boolean;
  as?: HeadingComponent;
  size?: HeadingSize;
  weight?: HeadingWeight;
  className?: string;
  children?: ReactNode;
}

export const Heading = ({ loading, as = 'h2', size = 'md', weight = 'medium', className, children }: HeadingProps) => {
  const H = as;

  return (
    <Skeleton loading={loading}>
      <H className={cx(styles.heading, className)} data-size={size} data-weight={weight}>
        {children}
      </H>
    </Skeleton>
  );
};
