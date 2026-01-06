import { Button, type ButtonProps } from './Button';
import styles from './buttonGroup.module.css';

export interface ButtonGroupProps extends ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  disabled?: boolean;
}

export const ButtonGroup = ({ children, variant, size, disabled }: ButtonGroupProps) => {
  return (
    <Button as="div" className={styles.buttonGroup} size={size} variant={variant} aria-disabled={disabled}>
      {children}
    </Button>
  );
};
