import { MenuItemBase, MenuItemLabel, MenuItemMedia } from '../Menu';

export type Account = {
  id: string;
  type: 'person' | 'company';
  name: string;
  description?: string;
};

export type AccountButtonProps = {
  account: Account;
  description?: string;
  linkText?: string;
  onClick?: () => void;
};

export const AccountButton = ({ account, linkText, onClick }: AccountButtonProps) => {
  return (
    <MenuItemBase size="lg" onClick={onClick} linkText={linkText} linkIcon="arrow-right">
      <MenuItemMedia
        size="lg"
        avatar={{
          name: account.name,
          type: account.type,
        }}
      />
      <MenuItemLabel size="lg" title={account?.name} description={account?.description} />
    </MenuItemBase>
  );
};
