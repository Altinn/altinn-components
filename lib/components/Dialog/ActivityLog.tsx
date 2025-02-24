import { ActivityItem, type ActivityItemProps, Section, TimelineBase, Toolbar, type ToolbarProps } from '..';

export interface ActivityLogProps {
  toolbar?: ToolbarProps;
  items?: ActivityItemProps[];
}

export const ActivityLog = ({ toolbar, items }: ActivityLogProps) => {
  return (
    <Section spacing="page">
      {toolbar && <Toolbar {...toolbar} />}
      <TimelineBase>
        {items?.map((item, index) => {
          return <ActivityItem {...item} key={index} />;
        })}
      </TimelineBase>
    </Section>
  );
};
