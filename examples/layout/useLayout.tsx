import { header as defaultHeader, footer, useHeader } from '..';
import type { AccountListItemProps, HeaderProps, LayoutProps } from '../../lib';

interface UseLayoutProps extends LayoutProps {
  accounts?: AccountListItemProps[];
  accountId?: string;
}
export const useLayout = ({
  accounts,
  accountId,
  color = 'company',
  theme = 'default',
  header = defaultHeader,
  sidebar,
}: UseLayoutProps): LayoutProps => {
  const headerProps = useHeader({ ...header, accounts, accountId });

  return {
    color,
    theme,
    footer,
    header: headerProps as HeaderProps,
    sidebar,
  };
};
