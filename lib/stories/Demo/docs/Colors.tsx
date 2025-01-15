import type { ReactNode } from 'react';
import { type Color, Flex, Section, type Theme, Typography } from '../../../components';

const colors = ['accent', 'neutral', 'company', 'person', 'success', 'warning', 'danger', 'info', 'alert'] as Color[];
const themes = [
  'default',
  'subtle',
  'surface-default',
  'surface-hover',
  'surface-active',
  'border-subtle',
  'border-default',
  'border-strong',
  'base-default',
  'base-hover',
  'base-active',
] as Theme[];

const ColorSwatch = ({ color, theme, children }: { color: Color; theme: Theme; children: ReactNode }) => {
  return (
    <Section color={color} theme={theme} padding={2} style={{ width: '100%' }}>
      {children}
    </Section>
  );
};

export const Colors = () => {
  return (
    <Flex direction="col" spacing={4}>
      {colors.map((color) => {
        return (
          <Flex key={color} direction="col" spacing={2}>
            <Typography size="xs">{color}</Typography>
            <Flex color={color} style={{ flex: 1 }}>
              {themes.map((theme) => {
                return (
                  <ColorSwatch key={theme} theme={theme} color={color}>
                    {theme}
                  </ColorSwatch>
                );
              })}
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
