import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import type { Color } from '..';

import styles from './buttonBase.module.css';

export type ButtonVariant = 'solid' | 'tinted' | 'outline' | 'dotted' | 'text' | 'link';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'custom';
export type ButtonColor = Color | 'inherit';

export interface ButtonBaseProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  as?: ElementType;
  size?: ButtonSize;
  variant?: ButtonVariant;
  reverse?: boolean;
  color?: ButtonColor;
  selected?: boolean;
  disabled?: boolean;
  href?: string;
  className?: string;
  children?: ReactNode;
  ariaLabel?: string;
}

export const ButtonBase = ({
  as,
  color,
  className,
  children,
  reverse,
  disabled = false,
  ariaLabel,
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
      data-color={color}
      data-variant={variant}
      data-reverse={reverse}
      data-selected={selected}
      aria-disabled={disabled}
      disabled={disabled}
      className={cx(styles.button, className)}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </Component>
  );
};
