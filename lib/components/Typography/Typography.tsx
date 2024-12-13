import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import styles from './typography.module.css';

export type TypographyTheme = 'inherit' | 'neutral' | 'company' | 'person' | 'article';
export type TypographySize = 'xs' | 'sm' | 'md' | 'lg';

export interface TypographyProps {
  as?: ElementType;
  size?: TypographySize;
  theme?: TypographyTheme;
  className?: string;
  children?: ReactNode;
  href?: string;
}

export const Typography = ({
  as = 'div',
  size = 'md',
  theme = 'inherit',
  className,
  children,
  ...restProps
}: TypographyProps) => {
  const Component = as;

  return (
    <Component className={cx(styles.typography, className)} data-size={size} data-theme={theme} {...restProps}>
      {children}
    </Component>
  );
};
