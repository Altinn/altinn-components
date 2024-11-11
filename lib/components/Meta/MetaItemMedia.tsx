import { Icon, type IconName, ProgressIcon } from '../Icon';
import type { MetaItemSize } from './MetaItemBase';
import styles from './metaItem.module.css';

interface MetaItemMediaProps {
  size?: MetaItemSize;
  progress?: number;
  icon?: IconName;
}

export const MetaItemMedia = ({ size = 'xs', icon, progress }: MetaItemMediaProps) => {
  if (!icon && typeof progress !== 'number') {
    return false;
  }

  return (
    <span className={styles.media} data-size={size}>
      {icon && <Icon name={icon} className={styles.icon} />}
      {progress && <ProgressIcon value={progress} className={styles.icon} />}
    </span>
  );
};
