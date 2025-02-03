import cx from 'classnames';
import type { ElementType, KeyboardEvent, KeyboardEventHandler, ReactNode } from 'react';
import type { Color } from '..';
import styles from './listItemBase.module.css';

export type ListItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ListItemVariant = 'solid' | 'dotted';
export type ListItemShadow = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ListItemColor = Color;
export type ListItemTheme = 'transparent' | 'default' | 'subtle' | 'surface' | 'base';

export interface ListItemBaseProps {
  title?: string;
  interactive?: boolean;
  as?: ElementType;
  href?: string;
  onClick?: () => void;
  onKeyPress?: KeyboardEventHandler;
  tabIndex?: number;
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
  title,
  interactive = true,
  as,
  href,
  onClick,
  onKeyPress,
  tabIndex,
  size,
  variant,
  color,
  theme,
  shadow,
  loading,
  disabled,
  hidden = false,
  active = false,
  selected,
  className,
  children,
}: ListItemBaseProps) => {
  const appliedShadow = theme === 'transparent' ? 'none' : shadow;

  if (interactive) {
    const linkClass = cx(
      styles.item,
      styles.interactive,
      className,
      selected && styles.interactiveSelected,
      hidden && styles.interactiveHidden,
    );
    const Component = as || 'button';
    return (
      <Component
        aria-label={title}
        className={linkClass}
        data-variant={variant}
        data-color={color}
        data-theme={theme}
        data-size={size}
        data-shadow={appliedShadow}
        data-active={active}
        href={href}
        onKeyPress={(e: KeyboardEvent) => {
          e.key === 'Enter' && onClick?.();
          onKeyPress?.(e);
        }}
        onClick={onClick}
        tabIndex={tabIndex}
        aria-disabled={disabled || loading}
        disabled={disabled || loading}
      >
        {children}
      </Component>
    );
  }

  const itemClass = cx(styles.item, className, selected && styles.interactiveSelected);

  return (
    <article
      className={itemClass}
      data-variant={variant}
      data-color={color}
      data-theme={theme}
      data-size={size}
      data-shadow={appliedShadow}
      data-active={active}
      aria-hidden={hidden}
      aria-disabled={disabled || loading}
    >
      {children}
    </article>
  );
};
