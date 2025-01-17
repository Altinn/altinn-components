import { useState } from 'react';
import { AccountListItem, DashboardSection } from '.';
import { Button, Flex, Heading, Section, TextField, Typography } from '../../../components';

export const AccountDetails = () => {
  return (
    <Section padding={4} spacing={4}>
      <Flex direction="col" spacing={2}>
        <Typography size="sm">
          <h6>Roller og rettigheter</h6>
          <p>Daglig leder, Styremedlem</p>
          <h6>E-post</h6>
          <p>
            mathias.dyngeland@brann.no &rarr; <a href="#">Endre kontaktinformasjon</a>
          </p>
          <h6>Varslinger</h6>
          <p>
            Alle varslinger &rarr; <a href="#">Endre</a>
          </p>
        </Typography>
      </Flex>
    </Section>
  );
};

export const AccountList = ({ expandedId, onToggle, items }) => {
  return (
    <Flex direction="col" spacing="xs">
      {items?.map((item, index) => {
        return (
          <AccountListItem {...item} description="E-post og sms" expanded={expandedId === item.id} key={item.id} onClick={() => onToggle(item.id)}>
            {expandedId === item.id ? <AccountDetails /> : null}
          </AccountListItem>
        );
      })}
    </Flex>
  );
};

export const AccountsSection = ({ items }) => {
  const favourites = items?.filter((item) => item.groupId === 'favourites');
  const others = items?.filter((item) => item.groupId !== 'favourites');

  const [expandedId, setExpandedId] = useState<string>('');

  const onToggle = (id: string) => {
    setExpandedId((prevState) => {
      if (prevState === id) {
        return '';
      }
      return id;
    });
  };

  return (
    <DashboardSection theme="surface-hover">
      <Heading>Favoritter</Heading>
      <AccountList items={favourites} onToggle={onToggle} expandedId={expandedId} />
      <Heading>Andre kontoer</Heading>
      <AccountList items={others} onToggle={onToggle} expandedId={expandedId} />
    </DashboardSection>
  );
};
