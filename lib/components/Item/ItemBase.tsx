import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react';
import type { Color } from '..';

export type ItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ItemColor = Color;

import cx from 'classnames';
import styles from './itemBase.module.css';

// We use a generic 'T' to allow the component to inherit props
// based on the 'as' element (e.g., href if as="a")
export type ItemBaseProps<T extends ElementType = 'li'> = {
  /** The element type to render as. */
  as?: T;
  /** Optional ref */
  ref?: React.Ref<T>;
  /** The tab index of the list item. */
  tabIndex?: number;
  /** The size of item. */
  size?: ItemSize;
  /** The color of item. */
  color?: ItemColor;
  /** The variant of item. */
  variant?: string;
  /** Additional class names. */
  className?: string;
  /** If true, the  item is disabled. */
  disabled?: boolean;
  /** If true, the  item is hidden. */
  hidden?: boolean;
  /** The children elements of the list item. */
  children?: ReactNode;
  /** Id of list item. */
  id?: string;
} & Omit<ComponentPropsWithRef<T>, 'color' | 'size'>;

export const ItemBase = ({
  id,
  ref,
  as,
  size,
  color,
  variant = 'default',
  hidden = false,
  disabled = false,
  className,
  children,
  ...rest // Collects onClick, onMouseEnter, id, etc.
}: ItemBaseProps) => {
  const Component = as || 'li';

  return (
    <Component
      {...rest}
      id={id}
      ref={ref}
      className={cx(styles.item, className)}
      data-size={size}
      data-color={color}
      data-variant={variant}
      aria-disabled={disabled}
      aria-hidden={hidden}
    >
      {children}
    </Component>
  );
};
