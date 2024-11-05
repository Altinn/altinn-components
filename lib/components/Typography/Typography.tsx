import cx from 'classnames';
import type { ReactNode } from 'react';
import type { LayoutTheme } from '../Layout';
import styles from './typography.module.css';

export type TypographySize = 'md' | 'lg' | 'xl';

export interface TypographyProps {
  size?: TypographySize;
  theme?: LayoutTheme;
  className?: string;
  children?: ReactNode;
}

export const Typography = ({ size = 'md', theme, className, children }: TypographyProps) => {
  return (
    <div className={cx(styles.typography, className)} data-size={size} data-theme={theme}>
      {children}
    </div>
  );
};
