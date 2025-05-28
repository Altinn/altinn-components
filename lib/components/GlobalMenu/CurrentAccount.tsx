import { ChevronRightIcon } from '@navikt/aksel-icons';
import { Button } from '../Button';
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
  linkText?: string;
  onClick?: () => void;
  multipleAccounts?: boolean;
};

export const CurrentAccount = ({ account, as, onClick, linkText }: CurrentAccountProps) => {
  return (
    <MenuItem
      id="account"
      size="lg"
      as={as}
      onClick={onClick}
      controls={
        linkText && (
          <Button as="div" icon={ChevronRightIcon} reverse variant="outline" size="xs">
            {linkText}
          </Button>
        )
      }
      icon={{
        name: account.name,
        type: account.type,
      }}
      title={{ children: account?.name, size: 'sm', weight: 'medium' }}
      description={account?.description}
    />
  );
};
