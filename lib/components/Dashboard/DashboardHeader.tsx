import type { ReactNode } from 'react';
import { Avatar, type AvatarProps, Flex, Heading, Section, Typography } from '..';
import { Skeleton } from '..';

export interface DashboardHeaderProps {
  type?: AvatarProps['type'];
  name: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  loading?: boolean;
}

export const DashboardHeader = ({ type, name, title, description, loading, children }: DashboardHeaderProps) => {
  return (
    <Section as="header" theme="default" padding="page" spacing={6} shadow="xs" bleed>
      <Flex direction="row" align="center" spacing={3}>
        <div style={{ position: 'relative' }}>
          <Avatar style={{ fontSize: '2.75rem' }} type={type} name={name} loading={loading} />
        </div>
        <Flex direction="col" spacing={0}>
          <Heading size="lg" loading={loading}>
            {title || name}
          </Heading>
          <Typography as="p" variant="subtle" size="xs" loading={loading}>
            {description || type}
          </Typography>
        </Flex>
      </Flex>
      <Skeleton loading={loading}>{children}</Skeleton>
    </Section>
  );
};
