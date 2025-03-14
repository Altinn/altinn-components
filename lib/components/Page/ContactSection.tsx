import type { ReactNode } from 'react';

import { Button, type ButtonProps, type Color, Flex, Heading, Section, type Theme, Typography } from '..';

export type ContactSectionVariant = 'inline' | 'card';

export interface ContactSectionProps {
  id?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  items: ButtonProps[];
  variant?: ContactSectionVariant;
  color?: Color;
  theme?: Theme;
}

export const ContactSection = ({
  theme,
  color,
  variant = 'inline',
  title,
  description,
  children,
  items,
}: ContactSectionProps) => {
  return (
    <Section
      direction="col"
      theme={theme}
      color={color}
      padding={variant === 'card' ? 'page' : 0}
      shadow={variant === 'card' ? 'xs' : 'none'}
      spacing={4}
    >
      {title && <Heading size="lg">{title}</Heading>}
      <Typography>{children || <p>{description}</p>}</Typography>
      {items && (
        <Flex spacing={2}>
          {items.map((item, index) => {
            return <Button {...item} variant="outline" key={index} />;
          })}
        </Flex>
      )}
    </Section>
  );
};
