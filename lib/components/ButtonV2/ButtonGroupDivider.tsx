import { Button, type ButtonProps } from './Button';
import styles from './buttonGroupDivider.module.css';

export interface ButtonGroupDividerProps extends ButtonProps {
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  disabled?: boolean;
}

export const ButtonGroupDivider = ({ variant, size, disabled }: ButtonGroupDividerProps) => {
  return (
    <Button as="span" aria-hidden="true" aria-disabled={disabled} className={styles.divider} size={size} variant={variant}>
      <span className={styles.border} />
    </Button>
  );
};
