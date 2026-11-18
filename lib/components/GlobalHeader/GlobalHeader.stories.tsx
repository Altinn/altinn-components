import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import {
  getAuthorizedPartiesData,
  getSyntheticAuthorizedPartiesData,
  header,
  useGlobalHeader,
  useGlobalMenu,
} from '../../../examples';
import { useAccountSelector } from '../../hooks';
import type { AccountSelectorProps } from '../AccountSelector';
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

export const Login = () => {
  const header = useGlobalHeader({ state: 'loggedOut' });
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} />
    </RootProvider>
  );
};

export const LoggedIn = () => {
  const globalMenu = useGlobalMenu({ accountId: 'diaspora' });

  // Use the useAccountSelector hook to get account menu and loading state
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(
    '167536b5-f8ed-4c5a-8f48-0279507e53ae',
  );
  const authorizedParties = getAuthorizedPartiesData(); // Fetch your authorized parties data from external source
  const selfAccountUuid = '167536b5-f8ed-4c5a-8f48-0279507e53ae';
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids((prev) => (prev.includes(uuid) ? prev.filter((id) => id !== uuid) : [...prev, uuid]));
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid,
    currentAccountUuid: currentAccountUuid,
    onSelectAccount: (accountId: string) => {
      setCurrentAccountUuid(accountId);
    },
    languageCode: 'nb',
    isLoading: false,
  });
  return (
    <RootProvider>
      <GlobalHeader globalMenu={globalMenu} accountSelector={accountSelector} />
    </RootProvider>
  );
};

export const MenuIsNavigation = {
  // Behaviour only, the look is covered by the stories above.
  parameters: { screenshot: { skip: true } },
  render: () => {
    const header = useGlobalHeader({ state: 'loggedIn' });
    return (
      <RootProvider>
        <GlobalHeader {...(header as GlobalHeaderProps)} />
      </RootProvider>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const doc = canvasElement.ownerDocument;
    const menuButton = doc.querySelector('#header-menu-root > button') as HTMLElement;
    const panel = doc.getElementById('header-menu-panel') as HTMLElement;

    // The button shows and hides navigation. It does not claim to open a menu.
    expect(menuButton).not.toHaveAttribute('aria-haspopup');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(menuButton);
    await waitFor(() => expect(menuButton).toHaveAttribute('aria-expanded', 'true'));
    expect(menuButton).toHaveAttribute('aria-controls', panel.id);

    // The panel has no role. Inside is a nav with plain lists, and nothing is a menu.
    expect(panel).not.toHaveAttribute('role');
    expect(panel).not.toHaveAttribute('aria-modal');
    const nav = within(panel).getByRole('navigation');
    expect(within(nav).getAllByRole('list').length).toBeGreaterThan(0);
    expect(within(nav).getAllByRole('listitem').length).toBeGreaterThan(0);
    expect(
      panel.querySelectorAll(
        '[role="menu"], [role="menuitem"], [role="menuitemradio"], [role="radiogroup"], [aria-haspopup]',
      ),
    ).toHaveLength(0);

    // Items that go somewhere are links. The language item opens the language list in the menu, so it is a button.
    expect(within(nav).getByRole('link', { name: 'Innboks' })).toHaveAttribute('href');
    expect(within(nav).getByRole('link', { name: 'Min profil' })).toBeInTheDocument();
    expect(within(nav).queryByRole('link', { name: 'Språk/language' })).toBeNull();
    expect(within(nav).getByRole('button', { name: 'Språk/language' })).toBeInTheDocument();

    // Focus stays on the button, and Tab leads into the navigation right after it.
    expect(menuButton).toHaveFocus();
    await userEvent.tab();
    expect(nav.contains(doc.activeElement)).toBe(true);

    // The language list replaces the menu. Focus follows to its back button.
    await userEvent.click(within(nav).getByRole('button', { name: 'Språk/language' }));
    const current = await within(panel).findByRole('button', { name: 'Bokmål' });
    await waitFor(() => expect(panel.querySelector('[data-id]')).toHaveFocus());
    expect(within(panel).getByRole('heading', { name: 'Språk/language' })).toBeInTheDocument();
    expect(current).toHaveAttribute('aria-current', 'true');
    expect(within(panel).getByRole('button', { name: 'English' })).not.toHaveAttribute('aria-current');
    // Picking a language changes a setting and goes nowhere, so the languages stay buttons.
    expect(within(panel).queryAllByRole('link')).toHaveLength(0);

    // Going back, focus returns to the language item.
    await userEvent.click(panel.querySelector('[data-id]') as HTMLElement);
    await waitFor(() => expect(within(panel).getByRole('button', { name: 'Språk/language' })).toHaveFocus());

    // Escape closes the navigation and puts focus back on the button.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(menuButton).toHaveAttribute('aria-expanded', 'false'));
    await waitFor(() => expect(menuButton).toHaveFocus());

    // The account button says what it is for, and that it opens a dialog.
    const accountButton = within(canvasElement).getByRole('button', { name: /^Bytt aktør: \S/ });
    expect(accountButton).toHaveAttribute('aria-haspopup', 'dialog');
    expect(accountButton).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(accountButton);
    await waitFor(() => expect(accountButton).toHaveAttribute('aria-controls', 'header-account'));
    expect(doc.getElementById('header-account')?.tagName).toBe('DIALOG');
  },
};

export const CompanyAccount = () => {
  const header = useGlobalHeader({ currentAccountIndex: 5 });
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} />
    </RootProvider>
  );
};

export const DisabledAccountSelection = () => {
  const header = useGlobalHeader({ currentAccountIndex: 5 });
  return <GlobalHeader {...(header as GlobalHeaderProps)} disableAccountSelection />;
};

export const WithCustomBadge = () => {
  const header = useGlobalHeader({});
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} badge={{ label: 'Beta', color: 'person' }} />
    </RootProvider>
  );
};

export const Loading = () => {
  const header = useGlobalHeader({ state: 'loading' });
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} />
    </RootProvider>
  );
};

export const LoadingDisabledAccountSelection = () => {
  const { globalMenu, accountSelector, onLoginClick, locale } = useGlobalHeader({ state: 'loading' });
  return (
    <RootProvider>
      <GlobalHeader
        globalMenu={globalMenu}
        accountSelector={accountSelector as AccountSelectorProps}
        onLoginClick={onLoginClick}
        locale={locale}
        disableAccountSelection
      />
    </RootProvider>
  );
};

export const WithVirtualizationEnabled = () => {
  const globalMenu = useGlobalMenu({ accountId: 'diaspora' });

  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const authorizedParties = getSyntheticAuthorizedPartiesData(1000);
  const selfAccountUuid = authorizedParties.find((p) => p.type === 'Person' || p.type === 'SelfIdentified')?.partyUuid;
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(selfAccountUuid);
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids((prev) => (prev.includes(uuid) ? prev.filter((id) => id !== uuid) : [...prev, uuid]));
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid,
    currentAccountUuid: currentAccountUuid,
    onSelectAccount: (accountId: string) => {
      setCurrentAccountUuid(accountId);
    },
    languageCode: 'nb',
    isLoading: false,
    virtualized: true,
  });
  return (
    <RootProvider>
      <GlobalHeader globalMenu={globalMenu} accountSelector={accountSelector} />
    </RootProvider>
  );
};

export const WithShortAccountList = () => {
  const globalMenu = useGlobalMenu({ accountId: 'diaspora' });

  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const authorizedParties = getSyntheticAuthorizedPartiesData(2);
  const selfAccountUuid = authorizedParties.find((p) => p.type === 'Person' || p.type === 'SelfIdentified')?.partyUuid;
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(selfAccountUuid);
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids((prev) => (prev.includes(uuid) ? prev.filter((id) => id !== uuid) : [...prev, uuid]));
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid,
    currentAccountUuid: currentAccountUuid,
    onSelectAccount: (accountId: string) => {
      setCurrentAccountUuid(accountId);
    },
    languageCode: 'nb',
    isLoading: false,
    virtualized: true,
  });
  return (
    <RootProvider>
      <GlobalHeader globalMenu={globalMenu} accountSelector={accountSelector} />
    </RootProvider>
  );
};
