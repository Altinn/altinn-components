import type { MouseEventHandler } from 'react';
import { ButtonBase, ButtonIcon } from '..';
import type { ButtonColor, ButtonIconProps, ButtonSize, ButtonVariant } from '..';

import styles from './floatingActionButton.module.css';

export interface FloatingActionButtonProps {
  icon: ButtonIconProps['icon'];
  iconSize?: ButtonSize;
  iconAltText: string;
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onClick?: MouseEventHandler;
  dataTestId?: string;
  onBlurCapture?: React.FocusEventHandler<HTMLButtonElement>;
}

export const FloatingActionButton = ({
  variant = 'solid',
  size,
  icon,
  iconSize,
  iconAltText,
  color,
  onClick,
  dataTestId,
  onBlurCapture,
}: FloatingActionButtonProps) => {
  return (
    <ButtonBase
      className={styles.button}
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      data-testid={dataTestId}
      aria-label={iconAltText}
      onBlurCapture={onBlurCapture}
    >
      {icon && <ButtonIcon icon={icon} size={iconSize} />}
    </ButtonBase>
  );
};
