import cx from 'classnames';
import type { CSSProperties, ElementType, ReactNode } from 'react';
import { Skeleton } from '../Skeleton';
import styles from './typography.module.css';
import { useHighlightedText } from './useHighlightedText';

export type TypographyColor = 'neutral' | 'company' | 'person' | 'article';
export type TypographyVariant = 'default' | 'subtle';
export type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface TypographyProps {
  loading?: boolean;
  loadingText?: string;
  highlightWords?: string[];
  as?: ElementType;
  size?: TypographySize;
  color?: TypographyColor;
  variant?: TypographyVariant;
  className?: string;
  children?: ReactNode;
  href?: string;
  style?: CSSProperties;
  maxWidth?: string;
}

export const Typography = ({
  loading,
  loadingText = 'Loading ...',
  highlightWords,
  as = 'div',
  size = 'md',
  color,
  variant,
  className,
  style = {},
  maxWidth,
  children,
  ...restProps
}: TypographyProps) => {
  const Component = as;

  const content = useHighlightedText(children, highlightWords || []);

  return (
    <Component
      className={cx(styles.typography, className)}
      style={{
        maxWidth,
        ...style,
      }}
      data-size={size}
      data-color={color}
      data-variant={variant}
      {...restProps}
    >
      <Skeleton loading={loading}>{content}</Skeleton>
    </Component>
  );
};
