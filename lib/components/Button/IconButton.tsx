import cx from 'classnames';
import type { MouseEventHandler } from 'react';
import type { IconName } from '../Icon';
import { ButtonBase } from './ButtonBase';
import type { ButtonColor, ButtonSize, ButtonVariant } from './ButtonBase';
import { ButtonIcon } from './ButtonIcon';
import styles from './iconButton.module.css';

interface IconButtonProps {
  icon: IconName;
  color?: ButtonColor;
  size?: ButtonSize;
  iconSize?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
  onClick?: MouseEventHandler;
}

export const IconButton = ({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  icon,
  iconSize,
  className,
  onClick,
}: IconButtonProps) => {
  return (
    <ButtonBase variant={variant} color={color} size={size} className={cx(styles.button, className)} onClick={onClick}>
      <ButtonIcon icon={icon} size={iconSize || size} />
    </ButtonBase>
  );
};
