import cx from 'classnames';
import type { ElementType, HTMLProps, ReactNode } from 'react';
import type { Color, Shadow } from '..';
import styles from './listItemBase.module.css';

export type ListItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ListItemBorder = 'none' | 'solid' | 'dotted';
export type ListItemColor = Color;

export interface ListItemBaseProps {
  /** If true, the list item is interactive and has a hover state. */
  interactive?: boolean;
  /** The element type to render as. */
  as?: ElementType;
  /** The tab index of the list item. */
  tabIndex?: number;
  /** The color of the list item. */
  color?: ListItemColor;
  /** The variant of the list item. */
  variant?: string;
  /** The size of the list item. */
  size?: ListItemSize;
  /** Shadow size. */
  shadow?: Shadow;
  /** Border style. */
  border?: ListItemBorder;
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
  color,
  variant = 'default',
  shadow = 'none',
  border = 'none',
  hidden = false,
  selected,
  className,
  onMouseEnter,
  id,
  children,
}: ListItemBaseProps) => {
  const Component = as || 'li';

  return (
    <Component
      className={cx(styles.base, className)}
      data-interactive={interactive}
      data-selected={selected}
      data-variant={variant}
      data-color={color}
      data-border={border}
      data-shadow={shadow}
      data-size={size}
      aria-hidden={hidden}
      onMouseEnter={onMouseEnter}
      id={id}
    >
      {children}
    </Component>
  );
};
