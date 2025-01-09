import cx from 'classnames';
import type { MouseEventHandler } from 'react';
import type { IconName } from '../Icon';
import { ButtonBase, type ButtonBaseProps } from './ButtonBase';
import { ButtonIcon } from './ButtonIcon';
import { ButtonLabel } from './ButtonLabel';

import styles from './comboButton.module.css';

export interface ComboButtonProps extends Omit<ButtonBaseProps, 'onClick'> {
  icon: IconName;
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
      <ButtonBase size={size} onClick={onIconClick} className={styles.secondary}>
        <ButtonIcon icon={icon} size={size} />
      </ButtonBase>
      <span data-size={size} className={styles.divider} />
      <ButtonBase size={size} onClick={onLabelClick} className={styles.primary}>
        <ButtonLabel size={size}>{children}</ButtonLabel>
      </ButtonBase>
    </ButtonBase>
  );
};
