import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './heading.module.css';

export type HeadingSize = 'xs' | 'sm' | 'md' | 'lg';
export type HeadingWeight = 'normal' | 'medium' | 'bold';
export type HeadingComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
  as?: HeadingComponent;
  size?: HeadingSize;
  weight?: HeadingWeight;
  className?: string;
  children?: ReactNode;
}

export const Heading = ({ as = 'h2', size = 'md', weight = 'medium', className, children }: HeadingProps) => {
  const H = as;

  return (
    <H className={cx(styles.heading, className)} data-size={size} data-weight={weight}>
      {children}
    </H>
  );
};
