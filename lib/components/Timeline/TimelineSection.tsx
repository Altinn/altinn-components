import type { ReactNode } from 'react';
import {
  Byline,
  Section,
  type SectionProps,
  TimelineBase,
  type TimelineBaseProps,
  Typography,
  type TypographyProps,
} from '..';

export interface TimelineSectionProps {
  loading?: boolean;
  border?: TimelineBaseProps['border'];
  color?: TimelineBaseProps['color'];
  typographyProps?: TypographyProps;
  margin?: SectionProps['margin'];
  spacing?: SectionProps['spacing'];
  datetime?: string;
  byline?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
}

export const TimelineSection = ({
  loading,
  margin,
  spacing,
  border = 'strong',
  color,
  typographyProps = {},
  datetime,
  byline,
  children,
  footer,
}: TimelineSectionProps) => {
  return (
    <TimelineBase loading={loading} border={border} color={color}>
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
