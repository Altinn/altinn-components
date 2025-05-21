import { Section, type SectionProps } from '..';

export interface SettingsProps extends SectionProps {
  as?: SectionProps['as'];
  color?: SectionProps['color'];
  theme?: SectionProps['theme'];
  size?: SectionProps['size'];
  children?: SectionProps['children'];
}

export const Settings = ({
  size = 'sm',
  theme = 'default',
  padding = 4,
  spacing = 6,
  shadow = 'xs',
  as,
  color,
  children,
}: SettingsProps) => {
  return (
    <Section as={as} size={size} color={color} theme={theme} padding={padding} spacing={spacing} shadow={shadow}>
      {children}
    </Section>
  );
};
