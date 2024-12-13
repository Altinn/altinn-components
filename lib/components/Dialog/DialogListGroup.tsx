import type { ReactNode } from 'react';
import { Heading, ListBase, Section, SectionHeader } from '../';
import { Button } from '../Button';

export interface DialogListGroupProps {
  title?: string;
  children?: ReactNode;
}

export const DialogListGroup = ({ title, children }: DialogListGroupProps) => {
  return (
    <Section spacing="md">
      {title && (
        <SectionHeader margin="sm">
          <Heading>{title}</Heading>
          <Button variant="text" icon="checkmark" size="sm">
            Velg alle
          </Button>
        </SectionHeader>
      )}
      <ListBase spacing="md">{children}</ListBase>
    </Section>
  );
};
