import { TimelineBase, TimelineSection, type TimelineSectionProps } from '.';

export interface TimelineProps {
  items: TimelineSectionProps[];
}

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <TimelineBase>
      {items?.map((item, index) => {
        return (
          <TimelineSection {...item} key={index}>
            {item.children}
          </TimelineSection>
        );
      })}
    </TimelineBase>
  );
};
