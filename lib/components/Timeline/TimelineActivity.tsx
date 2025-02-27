import type { ReactNode } from 'react';
import { TimelineBase, type TimelineBaseProps, Section, type SectionProps, Byline, type SvgElement } from '..';
import { CircleFillIcon } from '@navikt/aksel-icons';

export interface TimelineActivityProps extends TimelineBaseProps {
  icon?: SvgElement;
  datetime?: string;
  dateline?: ReactNode;
  margin?: SectionProps['margin'];
}

export const TimelineActivity = ({
  icon = CircleFillIcon,
  color = 'neutral',
  datetime,
  dateline,
  margin,
  children,
  ...props
}: TimelineActivityProps) => {
  return (
    <TimelineBase color={color} icon={icon} {...props}>
      {dateline && <Byline datetime={datetime}>{dateline}</Byline>}
      <Section margin={margin}>{children}</Section>
    </TimelineBase>
  );
};
