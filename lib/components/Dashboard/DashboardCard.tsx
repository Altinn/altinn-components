import { Card } from '@digdir/designsystemet-react';
import type { ReactNode } from 'react';
import { DashboardIcon, type DashboardIconProps, Heading } from '..';
import { Skeleton } from '..';

export interface DashboardCardProps {
  color?: 'company' | 'person';
  theme?: 'default' | 'tinted';
  icon?: DashboardIconProps;
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
        {icon && <DashboardIcon loading={loading} icon={icon} size="lg" theme="default" />}
        <Heading size="lg" loading={loading}>
          {title}
        </Heading>
      </header>
      <Skeleton loading={loading}>{children}</Skeleton>
    </Card>
  );
}
