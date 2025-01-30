import type { ReactNode } from 'react';
import { Heading, Section, Typography } from '..';

export interface DialogSectionProps {
  title?: string;
  children?: ReactNode;
}

export const DialogSection = ({ title, children }: DialogSectionProps) => {
  if (!children) {
    return null;
  }

  return (
    <Section spacing={3} margin="section">
      {title && <Heading size="lg">{title}</Heading>}
      <Typography>{children}</Typography>
    </Section>
  );
};
