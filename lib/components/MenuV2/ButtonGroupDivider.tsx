import { Button, type ButtonProps } from './Button';
import styles from './buttonGroupDivider.module.css';

export interface ButtonGroupDividerProps extends ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
}

export const ButtonGroupDivider = ({ variant, size }: ButtonGroupDividerProps) => {
  return (
    <Button as="span" aria-hidden="true" className={styles.divider} data-size={size} data-variant={variant}>
      <span className={styles.border} />
    </Button>
  );
};
