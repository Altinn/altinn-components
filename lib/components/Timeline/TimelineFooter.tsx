import type { ReactNode } from 'react';
import { TimelineBase, type TimelineBaseProps, Byline } from '..';
import { CircleFillIcon } from '@navikt/aksel-icons';

export interface TimelineFooterProps {
  as?: TimelineBaseProps['as'];
  color?: TimelineBaseProps['color'];
  icon?: TimelineBaseProps['icon'];
  iconColor?: TimelineBaseProps['iconColor'];
  children?: ReactNode;
}

export const TimelineFooter = ({
  as = 'footer',
  color,
  icon = CircleFillIcon,
  iconColor,
  children,
}: TimelineFooterProps) => {
  return (
    <TimelineBase as={as} icon={icon} color={color} iconColor={iconColor} border="hidden">
      <Byline>{children}</Byline>
    </TimelineBase>
  );
};
