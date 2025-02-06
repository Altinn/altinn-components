import { Icon, type SvgElement } from '../Icon';
import type { ButtonSize } from './ButtonBase';
import styles from './buttonIcon.module.css';

export interface ButtonIconProps {
  icon: SvgElement;
  iconAltText?: string;
  size: ButtonSize;
}

export const ButtonIcon = ({ size, icon, iconAltText }: ButtonIconProps) => {
  return (
    <span className={styles.icon} data-size={size}>
      <Icon svgElement={icon} altText={iconAltText} />
    </span>
  );
};
