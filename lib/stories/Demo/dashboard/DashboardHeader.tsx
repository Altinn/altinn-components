import type { ReactNode } from 'react';
import { Avatar, type AvatarType, Flex, Heading, Section, Typography } from '../../../components';

interface DashboardHeaderProps {
  type: AvatarType;
  name: string;
  children: ReactNode;
}

export const DashboardHeader = ({ type = 'person', name = 'Name', children }: DashboardHeaderProps) => {
  return (
    <Section as="header" theme="default" padding="page" spacing={6} shadow="xs" bleed>
      <Flex direction="row" align="center" spacing={3}>
        <Avatar size="xl" type={type} name={name} />
        <Flex direction="col">
          <Heading size="lg">{name}</Heading>
          <Typography size="xs">
            {type === 'person' ? <p>Fødselsnummer: 26.06.1966 XX.XX.XX</p> : <p>Org nr. 54564564654</p>}
          </Typography>
        </Flex>
      </Flex>
      {children}
    </Section>
  );
};
