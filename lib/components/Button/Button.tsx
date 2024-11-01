import cx from 'classnames';
import { Icon, type IconName } from '../Icon';
import { ButtonBase, type ButtonBaseProps } from './ButtonBase';

import styles from './button.module.css';

export interface ButtonProps extends Partial<ButtonBaseProps> {
  icon?: IconName;
  reverse?: boolean;
}

export const Button = ({
  size = 'md',
  reverse = false,
  selected = false,
  icon,
  href,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonBase
      size={size}
      selected={selected}
      href={href}
      className={cx(styles.button, { [styles.reverse]: reverse })}
      {...rest}
    >
      <span className={styles.label} data-size={size}>
        {children}
      </span>
      {icon && (
        <span className={styles.icon} data-size={size}>
          <Icon name={icon} />
        </span>
      )}
    </ButtonBase>
  );
};
