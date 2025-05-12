import cx from 'classnames';
import type { ElementType, HTMLProps, ReactNode } from 'react';
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
  /** Id of list item. */
  id?: string;
}

export const ListItemBase = ({
  as,
  interactive = true,
  size,
  variant,
  color,
  theme,
  shadow,
  hidden = false,
  selected,
  className,
  onMouseEnter,
  id,
  children,
}: ListItemBaseProps) => {
  const Component = as || 'li';
  const appliedShadow = theme === 'transparent' ? 'none' : shadow;

  const itemClass = cx(
    styles.item,
    className,
    interactive && styles.interactive,
    selected && styles.interactiveSelected,
    hidden && styles.interactiveHidden,
  );

  return (
    <Component
      className={itemClass}
      data-variant={variant}
      data-color={color}
      data-theme={theme}
      data-size={size}
      data-shadow={appliedShadow}
      aria-hidden={hidden}
      onMouseEnter={onMouseEnter}
      id={id}
    >
      {children}
    </Component>
  );
};
