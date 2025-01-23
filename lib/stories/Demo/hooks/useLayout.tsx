import { useAppContext } from '../';
import { footer, header, loginMenu, sitemap } from '../data';
import { useSearch } from '../hooks';

export const useLayout = () => {
  const { accounts, currentAccount, setAccountId, pageId, setPageId } = useAppContext();

  const menuItems = sitemap.map((item) => {
    return {
      ...item,
      onClick: () => setPageId?.(item.id),
    };
  });

  const parents = pageId?.split('/');
  const parentId = parents?.[0];

  const menu = currentAccount
    ? {
        items: menuItems,
        currentAccount,
        accounts,
        onSelectAccount: setAccountId,
      }
    : loginMenu;

  const search = useSearch({ parentId });

  return {
    header: {
      ...header,
      search,
      currentAccount,
      menu: {
        ...menu,
        menuLabel: "Meny",
        backLabel: "Tilbake",
        logoutButton: { label: 'Logg ut' },
        changeLabel: 'Endre',
      },
    },
    footer,
  };
};
