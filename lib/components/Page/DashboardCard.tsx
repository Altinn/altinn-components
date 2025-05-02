import { Card } from '@digdir/designsystemet-react';
import type { ReactNode } from 'react';
import { Heading, Icon, type IconProps } from '..';
import { Skeleton } from '..';

export interface DashboardCardProps {
  color?: 'company' | 'person';
  theme?: 'default' | 'tinted';
  icon?: IconProps;
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
  loading?: boolean;
}

export function DashboardCard({
  color,
  theme = 'tinted',
  icon,
  title,
  children,
  loading,
  className,
}: DashboardCardProps) {
  return (
    <Card data-color={color} variant={theme} className={className}>
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          rowGap: '1rem',
        }}
      >
        {icon && <Icon loading={loading} {...icon} size="xl" theme="default" />}
        <Heading size="lg" loading={loading}>
          {title}
        </Heading>
      </header>
      <Skeleton loading={loading}>{children}</Skeleton>
    </Card>
  );
}
