import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { globalMenu, loginMenu } from '../../../examples';
import type { Account } from './AccountButton.tsx';
import { GlobalMenu, type GlobalMenuProps } from './GlobalMenu';

const meta = {
  title: 'Menu/GlobalMenu',
  component: GlobalMenu,
  tags: ['autodocs'],
  parameters: {},
  args: {
    ...globalMenu,
  },
} satisfies Meta<typeof GlobalMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = (args: GlobalMenuProps) => {
  const accounts = args.accounts!;
  const [currentAccount, setCurrentAccount] = useState<Account>(accounts[0]);

  const onSelectAccount = (id: string) => {
    const account = accounts?.find((item) => item.id === id);
    if (account) {
      setCurrentAccount(account);
    }
  };

  return (
    <GlobalMenu
      {...args}
      currentAccount={{
        ...currentAccount,
        description: currentAccount.type === 'person' ? 'Fødselsnr. XXXXXX YYYYY' : 'Org. nr',
      }}
      onSelectAccount={onSelectAccount}
    />
  );
};

export const Login: Story = {
  args: {
    ...loginMenu,
  },
};
