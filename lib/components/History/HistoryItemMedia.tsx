import { Avatar, type AvatarProps } from '../Avatar';
import { Icon, type IconName } from '../Icon';
import { Skeleton } from '../Skeleton';
import styles from './historyItemMedia.module.css';

interface HistoryItemMediaProps {
  loading?: boolean;
  icon?: IconName;
  avatar?: AvatarProps;
}

export const HistoryItemMedia = ({ loading, icon, avatar }: HistoryItemMediaProps) => {
  return (
    <div className={styles.media}>
      <Skeleton loading={loading} variant="circle" className={styles.media}>
        {(icon && <Icon name={icon} variant="outline" className={styles.icon} />) ||
          (avatar && <Avatar {...avatar} size="sm" className={styles.avatar} />) || <div className={styles.dot} />}
      </Skeleton>
    </div>
  );
};
