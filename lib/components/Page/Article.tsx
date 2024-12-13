import type { ReactNode } from 'react';
import { Section, type SectionProps } from './Section';

export interface ArticleProps extends SectionProps {
  children?: ReactNode;
}

export const Article = ({ theme = 'article', children, ...props }: ArticleProps) => {
  return (
    <Section as="article" theme={theme} {...props}>
      {children}
    </Section>
  );
};
