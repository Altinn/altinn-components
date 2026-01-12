import { ButtonBase, type ButtonBaseProps } from './ButtonBase';
import styles from './buttonGroup.module.css';

export interface ButtonGroupProps extends ButtonBaseProps {
  children?: React.ReactNode;
  variant?: ButtonBaseProps['variant'];
  color?: ButtonBaseProps['color'];
  size?: ButtonBaseProps['size'];
  disabled?: boolean;
  connected?: boolean;
}

export const ButtonGroup = ({ children, variant = 'solid', color, size, disabled, connected }: ButtonGroupProps) => {
  if (connected) {
    return (
      <ButtonBase
        as="span"
        className={styles.buttonGroup}
        size={size}
        color={color}
        variant={variant}
        data-connected={connected}
        aria-disabled={disabled}
      >
        {children}
      </ButtonBase>
    );
  }

  return (
    <div
      className={styles.buttonGroup}
      data-size={size}
      data-variant={variant}
      data-color={color}
      aria-disabled={disabled}
    >
      {children}
    </div>
  );
};
