import { Section, type SectionProps } from '..';
import styles from './settingsSection.module.css';

export interface SettingsSectionProps extends SectionProps {
  as?: SectionProps['as'];
  color?: SectionProps['color'];
  theme?: SectionProps['theme'];
  size?: SectionProps['size'];
  children?: SectionProps['children'];
}

export const SettingsSection = ({
  size = 'sm',
  theme = 'default',
  padding = 4,
  spacing = 6,
  shadow = 'xs',
  as,
  color,
  children,
}: SettingsSectionProps) => {
  return (
    <Section
      as={as}
      size={size}
      color={color}
      theme={theme}
      padding={padding}
      spacing={spacing}
      shadow={shadow}
      className={styles.section}
    >
      {children}
    </Section>
  );
};
