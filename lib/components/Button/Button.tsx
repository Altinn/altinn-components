import { Button as DsButton, type ButtonProps as DsButtonProps } from '@digdir/designsystemet-react';
import * as React from 'react';
import styles from './button.module.css';

export type ButtonColor = DsButtonProps['data-color'] | undefined;
export type ButtonVariant = 'solid' | 'outline' | 'tinted' | 'ghost' | DsButtonProps['variant'];
export type ButtonSize = 'xs' | DsButtonProps['data-size'];

export type ButtonProps = {
  as?: React.ElementType;
  size?: ButtonSize;
  variant?: ButtonVariant;
  rounded?: boolean;
  icon?: boolean;
  href?: string;
} & Omit<DsButtonProps, 'icon' | 'variant' | 'asChild' | 'data-size' | 'data-color' | 'data-variant' | 'data-rounded'>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { as: Component = 'button', children, size, icon, variant, color, rounded, loading, ...rest },
  ref,
) {
  const finalVariant = variant === 'outline' ? 'secondary' : variant === 'ghost' ? 'tertiary' : variant;
  const disabled = rest?.disabled || rest?.['aria-disabled'] || loading;

  return (
    <DsButton
      className={styles.button}
      data-variant={finalVariant}
      data-size={size as DsButtonProps['data-size']}
      data-color={color as ButtonColor}
      data-icon={icon}
      data-rounded={rounded}
      asChild
    >
      <Component {...rest} ref={ref} aria-busy={loading} aria-disabled={disabled}>
        {children}
      </Component>
    </DsButton>
  );
});
