import type { ReactNode } from 'react';
import { Avatar, type AvatarProps, Flex, Heading, Section, Typography } from '..';

export interface DashboardHeaderProps {
  type?: AvatarProps['type'];
  name: string;
  title?: string;
  description?: string;
  children?: ReactNode;
}

export const DashboardHeader = ({ type, name, title, description, children }: DashboardHeaderProps) => {
  return (
    <Section as="header" theme="default" padding="page" spacing={6} shadow="xs" bleed>
      <Flex direction="row" align="center" spacing={3}>
        <div style={{ position: 'relative' }}>
          <Avatar size="xl" type={type} name={name} />
        </div>
        <Flex direction="col">
          <Heading size="lg">{title || name}</Heading>
          <Typography theme="subtle" size="xs">
            <p>{description || type}</p>
          </Typography>
        </Flex>
      </Flex>
      {children}
    </Section>
  );
};
