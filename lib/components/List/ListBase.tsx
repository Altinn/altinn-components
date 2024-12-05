import type { ReactNode } from 'react';
import styles from './listBase.module.css';

export type ListTheme = 'inherit' | 'global' | 'neutral' | 'person' | 'company';
export type ListSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg';
export type ListColor = 'transparent' | 'white';
export type ListShadow = 'xs' | 'sm';

export interface ListBaseProps {
  theme?: ListTheme;
  color?: ListColor;
  shadow?: ListShadow;
  spacing?: ListSpacing;
  children?: ReactNode;
}

export const ListBase = ({ theme = 'inherit', color, spacing = 'md', shadow, children }: ListBaseProps) => {
  return (
    <div className={styles.list} data-theme={theme} data-color={color} data-spacing={spacing} data-shadow={shadow}>
      {children}
    </div>
  );
};
