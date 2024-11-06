import { Icon, type IconName } from '../Icon';
import styles from './snackbarMedia.module.css';

interface SnackbarMediaProps {
  icon?: IconName;
}

export const SnackbarMedia = ({ icon = 'bell' }: SnackbarMediaProps) => {
  return (
    <div className={styles.media}>
      <Icon name={icon} variant="solid" className={styles.icon} />
    </div>
  );
};
