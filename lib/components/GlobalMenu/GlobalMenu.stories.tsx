import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { globalMenu, loginMenu } from '../../examples';
import { GlobalMenu } from './GlobalMenu';

const meta = {
  title: 'GlobalMenu/GlobalMenu',
  component: GlobalMenu,
  tags: ['autodocs'],
  parameters: {},
  args: {
    ...globalMenu,
  },
} satisfies Meta<typeof GlobalMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = (args) => {
  const accounts = args.accounts;

  const [currentAccount, setCurrentAccount] = useState(accounts[0]);

  const onSelectAccount = (id) => {
    const account = accounts?.find((item) => item.id === id);
    setCurrentAccount(account);
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
