import cx from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import { Skeleton, type TypographyProps } from '..';
import styles from './heading.module.css';

export type HeadingSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'inherit';
export type HeadingWeight = 'normal' | 'medium' | 'bold';
export type HeadingLeading = 'none' | 'tight' | 'normal';

export type HeadingComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';

export interface HeadingProps {
  loading?: boolean;
  as?: HeadingComponent;
  size?: HeadingSize;
  weight?: HeadingWeight;
  leading?: HeadingLeading;
  color?: TypographyProps['color'];
  variant?: TypographyProps['variant'];
  maxRows?: 2 | undefined;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export const Heading = ({
  loading,
  as = 'h2',
  size,
  leading = 'tight',
  weight = 'medium',
  color,
  variant,
  maxRows,
  className,
  style,
  children,
}: HeadingProps) => {
  const H = as;

  return (
    <Skeleton loading={loading}>
      <H
        className={cx(styles.heading, className)}
        style={style}
        data-size={size}
        data-leading={leading}
        data-weight={weight}
        data-color={color}
        data-variant={(size === 'xxs' && 'default') || variant}
        data-max-rows={maxRows}
      >
        {children}
      </H>
    </Skeleton>
  );
};
