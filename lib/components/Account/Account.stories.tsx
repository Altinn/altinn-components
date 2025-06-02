import { type Account, Flex, GlobalMenuButton, Menu } from '..';
import { defaultAccounts, useAccountMenu } from '../../../examples';

const meta = {
  title: 'Account',
  parameters: {},
};

export default meta;

export const CurrentAccount = () => {
  const accountList = useAccountMenu({ accounts: defaultAccounts });
  const currentAccount = accountList?.items[0] as Account;

  return (
    <Flex spacing={2} align="center">
      <Menu items={[{ ...currentAccount, size: 'lg' }]} />
      <GlobalMenuButton currentAccount={currentAccount} />
    </Flex>
  );
};

export const CompanyAccount = () => {
  const accountList = useAccountMenu({ accounts: defaultAccounts });
  const currentAccount = accountList?.items[1] as Account;

  return (
    <Flex spacing={2} align="center">
      <Menu items={[{ ...currentAccount, size: 'lg' }]} />
      <GlobalMenuButton currentAccount={currentAccount} />
    </Flex>
  );
};

export const Login = () => {
  return (
    <Flex spacing={2} align="center">
      <GlobalMenuButton />
    </Flex>
  );
};
