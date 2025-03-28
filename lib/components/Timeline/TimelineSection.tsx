import type { ElementType, ReactNode } from 'react';
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
  level?: TimelineBaseProps['level'];
  border?: TimelineBaseProps['border'];
  color?: TimelineBaseProps['color'];
  typographyProps?: TypographyProps;
  margin?: SectionProps['margin'];
  spacing?: SectionProps['spacing'];
  datetime?: string;
  byline?: ReactNode;
  children?: ReactNode | string;
  as?: ElementType;
}

export const TimelineSection = ({
  loading,
  level,
  margin,
  spacing,
  as = 'li',
  border = 'strong',
  color,
  typographyProps = {},
  datetime,
  byline,
  children,
}: TimelineSectionProps) => {
  return (
    <TimelineBase loading={loading} level={level} border={border} color={color} as={as}>
      {byline && (
        <Byline loading={loading} datetime={datetime}>
          {byline}
        </Byline>
      )}

      <Section margin={margin} spacing={spacing}>
        {children && typeof children === 'string' ? (
          <Typography as="p" loading={loading} size="md" {...typographyProps}>
            {children}
          </Typography>
        ) : (
          children
        )}
      </Section>
    </TimelineBase>
  );
};
