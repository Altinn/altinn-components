import type { ReactNode } from 'react';
import {Icon, type SvgElement, Avatar, Flex, Heading, Section, Typography, AvatarProps} from '../../../components';

interface PageHeaderProps {
  icon: SvgElement;
  title: string;
  description?: string;
  currentAccount?: AvatarProps;
  children?: ReactNode;
}

export const PageHeader = ({ currentAccount, icon, title = "Title", description = "Description", children }: PageHeaderProps) => {
  return (
    <Section as="header" theme="default" padding="page" spacing={6} shadow="xs" bleed>
      <Flex direction="row" align="center" spacing={3}>
        <div style={{ position: 'relative' }}>
          <Icon size="xl" svgElement={icon} theme="subtle" />
          {currentAccount && (
            <div style={{ position: 'absolute', bottom: '-8px', left: '-8px' }}>
              <Avatar size="sm" {...currentAccount} outline={true} />
            </div>
          )}
        </div>
        <Flex direction="col">
          <Heading size="lg">{title}</Heading>
          <Typography size="xs" as="p">
            {description}
          </Typography>
        </Flex>
      </Flex>
      {children}
    </Section>
  );
};
