import { type Account, Flex, GlobalMenuButton_old } from '..';
import { useAccountMenu } from '../../../examples';

const meta = {
  title: 'Account',
  parameters: {},
};

export default meta;

export const CurrentAccount = () => {
  const { currentAccount } = useAccountMenu({ accountId: 'user' });

  return (
    <Flex spacing={2} align="center">
      <GlobalMenuButton_old currentAccount={{ ...currentAccount, type: 'person' } as Account} />
    </Flex>
  );
};

export const CompanyAccount = () => {
  const { currentAccount } = useAccountMenu({ accountId: 'diaspora' });

  return (
    <Flex spacing={2} align="center">
      <GlobalMenuButton_old currentAccount={{ ...currentAccount, type: 'company' } as Account} />
    </Flex>
  );
};

export const Login = () => {
  return (
    <Flex spacing={2} align="center">
      <GlobalMenuButton_old />
    </Flex>
  );
};
