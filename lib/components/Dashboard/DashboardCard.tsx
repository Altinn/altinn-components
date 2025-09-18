import { Card } from '@digdir/designsystemet-react';
import type { ReactNode } from 'react';
import { Heading, MenuItemIcon, type MenuItemIconProps, Typography } from '..';

export interface DashboardCardProps {
  color?: 'company' | 'person';
  theme?: 'default' | 'tinted';
  icon?: MenuItemIconProps;
  href?: string;
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
  href,
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
        {icon && <MenuItemIcon loading={loading} icon={icon} size="lg" theme="default" />}
        <Heading size="lg" loading={loading}>
          {href ? <a href={href}>{title}</a> : title}
        </Heading>
      </header>
      <Typography size="sm" loading={loading}>
        {children}
      </Typography>
    </Card>
  );
}
