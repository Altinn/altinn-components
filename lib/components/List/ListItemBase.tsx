import type { ReactNode } from 'react';
import styles from './listItemBase.module.css';

export type ListItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ListItemColor = 'default' | 'accent' | 'transparent';
export type ListItemShadow = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ListItemBaseProps {
  color?: ListItemColor;
  size?: ListItemSize;
  shadow?: ListItemShadow;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  active?: boolean;
  selected?: boolean;
  expanded?: boolean;
  controls?: ReactNode;
  children?: ReactNode;
}

export const ListItemBase = ({
  size,
  color = 'default',
  shadow = 'xs',
  loading,
  disabled,
  hidden = false,
  active = false,
  selected,
  expanded,
  children,
}: ListItemBaseProps) => {
  return (
    <article
      className={styles.item}
      data-color={color}
      data-size={size}
      data-shadow={color === 'transparent' ? 'none' : shadow}
      data-active={active}
      aria-hidden={hidden}
      aria-disabled={disabled || loading}
      aria-selected={selected}
      aria-expanded={expanded}
    >
      {children}
    </article>
  );
};
