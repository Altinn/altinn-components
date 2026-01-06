import { Button as DsButton, type ButtonProps as DsButtonProps } from '@digdir/designsystemet-react';
import styles from './button.module.css';

export type ButtonColor = DsButtonProps['data-color'] | undefined;
export type ButtonVariant = 'solid' | 'outline' | 'tinted' | 'ghost' | DsButtonProps['variant'];
export type ButtonSize = 'xs' | DsButtonProps['data-size'];

export type ButtonProps = {
  as?: React.ElementType;
  size?: ButtonSize;
  variant?: ButtonVariant;
  rounded?: boolean;
} & Omit<DsButtonProps, 'data-size' | 'data-color' | 'variant' | 'asChild' | 'data-variant' | 'data-rounded'>;

export const Button = ({ as = 'button', children, size, variant, color, rounded, ...rest }: ButtonProps) => {
  const Component = as || 'button';

  const finalVariant = variant === 'outline' ? 'secondary' : variant === 'ghost' ? 'tertiary' : variant;

  return (
    <DsButton
      className={styles.button}
      data-variant={finalVariant}
      data-size={size as DsButtonProps['data-size']}
      data-color={color as ButtonColor}
      data-rounded={rounded}
      asChild
    >
      <Component {...rest}>{children}</Component>
    </DsButton>
  );
};
