import cx from 'classnames';
import type { IconName } from '../Icon';
import { ButtonBase, type ButtonBaseProps } from './ButtonBase';
import { ButtonIcon } from './ButtonIcon';
import { ButtonLabel } from './ButtonLabel';
import styles from './button.module.css';

export interface ButtonProps extends Partial<ButtonBaseProps> {
  icon?: IconName;
  reverse?: boolean;
  loading?: boolean;
  label?: string;
}

export const Button = ({
  variant = 'solid',
  color,
  size = 'md',
  reverse = false,
  selected = false,
  icon,
  href,
  label,
  children,
  className,
  loading,
  ...rest
}: ButtonProps) => {
  if (loading) {
    return (
      <ButtonBase
        variant={variant}
        color={color}
        size={size}
        selected={selected}
        href={href}
        className={cx(styles.button, { [styles.reverse]: reverse }, className)}
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
      variant={variant}
      color={color}
      size={size}
      selected={selected}
      href={href}
      className={cx(styles.button, { [styles.reverse]: reverse })}
      {...rest}
    >
      {icon && <ButtonIcon size={size} icon={icon} />}
      <ButtonLabel size={size}>{children || label}</ButtonLabel>
    </ButtonBase>
  );
};
