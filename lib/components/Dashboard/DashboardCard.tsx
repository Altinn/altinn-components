import { Card } from '@digdir/designsystemet-react';
import type { ReactNode } from 'react';
import { Heading, Typography } from '..';
import { ItemMedia, type ItemMediaProps } from '../Item';
import styles from './dashboardCard.module.css';

export interface DashboardCardProps {
  color?: 'company' | 'person';
  theme?: 'default' | 'tinted';
  icon?: ItemMediaProps['icon'];
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
        {icon && <ItemMedia loading={loading} icon={icon} className={styles.icon} />}
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
