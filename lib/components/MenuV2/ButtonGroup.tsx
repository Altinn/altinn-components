import { Button, type ButtonProps } from './Button';
import styles from './buttonGroup.module.css';

export interface ButtonGroupProps extends ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
}

export const ButtonGroup = ({ children, variant, size }: ButtonGroupProps) => {
  return (
    <Button as="div" className={styles.buttonGroup} data-size={size} data-variant={variant}>
      {children}
    </Button>
  );
};
