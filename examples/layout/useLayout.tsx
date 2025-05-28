import { footer, header as defaultHeader, useHeader } from "..";
import type { LayoutProps, HeaderProps, AccountListItemProps } from "../../lib";

interface UseLayoutProps extends LayoutProps {
  accounts?: AccountListItemProps[];
  accountId?: string;
}
export const useLayout = ({
  accounts,
  accountId,
  color = "company",
  theme = "default",
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
