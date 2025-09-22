import type { Meta } from '@storybook/react-vite';
import { Header, type HeaderProps } from '../';
import { header, mobileMenu, useHeader } from '../../../examples';

const meta = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    ...header,
    search: {
      name: 'inbox-search',
      placeholder: 'Søk i Altinn',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

export const Login = (args: HeaderProps) => {
  const header = useHeader({ ...args, accountId: null });
  return <Header {...(header as HeaderProps)} />;
};

export const CurrentAccount = (args: HeaderProps) => {
  const header = useHeader({ ...args });
  return <Header {...(header as HeaderProps)} />;
};

export const CompanyAccount = (args: HeaderProps) => {
  const header = useHeader({ ...args, accountId: 'diaspora' });
  return <Header {...(header as HeaderProps)} />;
};

export const SubcompanyAccount = (args: HeaderProps) => {
  const header = useHeader({ ...args, accountId: 'diaspora-2' });
  return <Header {...(header as HeaderProps)} />;
};

export const MobileMenu = (args: HeaderProps) => {
  const header = useHeader({ ...args, accountId: 'diaspora' });
  return <Header {...(header as HeaderProps)} mobileMenu={mobileMenu} />;
};
