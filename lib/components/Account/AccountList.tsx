import { Fragment } from 'react';
import { AccountListItem, type AccountListItemProps, Heading, List, Section } from '..';
import { useMenu } from '../../hooks';
import { AccountListVirtual } from './AccountListVirtual';

export interface AccountListGroupProps {
  title?: string;
  divider?: boolean;
}

export interface AccountListProps {
  items: AccountListItemProps[];
  groups?: Record<string, AccountListGroupProps>;
  sortGroupBy?: (a: [string, AccountListItemProps[]], b: [string, AccountListItemProps[]]) => number;
  emptyTitle?: string;
  emptyDescription?: string;
  isVirtualized?: boolean;
}

export const AccountList = ({ items, groups = {}, sortGroupBy, isVirtualized }: AccountListProps) => {
  if (isVirtualized) {
    return <AccountListVirtual items={items} groups={groups} sortGroupBy={sortGroupBy} />;
  }

  const { menu } = useMenu<AccountListItemProps, AccountListGroupProps>({
    items,
    groups,
    groupByKey: 'groupId',
    keyboardEvents: false,
    sortGroupBy,
  });

  return (
    <Section spacing={6}>
      {menu?.map((group, groupIndex) => {
        const groupProps = group.props || {};

        return (
          <Fragment key={groupIndex}>
            {groupProps?.title && <Heading size="lg">{groupProps.title as string}</Heading>}
            <List>
              {group?.items.map((item, index) => {
                const itemProps = item.props || {};
                return <AccountListItem {...itemProps} key={index} />;
              })}
            </List>
          </Fragment>
        );
      })}
    </Section>
  );
};
