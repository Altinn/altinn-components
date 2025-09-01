import { defaultAccounts, header as defaultHeader, footer, skipLink, useHeader } from '..';
import type { AccountListItemProps, HeaderProps, LayoutProps, MenuProps } from '../../lib';

interface UseLayoutProps extends LayoutProps {
  accounts?: AccountListItemProps[];
  accountId?: string | null;
  menu?: MenuProps;
}
export const useLayout = ({
  accounts = defaultAccounts,
  accountId,
  color = 'company',
  theme = 'default',
  header = defaultHeader,
  sidebar,
  menu,
}: UseLayoutProps): LayoutProps => {
  const headerProps = useHeader({ ...header, accounts, accountId, menu });

  return {
    color,
    theme,
    skipLink,
    footer,
    header: headerProps as HeaderProps,
    sidebar,
  };
};
