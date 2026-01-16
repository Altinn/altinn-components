import { Button, type ButtonProps } from '.';
import { ButtonIcon } from './ButtonIcon';

import styles from './floatingActionButton.module.css';

export interface FloatingActionButtonProps extends ButtonProps {
  icon: ButtonProps['icon'];
  iconSize?: ButtonProps['size'];
  iconAltText: string;
}

export const FloatingActionButton = ({
  variant = 'solid',
  size,
  icon,
  iconSize,
  iconAltText,
  color,
  onClick,
  onBlurCapture,
}: FloatingActionButtonProps) => {
  return (
    <Button
      className={styles.button}
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      aria-label={iconAltText}
      onBlurCapture={onBlurCapture}
    >
      {icon && <ButtonIcon icon={icon} size={iconSize} />}
    </Button>
  );
};
