import cx from 'classnames';
import type { MouseEventHandler } from 'react';
import type { SvgElement } from '../Icon';
import { ButtonBase, type ButtonBaseProps } from './ButtonBase';
import { ButtonIcon } from './ButtonIcon';
import { ButtonLabel } from './ButtonLabel';

import styles from './comboButton.module.css';

export interface ComboButtonProps extends Omit<ButtonBaseProps, 'onClick'> {
  icon: SvgElement;
  iconAltText?: string;
  ariaLabel?: string;
  onIconClick?: MouseEventHandler<HTMLButtonElement>;
  onLabelClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const ComboButton = ({
  variant = 'solid',
  color,
  size = 'md',
  selected = false,
  icon,
  children,
  className,
  ariaLabel,
  onLabelClick,
  onIconClick,
  iconAltText,
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
        <ButtonLabel size={size}>{children}</ButtonLabel>
      </ButtonBase>
      <span data-size={size} className={styles.divider} />
      <ButtonBase size={size} onClick={onIconClick} className={styles.secondary} ariaLabel={iconAltText}>
        <ButtonIcon icon={icon} size={size} />
      </ButtonBase>
    </ButtonBase>
  );
};
