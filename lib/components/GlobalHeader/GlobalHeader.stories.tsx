import type { Meta } from '@storybook/react-vite';
import { header, mobileMenu, useHeader } from '../../../examples';
import { RootProvider } from '../RootProvider';
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
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} />
    </RootProvider>
  );
};

export const CurrentAccount = (args: GlobalHeaderProps) => {
  const header = useHeader({ ...args });
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} />
    </RootProvider>
  );
};

export const CompanyAccount = (args: GlobalHeaderProps) => {
  const header = useHeader({ ...args, accountId: 'diaspora' });
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} />
    </RootProvider>
  );
};

export const SubcompanyAccount = (args: GlobalHeaderProps) => {
  const header = useHeader({ ...args, accountId: 'diaspora-2' });
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} />
    </RootProvider>
  );
};

export const MobileMenu = (args: GlobalHeaderProps) => {
  const header = useHeader({ ...args, accountId: 'diaspora' });
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} mobileMenu={mobileMenu} />
    </RootProvider>
  );
};

export const WithCustomBadge = (args: GlobalHeaderProps) => {
  const header = useHeader({ ...args, accountId: 'diaspora' });
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} badge={{ label: 'Beta', color: 'person' }} />
    </RootProvider>
  );
};
