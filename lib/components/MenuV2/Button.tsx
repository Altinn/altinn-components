import { Button as DsButton, type ButtonProps as DsButtonProps } from '@digdir/designsystemet-react';
import styles from './button.module.css';

export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'solid'
  | 'outline'
  | 'ghost'
  | 'danger'
  | 'warning'
  | 'info'
  | 'success';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonProps = {
  as?: React.ElementType;
  size?: ButtonSize;
  variant?: ButtonVariant;
  rounded?: boolean;
} & Omit<DsButtonProps, 'data-size' | 'data-color' | 'size' | 'variant' | 'asChild'>;

export const Button = ({ as = 'button', children, size, variant, rounded, ...rest }: ButtonProps) => {
  const Component = as || 'button';

  return (
    <DsButton
      className={styles.button}
      data-variant={variant as any}
      data-size={size as any}
      data-rounded={rounded}
      asChild
    >
      <Component {...rest}>{children}</Component>
    </DsButton>
  );
};
