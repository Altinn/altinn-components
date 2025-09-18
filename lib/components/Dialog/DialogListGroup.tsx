import type { ReactNode } from 'react';
import { Flex, Heading, List, Section, Typography } from '..';

export interface DialogListGroupProps {
  title?: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactNode;
}

export const DialogListGroup = ({ title, description, children }: DialogListGroupProps) => {
  return (
    <Section spacing={4}>
      <Flex direction="col" spacing={2}>
        {title && <Heading size="lg">{title}</Heading>}
        {description && (
          <Typography size="sm" style={{ marginBottom: '.5em' }}>
            {description}
          </Typography>
        )}
      </Flex>
      <List spacing={3}>{children}</List>
    </Section>
  );
};
