import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import {
  SELF_PARTY_UUID,
  buildAuthorizedParties,
  getAuthorizedPartiesData,
  useAccountSelectorDemo,
  useGlobalHeader,
} from '../../../examples';
import { type AuthorizedParty, useAccountSelector } from '../../hooks';
import { RootProvider } from '../RootProvider';
import { AccountSelector, type AccountSelectorProps } from './AccountSelector';

const meta = {
  title: 'Layout/AccountSelector',
  component: AccountSelector,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    accountMenu: undefined,
    loading: false,
  },
  argTypes: {
    accountMenu: { control: 'object' },
    loading: { control: 'boolean' },
  },
} satisfies Meta<typeof AccountSelector>;

export default meta;

export const WithAccounts = () => {
  const accountSelector = useGlobalHeader({}).accountSelector as AccountSelectorProps;

  return (
    <RootProvider>
      <AccountSelector {...accountSelector} />
    </RootProvider>
  );
};

export const NoAccounts = (args: AccountSelectorProps) => {
  return (
    <RootProvider>
      <AccountSelector {...args} accountMenu={{ items: [], groups: {}, currentAccount: undefined }} />
    </RootProvider>
  );
};

export const Loading = (args: AccountSelectorProps) => {
  return (
    <RootProvider>
      <AccountSelector {...args} accountMenu={{ items: [], groups: {}, currentAccount: undefined }} loading />
    </RootProvider>
  );
};

/** Drives the standalone AccountSelector via the useAccountSelector hook. The
 * full-Layout equivalents live under Layout/AccountSelector/In Layout. */
const AccountSelectorDemo = ({ parties }: { parties: AuthorizedParty[] }) => {
  const accountSelector = useAccountSelectorDemo(parties);
  return (
    <RootProvider languageCode="nb">
      <AccountSelector {...accountSelector} />
    </RootProvider>
  );
};

export const UsingUseAccountHook = () => {
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [showDeletedAccounts, setShowDeletedAccounts] = useState(false);
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(SELF_PARTY_UUID);
  const authorizedParties = getAuthorizedPartiesData();
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids((prev) => (prev.includes(uuid) ? prev.filter((id) => id !== uuid) : [...prev, uuid]));
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid: SELF_PARTY_UUID,
    currentAccountUuid: currentAccountUuid,
    onSelectAccount: (accountId: string) => {
      setCurrentAccountUuid(accountId);
    },
    languageCode: 'nb',
    isLoading: false,
    showDeletedUnits: showDeletedAccounts,
    onShowDeletedUnitsChange: (newValue: boolean) => {
      setShowDeletedAccounts(newValue);
    },
  });
  return (
    <RootProvider languageCode="nb">
      <AccountSelector {...accountSelector} />
    </RootProvider>
  );
};

export const ThreeAccounts = () => <AccountSelectorDemo parties={buildAuthorizedParties(3)} />;

export const FourAccountsOneDeleted = () => <AccountSelectorDemo parties={buildAuthorizedParties(4, 1)} />;

export const SixAccountsThreeDeleted = () => <AccountSelectorDemo parties={buildAuthorizedParties(6, 3)} />;

export const TenAccountsNoneDeleted = () => <AccountSelectorDemo parties={buildAuthorizedParties(10)} />;

/** The accounts are a plain list: headings for the groups, and two buttons per account. */
export const ListOfAccounts = {
  // Behaviour only, the look is covered by the stories above.
  parameters: { screenshot: { skip: true } },
  render: () => <UsingUseAccountHook />,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    // Nothing is a menu.
    expect(canvasElement.querySelectorAll('[role="menu"], [role="menuitem"]')).toHaveLength(0);

    // Each group title is a heading, one level below the selector's own, followed by the list it names.
    expect(canvas.getByRole('heading', { level: 2 })).toBeInTheDocument();
    const groupHeadings = canvas.getAllByRole('heading', { level: 3 });
    expect(groupHeadings.length).toBeGreaterThan(0);
    for (const heading of groupHeadings) {
      const list = heading.nextElementSibling as HTMLElement;
      expect(list).toHaveAttribute('role', 'list');
      expect(list).toHaveAccessibleName(heading.textContent ?? '');
      expect(within(list).getAllByRole('listitem').length).toBeGreaterThan(0);
    }

    // An account is a button. Its favourite toggle is a button beside it, never inside it.
    const accounts = [...canvasElement.querySelectorAll('[data-id]')];
    expect(accounts.length).toBeGreaterThan(0);
    for (const account of accounts) {
      expect(account.tagName).toBe('BUTTON');
    }
    expect(canvasElement.querySelectorAll('button button')).toHaveLength(0);
    expect(canvasElement.querySelector('[aria-current="true"]')).toBeInTheDocument();

    // The favourite button says which account it is for, and the account's description is read after its name.
    const firstFavourite = canvas.getAllByRole('button', { name: /legg til i favoritt/i })[0];
    const itsAccount = firstFavourite.closest('li')?.querySelector('[data-id]') as HTMLElement;
    expect(firstFavourite).toHaveAccessibleName(expect.stringContaining(`: ${itsAccount.getAttribute('aria-label')}`));
    expect(itsAccount).toHaveAccessibleDescription(expect.stringMatching(/\S/));

    // Focus follows the account into the favourites, instead of landing on the next account's button.
    const accountName = itsAccount.getAttribute('aria-label') as string;
    await userEvent.click(firstFavourite);
    await waitFor(() =>
      expect(document.activeElement).toHaveAccessibleName(
        expect.stringMatching(new RegExp(`^Fjern fra favoritter: ${accountName}$`)),
      ),
    );
    // And back again when it is removed.
    await userEvent.keyboard('{Enter}');
    await waitFor(() =>
      expect(document.activeElement).toHaveAccessibleName(
        expect.stringMatching(new RegExp(`^Legg til i favoritter: ${accountName}$`)),
      ),
    );

    // Toggling a favourite does not pick the account. It adds it to the favourites.
    const currentBefore = canvasElement.querySelector('[aria-current="true"]')?.getAttribute('aria-label');
    const favouritesBefore = canvas.queryAllByRole('button', { name: /fjern fr[aå] favoritt/i }).length;
    await userEvent.click(canvas.getAllByRole('button', { name: /legg til i favoritt/i })[0]);
    await canvas.findAllByRole('button', { name: /fjern fr[aå] favoritt/i });
    expect(canvas.getAllByRole('button', { name: /fjern fr[aå] favoritt/i }).length).toBeGreaterThan(favouritesBefore);
    expect(canvasElement.querySelector('[aria-current="true"]')?.getAttribute('aria-label')).toBe(currentBefore);

    // The status region for the number of hits is in the page from the start, so the first change is announced.
    const status = canvas.getByRole('status');
    expect(status).toBeEmptyDOMElement();

    // Searching replaces the groups with one list. The number of hits is announced, and shown as plain text.
    await userEvent.type(canvas.getByRole('searchbox'), 'a');
    await waitFor(() => expect(status).toHaveTextContent(/treff/));
    expect(canvas.getAllByRole('status')).toHaveLength(1);
    expect(canvas.queryAllByRole('heading', { level: 3 })).toHaveLength(0);
  },
};
