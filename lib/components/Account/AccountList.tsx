import { Fragment } from 'react';
import { AccountListItem, type AccountListItemProps, Heading, List, Section, Typography } from '..';

export interface AccountListGroupProps {
  title?: string;
  divider?: boolean;
}

export interface AccountListProps {
  items: AccountListItemProps[];
  groups?: Record<string, AccountListGroupProps>;
}

export const AccountList = ({ items, groups }: AccountListProps) => {
  if (!items || items.length === 0) {
    return (
      <Section>
        <Heading size="lg">Ingen treff</Heading>
        <Typography>Ingen treff på søket ditt.</Typography>
      </Section>
    );
  }

  if (groups) {
    return (
      <Section spacing={6}>
        {Object.entries(groups).map(([groupId, group]) => {
          const { title } = group;
          const groupItems = items.filter((item) => item.groupId === groupId && !item.hidden);
          if (groupItems.length === 0) return null;
          return (
            <Fragment key={groupId}>
              {title && <Heading size="lg">{title}</Heading>}
              <List>
                {groupItems.map((item) => (
                  <AccountListItem {...item} key={item.id} />
                ))}
              </List>
            </Fragment>
          );
        })}
      </Section>
    );
  }

  return (
    <List>
      {items
        .filter((item) => !item?.hidden)
        .map((item) => (
          <AccountListItem {...item} key={item.id} />
        ))}
    </List>
  );
};
