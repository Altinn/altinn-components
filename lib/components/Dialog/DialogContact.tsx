import type { ReactNode } from 'react';
import { ContactButtons, type ContactButtonsProps, type ContactSectionProps, Heading, Section, Typography } from '..';

export interface DialogContactProps extends ContactButtonsProps {
  title?: string;
  children?: ReactNode;
}

export const DialogContact = ({ id = 'dialog-contact', title, children, items = [] }: ContactSectionProps) => {
  return (
    <Section spacing={4} id={id}>
      {title && <Heading size="lg">{title}</Heading>}
      <Typography>{children}</Typography>
      <ContactButtons items={items} />
    </Section>
  );
};
