import type { ReactNode } from 'react';
import { type Color, Section } from '..';

export interface ArticleProps {
  color?: Color;
  children?: ReactNode;
}

export const Article = ({ color, children }: ArticleProps) => {
  return (
    <Section as="article" color={color} spacing={6}>
      {children}
    </Section>
  );
};
