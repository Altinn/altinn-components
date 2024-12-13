import type { ReactNode } from 'react';
import { Section, type SectionProps } from './Section';

export interface PageBaseProps extends SectionProps {
  children?: ReactNode;
}

export const PageBase = ({ children, ...props }: PageBaseProps) => {
  return (
    <Section as="div" {...props}>
      {children}
    </Section>
  );
};
