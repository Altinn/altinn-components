import type { ReactNode } from 'react';
import { Heading, Section, type SectionProps } from '..';

export interface ArticleHeaderProps extends SectionProps {
  title?: ReactNode;
  children?: ReactNode;
}

export const ArticleHeader = ({ title, children }: ArticleHeaderProps) => {
  return (
    <Section as="header" spacing={2}>
      {title && <Heading size="xl">{title}</Heading>}
      {children}
    </Section>
  );
};
