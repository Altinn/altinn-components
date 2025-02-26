import type { ReactNode } from 'react';
import { TimelineBase, type TimelineBaseProps } from '..';

export interface TimelineSectionProps {
  margin?: TimelineBaseProps['margin'];
  border?: TimelineBaseProps['border'];
  color?: TimelineBaseProps['color'];
  children?: ReactNode;
}

export const TimelineSection = ({ margin, border, color = 'neutral', children }: TimelineSectionProps) => {
  return (
    <TimelineBase margin={margin} border={border} color={color}>
      {children}
    </TimelineBase>
  );
};
