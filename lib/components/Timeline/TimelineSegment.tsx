import { CircleFillIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import {
  Byline,
  Section,
  type SectionProps,
  type SvgElement,
  TimelineBase,
  type TimelineBaseProps,
  type TimelineBorder,
  type TypographyProps,
} from '..';

export interface TimelineSegmentProps extends TimelineBaseProps {
  loading?: boolean;
  icon?: SvgElement;
  datetime?: string;
  border?: TimelineBorder;
  byline?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  typographyProps?: TypographyProps;
  margin?: SectionProps['margin'];
  spacing?: SectionProps['spacing'];
}

export const TimelineSegment = ({
  loading,
  datetime,
  byline,
  icon = CircleFillIcon,
  color = 'neutral',
  spacing = 2,
  margin = 'bottom',
  children,
  footer,
  ...props
}: TimelineSegmentProps) => {
  return (
    <TimelineBase loading={loading} color={color} icon={icon} {...props}>
      <Section margin={margin} spacing={spacing}>
        {byline && (
          <Byline loading={loading} datetime={datetime}>
            {byline}
          </Byline>
        )}
        {children}
      </Section>
    </TimelineBase>
  );
};
