import type { Meta } from '@storybook/react-vite';
import { header, mobileMenu, useHeader } from '../../../examples';
import { GlobalHeader, type GlobalHeaderProps } from './';

const meta = {
  title: 'Layout/GlobalHeader',
  component: GlobalHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    ...header,
  },
} satisfies Meta<typeof GlobalHeader>;

export default meta;

export const Login = (args: GlobalHeaderProps) => {
  const header = useHeader({ ...args, accountId: null });
  return <GlobalHeader {...(header as GlobalHeaderProps)} />;
};

export const CurrentAccount = (args: GlobalHeaderProps) => {
  const header = useHeader({ ...args });
  return <GlobalHeader {...(header as GlobalHeaderProps)} />;
};

export const CompanyAccount = (args: GlobalHeaderProps) => {
  const header = useHeader({ ...args, accountId: 'diaspora' });
  return <GlobalHeader {...(header as GlobalHeaderProps)} />;
};

export const SubcompanyAccount = (args: GlobalHeaderProps) => {
  const header = useHeader({ ...args, accountId: 'diaspora-2' });
  return <GlobalHeader {...(header as GlobalHeaderProps)} />;
};

export const MobileMenu = (args: GlobalHeaderProps) => {
  const header = useHeader({ ...args, accountId: 'diaspora' });
  return <GlobalHeader {...(header as GlobalHeaderProps)} mobileMenu={mobileMenu} />;
};

export const WithCustomBadge = (args: GlobalHeaderProps) => {
  const header = useHeader({ ...args, accountId: 'diaspora' });
  return <GlobalHeader {...(header as GlobalHeaderProps)} badge={{ label: 'Beta', color: 'person' }} />;
};
