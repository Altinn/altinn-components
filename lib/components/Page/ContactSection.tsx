import type { ReactNode } from 'react';

import {
  type Color,
  ContactButtons,
  type ContactButtonsProps,
  Heading,
  Section,
  type Theme,
  Typography,
  type TypographyProps,
} from '..';

export type ContactSectionVariant = 'inline' | 'card';

export interface ContactSectionProps {
  id?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  items: ContactButtonsProps['items'];
  variant?: ContactSectionVariant;
  typographyProps?: TypographyProps;
  color?: Color;
  theme?: Theme;
}

export const ContactSection = ({
  variant = 'inline',
  theme,
  color,
  typographyProps,
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
      <Typography {...typographyProps}>{children || <p>{description}</p>}</Typography>
      {items && <ContactButtons items={items} />}
    </Section>
  );
};
