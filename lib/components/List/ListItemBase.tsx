import cx from 'classnames';
import type { ElementType, HTMLProps, KeyboardEvent, KeyboardEventHandler, ReactNode } from 'react';
import type { Color } from '..';
import styles from './listItemBase.module.css';

export type ListItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ListItemVariant = 'solid' | 'dotted';
export type ListItemShadow = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ListItemColor = Color;
export type ListItemTheme = 'transparent' | 'default' | 'subtle' | 'surface' | 'base';

export interface ListItemBaseProps {
  /** The title of the list item. */
  title?: string;
  /** If true, the list item is interactive and has a hover state. */
  interactive?: boolean;
  /** The element type to render as. */
  as?: ElementType;
  /** The URL to link to if the list item is a link. */
  href?: string;
  /** Click event handler. */
  onClick?: () => void;
  /** Key press event handler. */
  onKeyPress?: KeyboardEventHandler;
  /** The tab index of the list item. */
  tabIndex?: number;
  /** The color of the list item. */
  color?: ListItemColor;
  /** The theme of the list item. */
  theme?: ListItemTheme;
  /** The variant of the list item. */
  variant?: ListItemVariant;
  /** The size of the list item. */
  size?: ListItemSize;
  /** The shadow style of the list item. */
  shadow?: ListItemShadow;
  /** Additional class names for the list item. */
  className?: string;
  /** If true, the list item shows a loading state. */
  loading?: boolean;
  /** If true, the list item is disabled. */
  disabled?: boolean;
  /** If true, the list item is hidden. */
  hidden?: boolean;
  /** If true, the list item is active. */
  active?: boolean;
  /** If true, the list item is selected. */
  selected?: boolean;
  /** If true, the list item is expanded. */
  expanded?: boolean;
  /** Mouse enter event handler. */
  onMouseEnter?: HTMLProps<HTMLDivElement>['onMouseEnter'];
  /** The children elements of the list item. */
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
  onMouseEnter,
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
        onMouseEnter={onMouseEnter}
      >
        {children}
      </Component>
    );
  }

  const itemClass = cx(styles.item, className, selected && styles.interactiveSelected);

  return (
    <div
      className={itemClass}
      data-variant={variant}
      data-color={color}
      data-theme={theme}
      data-size={size}
      data-shadow={appliedShadow}
      data-active={active}
      aria-hidden={hidden}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </div>
  );
};
