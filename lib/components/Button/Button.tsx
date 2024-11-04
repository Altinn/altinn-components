import cx from 'classnames';
import { Icon, type IconName } from '../Icon';
import { ButtonBase, type ButtonBaseProps } from './ButtonBase';
import styles from './button.module.css';

export interface ButtonProps extends Partial<ButtonBaseProps> {
  icon?: IconName;
  reverse?: boolean;
  loading?: boolean;
}

export const Button = ({
  size = 'md',
  reverse = false,
  selected = false,
  icon,
  href,
  children,
  loading,
  ...rest
}: ButtonProps) => {
  if (loading) {
    return (
      <ButtonBase
        size={size}
        selected={selected}
        href={href}
        className={cx(styles.button, { [styles.reverse]: reverse })}
        {...rest}
        disabled
      >
        <span className={styles.label} data-size={size}>
          <span className={styles.loading}>Loading....</span>
        </span>
      </ButtonBase>
    );
  }

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
