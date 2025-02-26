import type { ReactNode } from 'react';
import { TimelineHeader, type TimelineHeaderProps } from '..';

export interface TimelineFooterProps {
  color?: TimelineHeaderProps['color'];
  icon?: TimelineHeaderProps['icon'];
  children?: ReactNode;
}

export const TimelineFooter = ({ color = 'neutral', icon, children }: TimelineFooterProps) => {
  return (
    <TimelineHeader as="footer" color={color} icon={icon}>
      {children}
    </TimelineHeader>
  );
};
