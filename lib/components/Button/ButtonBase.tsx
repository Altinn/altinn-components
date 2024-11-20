import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';

import styles from './buttonBase.module.css';

export type ButtonVariant = 'solid' | 'outline' | 'dotted' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'custom';
export type ButtonColor = 'primary' | 'secondary';

export interface ButtonBaseProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  as?: ElementType;
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  selected?: boolean;
  disabled?: boolean;
  href?: string;
  className?: string;
  children?: ReactNode;
}

export const ButtonBase = ({
  as,
  color,
  className,
  children,
  disabled = false,
  size,
  selected,
  variant,
  tabIndex = 0,
  ...rest
}: ButtonBaseProps) => {
  const Component = as || 'button';
  return (
    <Component
      tabIndex={tabIndex}
      data-size={size}
      data-variant={variant}
      data-color={color}
      aria-selected={selected}
      aria-disabled={disabled}
      disabled={disabled}
      className={cx(styles.button, className)}
      {...rest}
    >
      {children}
    </Component>
  );
};
