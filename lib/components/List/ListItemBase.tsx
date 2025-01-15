import cx from 'classnames';
import type { ReactNode } from 'react';
import type { Color } from '..';
import styles from './listItemBase.module.css';

export type ListItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ListItemVariant = 'solid' | 'dotted';
export type ListItemShadow = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ListItemColor = Color;
export type ListItemTheme = 'transparent' | 'default' | 'subtle' | 'surface' | 'base';

export interface ListItemBaseProps {
  color?: ListItemColor;
  theme?: ListItemTheme;
  variant?: ListItemVariant;
  size?: ListItemSize;
  shadow?: ListItemShadow;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  active?: boolean;
  selected?: boolean;
  expanded?: boolean;
  children?: ReactNode;
}

export const ListItemBase = ({
  size,
  variant = 'solid',
  color,
  theme = 'default',
  shadow = 'xs',
  loading,
  disabled,
  hidden = false,
  active = false,
  selected,
  expanded,
  className,
  children,
}: ListItemBaseProps) => {
  const itemClass = cx(styles.item, className);

  return (
    <article
      className={itemClass}
      data-variant={variant}
      data-color={color}
      data-theme={theme}
      data-size={size}
      data-shadow={theme === 'transparent' ? 'none' : shadow}
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
