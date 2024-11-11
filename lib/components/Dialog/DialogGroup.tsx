import type { ReactNode } from 'react';
import { Heading, ListBase, SectionBase, SectionHeader } from '../';
import { Button } from '../Button';

export interface DialogGroupProps {
  title?: string;
  children?: ReactNode;
}

export const DialogGroup = ({ title, children }: DialogGroupProps) => {
  return (
    <SectionBase spacing="md">
      {title && (
        <SectionHeader padding margin>
          <Heading>{title}</Heading>
          <Button variant="text" icon="checkmark" size="sm" reverse>
            Velg alle
          </Button>
        </SectionHeader>
      )}
      <ListBase spacing="md">{children}</ListBase>
    </SectionBase>
  );
};
