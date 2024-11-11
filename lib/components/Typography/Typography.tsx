import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import type { LayoutTheme } from '../Layout';
import styles from './typography.module.css';

export type TypographySize = 'sm' | 'md' | 'lg';

export interface TypographyProps {
  as?: ElementType;
  size?: TypographySize;
  theme?: LayoutTheme;
  className?: string;
  children?: ReactNode;
}

export const Typography = ({ as = 'div', size = 'md', theme, className, children }: TypographyProps) => {
  const Component = as;

  return (
    <Component className={cx(styles.typography, className)} data-size={size} data-theme={theme}>
      {children}
    </Component>
  );
};
