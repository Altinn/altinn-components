import { CheckmarkIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import { Flex, Heading, ListBase, Section } from '../';
import { Button } from '../Button';

export interface DialogListGroupProps {
  title?: string;
  children?: ReactNode;
  checkAllLabel?: string;
}

export const DialogListGroup = ({ title, children, checkAllLabel }: DialogListGroupProps) => {
  return (
    <Section spacing={3}>
      {title && (
        <Flex direction="row" align="center" justify="between">
          <Heading size="lg">{title}</Heading>
          {checkAllLabel && (
            <Button variant="text" icon={CheckmarkIcon} size="sm">
              {checkAllLabel}
            </Button>
          )}
        </Flex>
      )}
      <ListBase spacing={3}>{children}</ListBase>
    </Section>
  );
};
