import cx from 'classnames';
import type { CSSProperties, ElementType, ReactNode } from 'react';
import { Skeleton } from '../Skeleton';
import styles from './typography.module.css';

export type TypographyColor = 'neutral' | 'company' | 'person' | 'article';
export type TypographyTheme = 'default' | 'subtle';
export type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface TypographyProps {
  loading?: boolean;
  loadingText?: string;
  as?: ElementType;
  size?: TypographySize;
  color?: TypographyColor;
  theme?: TypographyTheme;
  className?: string;
  children?: ReactNode;
  href?: string;
  style?: CSSProperties;
  maxWidth?: string;
}

export const Typography = ({
  loading,
  loadingText = 'Loading ...',
  as = 'div',
  size = 'md',
  color,
  theme,
  className,
  style = {},
  maxWidth,
  children,
  ...restProps
}: TypographyProps) => {
  const Component = as;

  return (
    <Component
      className={cx(styles.typography, className)}
      style={{
        maxWidth,
        ...style,
      }}
      data-size={size}
      data-color={color}
      data-theme={theme}
      {...restProps}
    >
      {(loading && <Skeleton loading={loading}>{loadingText}</Skeleton>) || children}
    </Component>
  );
};
