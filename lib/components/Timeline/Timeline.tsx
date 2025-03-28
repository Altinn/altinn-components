import type { ElementType, ReactNode } from 'react';
import { Section, type SectionProps } from '..';

export interface TimelineProps {
  as?: ElementType;
  spacing?: SectionProps['spacing'];
  children?: ReactNode;
}

export const Timeline = ({ as = 'ul', spacing = 2, children }: TimelineProps) => {
  return (
    <Section as={as} spacing={spacing} style={{ width: '100%' }}>
      {children}
    </Section>
  );
};
