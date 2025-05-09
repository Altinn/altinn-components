import { ActivityLogItem, type ActivityLogItemProps, Timeline } from '..';

export interface ActivityLogProps {
  items: ActivityLogItemProps[];
}

export function ActivityLog({ items }: ActivityLogProps) {
  return (
    <Timeline>
      {items?.map((item) => {
        return <ActivityLogItem {...item} key={item.id} />;
      })}
    </Timeline>
  );
}
