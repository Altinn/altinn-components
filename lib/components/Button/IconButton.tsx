import type { MouseEventHandler } from 'react';
import { ButtonBase, ButtonIcon } from '..';
import type { ButtonColor, ButtonIconProps, ButtonSize, ButtonVariant } from '..';

export interface IconButtonProps {
  icon: ButtonIconProps['icon'];
  iconAltText: string;
  color?: ButtonColor;
  size?: ButtonSize;
  iconSize?: ButtonSize;
  variant?: ButtonVariant;
  selected?: boolean;
  className?: string;
  onClick?: MouseEventHandler;
  dataTestId?: string;
}

export const IconButton = ({
  variant = 'solid',
  size,
  icon,
  iconSize,
  iconAltText,
  color,
  className,
  selected,
  onClick,
  dataTestId,
}: IconButtonProps) => {
  return (
    <ButtonBase
      variant={variant}
      color={color}
      size={size}
      className={className}
      onClick={onClick}
      selected={selected}
      data-testid={dataTestId}
      aria-label={iconAltText}
    >
      {icon && <ButtonIcon icon={icon} size={iconSize} />}
    </ButtonBase>
  );
};
