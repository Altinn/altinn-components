import type { ReactNode } from 'react';
import { Heading, List, Section, Typography } from '..';

export interface DialogListGroupProps {
  title?: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactNode;
}

export const DialogListGroup = ({ title, description, children }: DialogListGroupProps) => {
  return (
    <Section spacing={3}>
      {title && <Heading size="lg">{title}</Heading>}
      {description && (
        <Typography size="sm" style={{ marginBottom: '.5em' }}>
          {description}
        </Typography>
      )}
      <List spacing={3}>{children}</List>
    </Section>
  );
};
