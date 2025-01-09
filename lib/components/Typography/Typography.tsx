import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import styles from './typography.module.css';

export type TypographyColor = 'neutral' | 'company' | 'person' | 'article';
export type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface TypographyProps {
  as?: ElementType;
  size?: TypographySize;
  color?: TypographyColor;
  className?: string;
  children?: ReactNode;
  href?: string;
}

export const Typography = ({ as = 'div', size = 'md', color, className, children, ...restProps }: TypographyProps) => {
  const Component = as;

  return (
    <Component className={cx(styles.typography, className)} data-size={size} data-color={color} {...restProps}>
      {children}
    </Component>
  );
};
