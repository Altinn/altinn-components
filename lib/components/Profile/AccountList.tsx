import { AccountListItem, type AccountListItemProps, List } from '..';

export interface AccountListProps {
  items: AccountListItemProps[];
}

export const AccountList = ({ items }: AccountListProps) => {
  return (
    <List>
      {items.map((item) => {
        return <AccountListItem {...item} key={item.id} />;
      })}
    </List>
  );
};
