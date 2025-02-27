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
  Typography,
  type TypographyProps,
} from '..';

export interface TimelineActivityProps extends TimelineBaseProps {
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

export const TimelineActivity = ({
  loading,
  byline,
  icon = CircleFillIcon,
  color = 'neutral',
  typographyProps = {},
  margin,
  spacing,
  datetime,
  children,
  footer,
  ...props
}: TimelineActivityProps) => {
  return (
    <TimelineBase loading={loading} color={color} icon={icon} {...props}>
      {byline && (
        <Byline loading={loading} datetime={datetime}>
          {byline}
        </Byline>
      )}
      <Section margin={margin} spacing={spacing}>
        {children && (
          <Typography loading={loading} size="md" {...typographyProps}>
            {children}
          </Typography>
        )}
        {footer}
      </Section>
    </TimelineBase>
  );
};
