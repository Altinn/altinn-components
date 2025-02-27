import type { ReactNode } from 'react';
import { TimelineBase, type TimelineBaseProps, Section, type SectionProps } from '..';

export interface TimelineSectionProps {
  border?: TimelineBaseProps['border'];
  color?: TimelineBaseProps['color'];
  margin?: SectionProps['margin'];
  children?: ReactNode;
}

export const TimelineSection = ({ margin, border, color = 'neutral', children }: TimelineSectionProps) => {
  return (
    <TimelineBase border={border} color={color}>
      <Section margin={margin}>{children}</Section>
    </TimelineBase>
  );
};
