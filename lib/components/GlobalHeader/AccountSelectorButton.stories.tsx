import type { Meta, StoryObj } from '@storybook/react-vite';
import { RootProvider } from '..';
import { AccountSelectorButton } from './AccountSelectorButton';

const meta = {
  title: 'Layout/AccountSelectorButton',
  component: AccountSelectorButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    currentAccount: {
      id: '1',
      name: 'Mathias Dyngeland',
      description: 'Født: 01.01.1990',
      type: 'person',
      icon: {
        type: 'person',
        name: 'Mathias Dyngeland',
      },
    },
    minimized: false,
    expanded: false,
  },
  argTypes: {
    minimized: { control: 'boolean' },
    expanded: { control: 'boolean' },
  },
} satisfies Meta<typeof AccountSelectorButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    currentAccount: undefined,
  },
};

export const LoginWithEnglishText = () => {
  return (
    <RootProvider languageCode="en">
      <AccountSelectorButton currentAccount={undefined} minimized={false} expanded={false} />
    </RootProvider>
  );
};

export const Person: Story = {
  args: {
    currentAccount: {
      id: '1',
      name: 'Mathias Dyngeland',
      description: 'Født: 01.01.1990',
      type: 'person',
      icon: {
        type: 'person',
        name: 'Mathias Dyngeland',
      },
    },
  },
};

export const Company: Story = {
  args: {
    currentAccount: {
      id: '1',
      name: 'Diaspora Bergensis',
      description: 'Org.nr: 987654321',
      type: 'company',
      icon: {
        type: 'company',
        name: 'Diaspora Bergensis',
      },
    },
  },
};

export const Expanded: Story = {
  args: {
    expanded: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const MinimizedForMobile: Story = {
  args: {
    currentAccount: {
      id: '1',
      name: 'Diaspora Bergensis',
      description: 'Org.nr: 987654321',
      type: 'company',
      icon: {
        type: 'company',
        name: 'Diaspora Bergensis',
      },
    },
    minimized: true,
  },
};
