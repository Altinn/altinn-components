import cx from 'classnames';
import { Button, type ButtonProps } from './Button';
import styles from './buttonGroup.module.css';

export interface ButtonGroupProps extends ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonProps['variant'];
  color?: ButtonProps['color'];
  size?: ButtonProps['size'];
  disabled?: boolean;
  connected?: boolean;
  /** Wrap buttons in a flex container */
  wrap?: boolean;
}

export const ButtonGroup = ({ children, variant, color, size, disabled, connected, wrap }: ButtonGroupProps) => {
  if (connected) {
    return (
      <Button
        as="span"
        className={cx(styles.buttonGroup, {
          [styles.wrap]: wrap,
        })}
        size={size}
        color={color}
        variant={variant}
        data-connected={connected}
        aria-disabled={disabled}
      >
        {children}
      </Button>
    );
  }

  return (
    <span
      className={cx(styles.buttonGroup, {
        [styles.wrap]: wrap,
      })}
      data-size={size}
      data-color={color}
      data-variant={variant}
      aria-disabled={disabled}
    >
      {children}
    </span>
  );
};
