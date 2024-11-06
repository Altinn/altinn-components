import cx from 'classnames';
import { ButtonBase, type ButtonColor, type ButtonSize, type ButtonVariant } from '../Button';
import { Icon, type IconName } from '../Icon';
import styles from './iconButton.module.css';

interface IconButtonProps {
  icon: IconName;
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
}

export const IconButton = ({ className, variant, color, size, icon, onClick }: IconButtonProps) => {
  return (
    <ButtonBase variant={variant} color={color} size={size} className={cx(styles.button, className)} onClick={onClick}>
      <Icon name={icon} className={styles.icon} />
    </ButtonBase>
  );
};
