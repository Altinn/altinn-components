import cx from 'classnames';
import type { MouseEventHandler } from 'react';
import type { ButtonBaseProps, ButtonIconProps, ButtonSize } from '..';
import { ButtonBase, ButtonIcon, ButtonLabel } from '..';

import styles from './comboButton.module.css';

export interface ComboButtonProps extends Omit<ButtonBaseProps, 'onClick'> {
  icon: ButtonIconProps['icon'];
  iconSize?: ButtonSize;
  iconAltText?: string;
  ariaLabel?: string;
  onIconClick?: MouseEventHandler<HTMLButtonElement>;
  onLabelClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  label?: string;
  labelSize?: ButtonSize;
}

export const ComboButton = ({
  variant = 'solid',
  color,
  size,
  selected = false,
  icon,
  iconSize,
  iconAltText,
  label,
  labelSize,
  children,
  className,
  ariaLabel,
  onLabelClick,
  onIconClick,
}: ComboButtonProps) => {
  return (
    <ButtonBase
      as="div"
      size={size}
      variant={variant}
      color={color}
      selected={selected}
      className={cx(styles.button, className)}
      tabIndex={-1}
    >
      <ButtonBase ariaLabel={ariaLabel} size={size} onClick={onLabelClick} className={styles.primary}>
        <ButtonLabel size={labelSize}>{children || label}</ButtonLabel>
      </ButtonBase>
      <span data-size={size} className={styles.divider} />
      <ButtonBase
        onClick={onIconClick}
        className={styles.secondary}
        ariaLabel={iconAltText}
        size={iconSize || labelSize}
      >
        {icon && <ButtonIcon icon={icon} />}
      </ButtonBase>
    </ButtonBase>
  );
};
