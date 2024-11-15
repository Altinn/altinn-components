import { Icon, type IconName } from '../Icon';
import type { ButtonSize } from './ButtonBase';
import styles from './buttonIcon.module.css';

export interface ButtonIconProps {
  icon: IconName;
  size: ButtonSize;
}

export const ButtonIcon = ({ size, icon }: ButtonIconProps) => {
  return (
    <span className={styles.icon} data-size={size}>
      <Icon name={icon} />
    </span>
  );
};
