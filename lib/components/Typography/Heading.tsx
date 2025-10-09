'use client';
import cx from 'classnames';
import type { CSSProperties, ReactNode } from 'react';
import { Skeleton, type TypographyProps } from '..';
import styles from './heading.module.css';
import { useHighlightedText } from './useHighlightedText';

export type HeadingSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'inherit';
export type HeadingWeight = 'normal' | 'medium' | 'bold';
export type HeadingLeading = 'none' | 'tight' | 'normal';

export type HeadingComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span' | 'label';

export interface HeadingProps {
  id?: string;
  loading?: boolean;
  highlightWords?: string[];
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
  id,
  loading,
  highlightWords = [],
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
  const content = useHighlightedText(children, highlightWords || []);

  return (
    <H
      id={id}
      className={cx(styles.heading, className)}
      style={style}
      data-size={size}
      data-leading={leading}
      data-weight={weight}
      data-color={color}
      data-variant={(size === 'xxs' && 'default') || variant}
      data-max-rows={maxRows}
    >
      <Skeleton loading={loading}>{content}</Skeleton>
    </H>
  );
};
