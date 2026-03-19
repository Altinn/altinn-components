import { type Account, GlobalAccountButton, GlobalMenuButton_old } from '..';
import { useAccountMenu } from '../../../examples';

const meta = {
  title: 'Account',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const CurrentAccount = () => {
  const { currentAccount } = useAccountMenu({ accountId: 'user' });

  return <GlobalAccountButton currentAccount={{ ...currentAccount, type: 'person' } as Account} />;
};

export const CompanyAccount = () => {
  const { currentAccount } = useAccountMenu({ accountId: 'diaspora' });

  return <GlobalAccountButton currentAccount={{ ...currentAccount, type: 'company' } as Account} />;
};

export const Login = () => {
  return <GlobalAccountButton />;
};

export const DeprecatedCurrentAccount = () => {
  const { currentAccount } = useAccountMenu({ accountId: 'user' });

  return <GlobalMenuButton_old currentAccount={{ ...currentAccount, type: 'person' } as Account} />;
};

export const DeprecatedCompanyAccount = () => {
  const { currentAccount } = useAccountMenu({ accountId: 'diaspora' });

  return <GlobalMenuButton_old currentAccount={{ ...currentAccount, type: 'company' } as Account} />;
};

export const DeprecatedLogin = () => {
  return <GlobalMenuButton_old />;
};
