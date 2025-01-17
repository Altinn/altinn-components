import { MenuItemBase, MenuItemIcon, MenuItemLabel } from '../Menu';

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
  multipleAccounts?: boolean;
};

export const AccountButton = ({ account, linkText, onClick, multipleAccounts }: AccountButtonProps) => {
  if (multipleAccounts) {
    return (
      <MenuItemBase size="lg" onClick={onClick} linkText={linkText} linkIcon="chevron-right" as="button">
        <MenuItemIcon
          size="xl"
          avatar={{
            name: account.name,
            type: account.type,
          }}
        />
        <MenuItemLabel size="lg" title={account?.name} description={account?.description} />
      </MenuItemBase>
    );
  }

  return (
    <MenuItemBase size="lg" as="div">
      <MenuItemIcon
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
