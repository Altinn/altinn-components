import type { ReactNode } from 'react';
import { Flex, Heading, ListBase, Section } from '../';
import { Button } from '../Button';

export interface DialogListGroupProps {
  title?: string;
  children?: ReactNode;
}

export const DialogListGroup = ({ title, children }: DialogListGroupProps) => {
  return (
    <Section spacing="md">
      {title && (
        <Flex direction="row" align="center" justify="between" margin="sm">
          <Heading size="lg">{title}</Heading>
          <Button variant="text" icon="checkmark" size="sm">
            Velg alle
          </Button>
        </Flex>
      )}
      <ListBase spacing="md">{children}</ListBase>
    </Section>
  );
};
