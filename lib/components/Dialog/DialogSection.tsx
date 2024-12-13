import type { ReactNode } from 'react';
import { Heading, Section } from '..';

export interface DialogSectionProps {
  title?: string;
  children?: ReactNode;
}

export const DialogSection = ({ title, children }: DialogSectionProps) => {
  if (!children) {
    return null;
  }

  return (
    <Section spacing="md" margin="md">
      {title && <Heading size="sm">{title}</Heading>}
      {children}
    </Section>
  );
};
