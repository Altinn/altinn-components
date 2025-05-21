import type { ReactNode } from 'react';

import { type Color, ContactButtons, type ContactButtonsProps, Heading, Section, type Theme, Typography } from '..';

export interface ArticleContactProps {
  id?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  items: ContactButtonsProps['items'];
  color?: Color;
  theme?: Theme;
}

export const ArticleContact = ({
  color,
  theme = 'subtle',
  title,
  description,
  children,
  items,
}: ArticleContactProps) => {
  return (
    <Section theme={theme} color={color} padding={6} shadow="xs" spacing={4}>
      {title && <Heading size="lg">{title}</Heading>}
      <Typography size="sm">{children || <p>{description}</p>}</Typography>
      {items && <ContactButtons items={items} />}
    </Section>
  );
};
