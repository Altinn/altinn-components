import { ReactNode, ElementType, forwardRef } from "react";
import styles from "./buttonBase.module.css";
import cx from "classnames";

export type ButtonVariant = "solid" | "outline" | "dotted" | "text";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonColor = "sm" | "md" | "lg";

export interface ButtonBaseProps {
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
  children?: ReactNode;
  className?: string;
}

export const ButtonBase = forwardRef(function ButtonBase(
  {
    as,
    className = "",
    children,
    variant,
    size,
    color,
    selected,
    disabled,
    ...rest
  },
  ref
) {
  const Component = as || "button";
  return (
    <Component
      ref={ref}
      data-size={size}
      data-variant={variant}
      data-color={color}
      aria-selected={selected}
      aria-disabled={disabled}
      className={cx(styles.button, className)}
      {...rest}
    >
      {children}
    </Component>
  );
});
