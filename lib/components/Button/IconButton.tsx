import { Button, type ButtonProps } from '.';
import styles from './iconButton.module.css';

export interface IconButtonProps extends ButtonProps {
  label: string;
}

export const IconButton = ({ children, label, ...props }: IconButtonProps) => {
  return (
    <Button {...props} className={styles.button} icon={true} aria-label={label}>
      {children}
    </Button>
  );
};
