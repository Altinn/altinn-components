import { Button, type ButtonProps, type Color, Flex, Heading, Section, type Theme, Typography } from '..';

export type ContactSectionVariant = 'inline' | 'card';

export interface ContactSectionProps {
  title: string;
  description?: string;
  items?: ButtonProps[];
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
      <Flex direction="col">
        <Heading size="lg">{title}</Heading>
        {description && <Typography>{description}</Typography>}
      </Flex>
      {items && (
        <Flex spacing={2}>
          {items.map((item, index) => {
            return (
              <Button key={index} variant="outline" icon={item?.icon}>
                {item.label}
              </Button>
            );
          })}
        </Flex>
      )}
    </Section>
  );
};
