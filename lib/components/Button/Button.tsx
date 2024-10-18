import cx from 'classnames';
import {ButtonBase, type ButtonBaseProps} from './ButtonBase';
import {Icon} from '../Icon';

import styles from './button.module.css';

export interface ButtonProps extends ButtonBaseProps {
  label?: string;
  icon?: string;
  reverse?: boolean;
}

export const Button = ({
  size = 'md',
  reverse = false,
  selected = false,
  icon,
  label,
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
        {children || label}
      </span>
      {icon && (
        <span className={styles.icon} data-size={size}>
          <Icon name={icon} />
        </span>
      )}
    </ButtonBase>
  );
};
