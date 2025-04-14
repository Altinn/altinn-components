import { Card } from '@digdir/designsystemet-react';
import type { ReactNode } from 'react';
import { Heading, Icon, type IconProps } from '..';

export interface DashboardCardProps {
  color?: 'company' | 'person';
  theme?: 'default' | 'tinted';
  icon?: IconProps;
  title?: ReactNode;
  children?: ReactNode;
}

export function DashboardCard({ color, theme = 'tinted', icon, title, children }: DashboardCardProps) {
  return (
    <Card data-color={color} variant={theme}>
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          rowGap: '1rem',
        }}
      >
        {icon && <Icon {...icon} size="xl" theme="default" />}
        <Heading size="lg">{title}</Heading>
      </header>
      {children}
    </Card>
  );
}
