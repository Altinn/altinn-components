import type { ReactNode } from "react";
import { Section, TimelineItem, type TimelineItemProps } from "..";

export interface TypelineListItemProps extends TimelineItemProps {
  id: string;
}

export interface TimelineProps {
  children?: ReactNode;
  items?: TypelineListItemProps[];
}

export const Timeline = ({ items, children }: TimelineProps) => {
  return (
    <Section spacing={2}>
      {items?.map((item) => {
        return <TimelineItem {...item} key={item.id} />;
      }) || children}
    </Section>
  );
};
