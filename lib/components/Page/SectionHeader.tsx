import type { ReactNode } from 'react';
import { Section, type SectionProps } from './Section';

export interface SectionHeaderProps extends SectionProps {
  children?: ReactNode;
}

export const SectionHeader = ({
  flex = 'row',
  align = 'center',
  justify = 'between',
  children,
  ...rest
}: SectionHeaderProps) => {
  return (
    <Section as="header" flex={flex} align={align} justify={justify} {...rest}>
      {children}
    </Section>
  );
};
