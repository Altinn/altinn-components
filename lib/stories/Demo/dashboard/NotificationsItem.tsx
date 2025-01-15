import { IconButton, ListItemBase, ListItemHeader, type ListItemInputProps } from '../../../components';
import styles from './notificationsItem.module.css';

export interface NotificationItemProps extends ListItemInputProps {
  id: string;
  /** Expanded */
  expanded?: boolean;
  /** Toggle */
  onToggle?: (id: string) => void;
  /** Render as **/
  as?: React.ElementType;
}

export const NotificationsItem = ({
  id,
  size = 'md',
  expanded,
  loading,
  onToggle,
  children,
  as,
  ...rest
}: NotificationsItemProps) => {
  return (
    <ListItemBase {...rest} loading={loading} expanded={expanded} className={styles.item}>
      <ListItemHeader
        {...rest}
        as={as}
        size={size}
        loading={loading}
        menu={{
          id: 'notification' + id,
          items: [
            {
              title: 'Dismiss',
            },
          ],
        }}
      />
      {children}
    </ListItemBase>
  );
};
