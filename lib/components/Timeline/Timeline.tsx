import type { ReactNode } from 'react';
import { Section } from '..';

export interface TimelineProps {
  children?: ReactNode;
}

export const Timeline = ({ children }: TimelineProps) => {
  return <Section spacing={2}>{children}</Section>;
};
