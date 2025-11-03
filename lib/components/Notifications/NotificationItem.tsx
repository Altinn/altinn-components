import { NotificationItemBase, type NotificationItemBaseProps } from '..';

export interface NotificationItemProps extends NotificationItemBaseProps {
  id: string;
  title?: string;
  description?: string;
}

export const NotificationItem = ({
  loading,
  id = 'notification',
  icon,
  title,
  description,
  ...props
}: NotificationItemProps) => {
  if (loading) {
    return <NotificationItemBase icon={icon} title={title} loading />;
  }

  return <NotificationItemBase {...props} icon={icon} title={title} description={description} />;
};
