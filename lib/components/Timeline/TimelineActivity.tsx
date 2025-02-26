import type { ReactNode } from 'react';
import { TimelineBase, type TimelineBaseProps, type SvgElement } from '..';
import { CircleFillIcon } from '@navikt/aksel-icons';

export interface TimelineActivityProps extends TimelineBaseProps {
  icon?: SvgElement;
  datetime?: string;
  dateline?: ReactNode;
}

export const TimelineActivity = ({
  icon = CircleFillIcon,
  color = 'neutral',
  datetime,
  children,
  ...props
}: TimelineActivityProps) => {
  return (
    <TimelineBase color={color} icon={icon} {...props}>
      {children}
    </TimelineBase>
  );
};
