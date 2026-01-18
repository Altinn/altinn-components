import { Button, type ButtonProps } from './Button';
import styles from './buttonGroupDivider.module.css';

export interface ButtonGroupDividerProps {
  variant?: ButtonProps['variant'];
}

export const ButtonGroupDivider = ({ variant }: ButtonGroupDividerProps) => {
  return (
    <Button as="span" color="inherit" variant={variant} aria-hidden="true" className={styles.divider}>
      <span className={styles.border} />
    </Button>
  );
};
