import type { ReactNode } from 'react';
import { Section, type SectionProps } from '../';

export interface ModalBodyProps extends SectionProps {
  children?: ReactNode;
}

export const ModalBody = ({ children, ...props }: ModalBodyProps) => {
  return (
    <Section spacing={2} padding={2} {...props}>
      {children}
    </Section>
  );
};
