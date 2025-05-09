import { ChevronRightIcon } from '@navikt/aksel-icons';
import { MenuItemBase, MenuItemIcon, MenuItemLabel } from '../Menu';
import styles from './accountButton.module.css';

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
      <MenuItemBase size="lg" onClick={onClick} linkText={linkText} linkIcon={ChevronRightIcon} as="button">
        <MenuItemIcon
          size="lg"
          icon={{
            name: account.name,
            type: account.type,
          }}
        />
        <MenuItemLabel
          className={styles.label}
          size="md"
          title={account?.name}
          weight="medium"
          description={account?.description}
        />
      </MenuItemBase>
    );
  }

  return (
    <MenuItemBase size="lg" as="div">
      <MenuItemIcon
        size="lg"
        icon={{
          name: account.name,
          type: account.type,
        }}
      />
      <MenuItemLabel
        className={styles.label}
        size="md"
        title={account?.name}
        weight="medium"
        description={account?.description}
      />
    </MenuItemBase>
  );
};
