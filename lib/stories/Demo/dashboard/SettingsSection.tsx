import { Section, type SectionProps } from '../../../components';

export const SettingsSection = ({ bg = 'default', style, children }: SectionProps) => {
  return (
    <Section theme={bg} padding="page" spacing={6} shadow="sm" style={style} bleed>
      {children}
    </Section>
  );
};
