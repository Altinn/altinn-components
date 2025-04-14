import type { ReactNode } from 'react';
import { PageDetails, Section, Typography } from '..';

export interface AccordionItemProps {
  id: string;
  title: string;
  children: ReactNode;
}

export interface AccordionSectionProps {
  items?: AccordionItemProps[];
}

export const AccordionSection = ({ items }: AccordionSectionProps) => {
  return (
    <Section>
      {items?.map((item) => {
        const { id, title, children } = item;
        return (
          <PageDetails summary={title} key={id}>
            <Typography>{children}</Typography>
          </PageDetails>
        );
      })}
    </Section>
  );
};
