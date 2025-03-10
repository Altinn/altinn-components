import type { ReactNode } from 'react';
import { Section, type SectionProps } from '..';

export interface TimelineProps {
  spacing?: SectionProps['spacing'];
  children?: ReactNode;
}

export const Timeline = ({ spacing = 2, children }: TimelineProps) => {
  return (
    <Section as="ul" spacing={spacing}>
      {children}
    </Section>
  );
};
