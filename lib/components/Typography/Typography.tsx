import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import styles from './typography.module.css';

export type TypographyColor = 'neutral' | 'company' | 'person' | 'article';
export type TypographyVariant = 'default' | 'subtle';
export type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TypographyMargin = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface TypographyProps {
  loading?: boolean;
  as?: ElementType;
  size?: TypographySize;
  color?: TypographyColor;
  variant?: TypographyVariant;
  className?: string;
  children?: ReactNode;
  href?: string;
}

export const Typography = ({
  loading,
  as = 'div',
  size = 'md',
  color,
  variant,
  className,
  children,
  ...restProps
}: TypographyProps) => {
  const Component = as;

  return (
    <Component
      className={cx(styles.typography, className)}
      data-size={size}
      data-color={color}
      data-variant={variant}
      {...restProps}
    >
      {children}
    </Component>
  );
};
