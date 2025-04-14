import { AccountListItem, type AccountListItemProps, ListBase } from '..';

export interface AccountListProps {
  items: AccountListItemProps[];
}

export const AccountList = ({ items }: AccountListProps) => {
  return (
    <ListBase>
      {items?.map((item) => {
        return (
          <AccountListItem {...item} key={item.id}>
            Details
          </AccountListItem>
        );
      })}
    </ListBase>
  );
};
