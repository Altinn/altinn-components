import { ContactSection, type ContactSectionProps } from '..';

export interface DialogContactProps extends ContactSectionProps {}

export const DialogContact = ({ id = 'dialog-contact', children, items = [] }: ContactSectionProps) => {
  return (
    <ContactSection id={id} items={items}>
      {children}
    </ContactSection>
  );
};
