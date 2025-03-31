import cx from 'classnames';
import type { MouseEventHandler } from 'react';
import type { SvgElement } from '../Icon';
import { ButtonBase } from './ButtonBase';
import type { ButtonColor, ButtonSize, ButtonVariant } from './ButtonBase';
import { ButtonIcon } from './ButtonIcon';
import styles from './iconButton.module.css';

export interface IconButtonProps {
  icon: SvgElement;
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
  size = 'md',
  icon,
  color,
  iconSize,
  className,
  selected,
  onClick,
  dataTestId,
  iconAltText,
}: IconButtonProps) => {
  return (
    <ButtonBase
      variant={variant}
      color={color}
      size={size}
      className={cx(styles.button, className)}
      onClick={onClick}
      selected={selected}
      data-testid={dataTestId}
      aria-label={iconAltText}
    >
      <ButtonIcon icon={icon} size={iconSize || size} />
    </ButtonBase>
  );
};
