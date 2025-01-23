import type { ReactNode } from 'react';
import { Icon, type IconName, Avatar, Flex, Heading, Section, Typography } from '../../../components';

interface PageHeaderProps {
  icon: IconName;
  title: string;
  currentAccount?: AvatarProps;
  children?: ReactNode;
}

export const PageHeader = ({ currentAccount, icon, title = "Title", description = "Description", children }: PageHeaderProps) => {
  return (
    <Section as="header" theme="default" padding="page" spacing={6} shadow="xs" bleed>
      <Flex direction="row" align="center" spacing={3}>
        <div style={{ position: 'relative' }}>
          <Icon size="xl" name={icon} theme="subtle" />
          {currentAccount && (
            <div style={{ position: 'absolute', bottom: '-8px', left: '-8px' }}>
              <Avatar size="sm" {...currentAccount} outline={true} />
            </div>
          )}
        </div>
        <Flex direction="col">
          <Heading size="lg">{title}</Heading>
          <Typography size="xs">
            <p>Descr.</p>
          </Typography>
        </Flex>
      </Flex>
      {children}
    </Section>
  );
};
