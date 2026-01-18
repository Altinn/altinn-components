import { Button, type ButtonProps } from './Button';
import styles from './buttonGroup.module.css';

export interface ButtonGroupProps extends ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonProps['variant'];
  color?: ButtonProps['color'];
  size?: ButtonProps['size'];
  disabled?: boolean;
  connected?: boolean;
}

export const ButtonGroup = ({ children, variant, size, disabled, connected, color }: ButtonGroupProps) => {
  return (
    <Button
      as="span"
      className={styles.buttonGroup}
      size={size}
      color={color}
      variant={variant}
      data-connected={connected}
      aria-disabled={disabled}
    >
      {children}
    </Button>
  );
};
