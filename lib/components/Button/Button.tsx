import cx from 'classnames';
import type { SvgElement } from '../Icon';
import { ButtonBase, type ButtonBaseProps } from './ButtonBase';
import { ButtonIcon } from './ButtonIcon';
import { ButtonLabel } from './ButtonLabel';
import styles from './button.module.css';

export interface ButtonProps extends Partial<ButtonBaseProps> {
  icon?: SvgElement;
  ariaLabel?: string;
  loading?: boolean;
  loadingText?: string;
  label?: string;
}

export const Button = ({
  variant = 'solid',
  color,
  size = 'md',
  selected = false,
  icon,
  href,
  label,
  children,
  className,
  loading,
  loadingText = 'Loading ...',
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
        <span className={styles.label} data-size={size}>
          <span className={styles.loading}>{loadingText}</span>
        </span>
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
      {icon && <ButtonIcon size={size} icon={icon} />}
      <ButtonLabel size={size}>{children || label}</ButtonLabel>
    </ButtonBase>
  );
};
