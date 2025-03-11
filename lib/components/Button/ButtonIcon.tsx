import cx from 'classnames';
import { Icon, type SvgElement } from '../Icon';
import type { ButtonSize } from './ButtonBase';
import styles from './buttonIcon.module.css';

export interface ButtonIconProps {
  icon: SvgElement;
  size: ButtonSize;
  iconAltText?: string;
  className?: string;
}

export const ButtonIcon = ({ className, size, icon, iconAltText }: ButtonIconProps) => {
  return (
    <span className={cx(styles.icon, className)} data-size={size}>
      <Icon svgElement={icon} altText={iconAltText} />
    </span>
  );
};
