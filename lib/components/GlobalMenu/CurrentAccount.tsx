import { MenuItem } from '../Menu';

export type Account = {
  id: string;
  type: 'person' | 'company';
  name: string;
  description?: string;
};

export type CurrentAccountProps = {
  account: Account;
  description?: string;
  as?: 'button' | 'div';
  onClick?: () => void;
  multipleAccounts?: boolean;
};

export const CurrentAccount = ({ account, multipleAccounts, as, onClick }: CurrentAccountProps) => {
  return (
    <MenuItem
      id="account"
      size="lg"
      interactive={!!multipleAccounts}
      as={!multipleAccounts ? 'div' : as}
      onClick={onClick}
      linkIcon={multipleAccounts}
      icon={{
        name: account.name,
        type: account.type,
      }}
      title={{ children: account?.name, size: 'sm', weight: 'medium' }}
      description={account?.description}
    />
  );
};
