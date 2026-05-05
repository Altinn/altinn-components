import { useAccountMenu, useProfileLayout } from '../';
import type { LayoutProps } from '../../lib';
import type { AccountDataProps } from '../accounts';

interface UseProfileProps {
  defaultAccountId?: string;
  pageId?: string;
  currentAccount?: AccountDataProps;
  layout?: LayoutProps;
}

function getAccountIdFromUrl(): string {
  const parsedUrl = new URL(window.location.href);
  return parsedUrl.searchParams.get('accountId') ?? '';
}

export const useProfile = ({ defaultAccountId = 'user', pageId = 'profile' }): UseProfileProps => {
  const accountId = getAccountIdFromUrl() || defaultAccountId;

  const layout = useProfileLayout({
    accountId,
    pageId,
  });

  const { currentAccount } = useAccountMenu({ accountId });
  const menu = layout?.sidebar?.menu;
  const page = menu?.items?.find((item) => item.selected);

  const breadcrumbs = {
    items: [
      {
        label: 'Forside',
      },
      {
        label: 'Min profil',
      },
      {
        label: (page?.title as string) || 'Side',
      },
    ],
  };

  return {
    layout: {
      ...layout,
      breadcrumbs,
      color: 'person',
      theme: 'neutral',
    },
    currentAccount: currentAccount as AccountDataProps,
  };
};
