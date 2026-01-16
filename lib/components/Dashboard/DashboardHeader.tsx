import type { ReactNode } from 'react';
import { Flex, Heading, Section, Typography } from '..';
import { Skeleton } from '..';
import { ItemMedia, type ItemMediaProps } from '../Item';
import styles from './dashboardHeader.module.css';

export interface DashboardHeaderProps {
  icon?: ItemMediaProps['icon'];
  title?: string;
  description?: string;
  children?: ReactNode;
  loading?: boolean;
}

export const DashboardHeader = ({ icon, title, description, loading, children }: DashboardHeaderProps) => {
  return (
    <Section as="header" theme="default" padding="page" spacing={6} shadow="xs">
      <Flex direction="row" align="center" spacing={3}>
        {icon && <ItemMedia loading={loading} icon={icon} className={styles.icon} />}
        <Flex direction="col" spacing={0}>
          <Heading size="lg" loading={loading}>
            {title}
          </Heading>
          <Typography as="section" variant="subtle" size="xs" loading={loading}>
            {description}
          </Typography>
        </Flex>
      </Flex>
      <Skeleton loading={loading}>{children}</Skeleton>
    </Section>
  );
};
