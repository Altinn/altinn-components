import { CircleFillIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import {
  Byline,
  type FlexMargin,
  type FlexSpacing,
  Section,
  type SvgElement,
  TimelineBase,
  type TimelineBaseProps,
  type TimelineBorder,
  type TypographyProps,
} from '..';

export interface TimelineSegmentProps extends TimelineBaseProps {
  id?: string;
  loading?: boolean;
  icon?: SvgElement;
  datetime?: string;
  border?: TimelineBorder;
  byline?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  typographyProps?: TypographyProps;
  margin?: FlexMargin;
  spacing?: FlexSpacing;
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
  id,
  footer,
  ...props
}: TimelineSegmentProps) => {
  return (
    <TimelineBase loading={loading} color={color} icon={icon} as="li" {...props} id={id}>
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
