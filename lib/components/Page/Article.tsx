import type { ReactNode } from 'react';
import { Section, type SectionProps } from './Section';

export interface ArticleProps extends SectionProps {
  children?: ReactNode;
}

export const Article = ({ children, ...props }: ArticleProps) => {
  return (
    <Section as="article" {...props}>
      {children}
    </Section>
  );
};
