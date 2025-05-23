import cx from 'classnames';
import { ButtonBase, type ButtonBaseProps, ButtonIcon, type ButtonIconProps, ButtonLabel, type ButtonSize } from '..';
import styles from './button.module.css';

export interface ButtonProps extends Partial<ButtonBaseProps> {
  icon?: ButtonIconProps['icon'];
  iconSize?: ButtonSize;
  ariaLabel?: string;
  loading?: boolean;
  label?: string;
  labelSize?: ButtonSize;
}

export const Button = ({
  variant = 'solid',
  color,
  size,
  selected = false,
  icon,
  iconSize,
  href,
  label,
  labelSize,
  children,
  className,
  loading,
  ariaLabel,
  ...rest
}: ButtonProps) => {
  if (loading) {
    return (
      <ButtonBase
        variant={variant}
        aria-busy
        color={color}
        size={size}
        selected={selected}
        href={href}
        className={cx(styles.button, className)}
        {...rest}
        disabled
      >
        <ButtonLabel size={labelSize}>{children || label}</ButtonLabel>
      </ButtonBase>
    );
  }

  return (
    <ButtonBase
      variant={variant}
      color={color}
      size={size}
      ariaLabel={ariaLabel}
      selected={selected}
      href={href}
      className={cx(styles.button, className)}
      {...rest}
    >
      {icon && <ButtonIcon icon={icon} size={iconSize || labelSize} />}
      <ButtonLabel size={labelSize}>{children || label}</ButtonLabel>
    </ButtonBase>
  );
};
