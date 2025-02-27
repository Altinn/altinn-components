import { CircleFillIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import { Byline, TimelineBase, type TimelineBaseProps } from '..';

export interface TimelineFooterProps {
  loading?: boolean;
  as?: TimelineBaseProps['as'];
  color?: TimelineBaseProps['color'];
  icon?: TimelineBaseProps['icon'];
  iconColor?: TimelineBaseProps['iconColor'];
  children?: ReactNode;
}

export const TimelineFooter = ({
  loading,
  as = 'footer',
  color = 'neutral',
  icon = CircleFillIcon,
  iconColor,
  children,
}: TimelineFooterProps) => {
  return (
    <TimelineBase loading={loading} as={as} icon={icon} color={color} iconColor={iconColor} border="hidden">
      <Byline loading={loading}>{children}</Byline>
    </TimelineBase>
  );
};
