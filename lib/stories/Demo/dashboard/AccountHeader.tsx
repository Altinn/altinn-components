import type { ReactNode } from 'react';
import { Avatar, type AvatarProps, type AvatarType, Flex, Heading, Section, Typography } from '../../../components';

interface AccountHeaderProps {
  type: AvatarType;
  name: string;
  currentAccount?: AvatarProps;
  children?: ReactNode;
}

export const AccountHeader = ({ currentAccount, type = 'person', name = 'Name', children }: AccountHeaderProps) => {
  return (
    <Section as="header" theme="default" padding="page" spacing={6} shadow="xs" bleed>
      <Flex direction="row" align="center" spacing={3}>
        <div style={{ position: 'relative' }}>
          <Avatar size="xl" type={type} name={name} />
          {currentAccount && (
            <div style={{ position: 'absolute', bottom: '-8px', left: '-8px' }}>
              <Avatar size="sm" {...currentAccount} outline={true} />
            </div>
          )}
        </div>
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
