import type { ReactNode } from 'react';
import styles from './listBase.module.css';

export type ListTheme = 'inherit' | 'global' | 'neutral' | 'person' | 'company';
export type ListSpacing = 'none' | 'sm' | 'md' | 'lg';

export interface ListBaseProps {
  theme?: ListTheme;
  spacing?: ListSpacing;
  children?: ReactNode;
}

export const ListBase = ({ theme = 'inherit', spacing = 'md', children }: ListBaseProps) => {
  return (
    <div className={styles.list} data-theme={theme} data-spacing={spacing}>
      {children}
    </div>
  );
};
