import { type AccountMenuItemProps, GlobalAccountButton } from '..';
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

  return <GlobalAccountButton currentAccount={{ ...currentAccount, type: 'person' } as AccountMenuItemProps} />;
};

export const CompanyAccount = () => {
  const { currentAccount } = useAccountMenu({ accountId: 'diaspora' });

  return <GlobalAccountButton currentAccount={{ ...currentAccount, type: 'company' } as AccountMenuItemProps} />;
};

export const Login = () => {
  return <GlobalAccountButton />;
};
