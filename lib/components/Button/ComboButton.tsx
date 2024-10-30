import cx from 'classnames';
import type { MouseEventHandler } from 'react';
import { Icon, type IconName } from '../Icon';
import { ButtonBase, type ButtonBaseProps } from './ButtonBase';

import styles from './comboButton.module.css';

export interface ComboButtonProps extends Omit<ButtonBaseProps, 'onClick'> {
  icon: IconName;
  onIconClick?: MouseEventHandler<HTMLButtonElement>;
  onLabelClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const ComboButton = ({
  size = 'md',
  variant = 'solid',
  color,
  selected = false,
  icon,
  children,
  className,
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
    >
      <ButtonBase size={size} onClick={onIconClick} className={styles.icon}>
        <Icon name={icon} />
      </ButtonBase>
      <span data-size={size} className={styles.divider} />
      <ButtonBase size={size} onClick={onLabelClick} className={styles.label}>
        {children}
      </ButtonBase>
    </ButtonBase>
  );
};
