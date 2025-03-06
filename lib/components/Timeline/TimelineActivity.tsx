import { CircleFillIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import {
  Byline,
  Section,
  type SectionProps,
  type SvgElement,
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
  children?: string | ReactNode;
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
    <Section margin={margin} spacing={spacing} {...props}>
      {byline && (
        <Byline loading={loading} datetime={datetime}>
          {byline}
        </Byline>
      )}
      {children && typeof children === 'string' ? (
        <Typography as="p" loading={loading} size="md" {...typographyProps}>
          {children}
        </Typography>
      ) : (
        children
      )}
    </Section>
  );
};
