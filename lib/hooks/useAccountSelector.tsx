import { HeartFillIcon, HeartIcon } from '@navikt/aksel-icons';
import { useMemo } from 'react';
import { type AccountMenuItemProps, IconButton, type MenuGroupProps } from '../components';
import type { AccountSelectorProps } from '../components/GlobalHeader/AccountSelector';
import { formatDisplayName } from '../functions';
import { formatDate } from '../functions';
import { useIsDesktop } from './useIsDesktop';

/** The DTO for the authorized party endpoint */
export interface AuthorizedParty {
  /** Unique identifier for the party */
  partyUuid: string;
  /** Display name of the party */
  name: string;
  /** Organization number (for organizations only) */
  organizationNumber?: string;
  /** Date of birth in ISO format (for persons only) */
  dateOfBirth?: string;
  /** Legacy party identifier (deprecated) */
  partyId: string;
  /** Type of party - 'Person' or 'Organization' */
  type?: string;
  /** Specific unit type for organizations */
  unitType?: string;
  /** Whether the party has been deleted */
  isDeleted: boolean;
  /** Whether the user only has access to child-/subunits */
  onlyHierarchyElementWithNoAccess: boolean;
  /** List of authorized resource identifiers */
  authorizedResources: string[];
  /** List of authorized role identifiers */
  authorizedRoles: string[];
  /** Child subunits (for parent organizations) */
  subunits?: AuthorizedParty[];
}

/**
 * Configuration props for the useAccountSelector hook.
 */
export interface useAccountSelectorProps {
  /** UUID of the user's own personal account */
  selfAccountUuid?: string;
  /** Array of authorized parties that the user can act on behalf of */
  partyListDTO?: AuthorizedParty[];
  /** Array of parties (defined by their partyUUIDs) marked as favorites by the user */
  favoriteAccountUuids?: string[];
  /** UUID of the currently selected account */
  currentAccountUuid?: string;
  /** Whether account data is currently being loaded */
  isLoading?: boolean;
  /** Whether to use virtualization for large account lists */
  isVirtualized?: boolean;
  /** Callback triggered when a user selects an account */
  onSelectAccount?: (accountId: string) => void;
  /** Callback triggered when a user toggles an account's favorite status */
  onToggleFavorite?: (accountId: string) => void;
  /** Language code for localization ('nn', 'en', or 'nb'/default) */
  languageCode?: string;
}

/**
 * Maps a party type string to an account type.
 * @param type - The party type string
 * @returns The account type ("company" or "person")
 */
const getAccountType = (type: string): 'company' | 'person' => {
  return type === 'Organization' ? 'company' : 'person';
};

/**
 * React hook that processes authorized party data and transforms it into
 * a structured format suitable for the AccountSelector component.
 *
 * Handles account organization into groups (self, favorites, people, organizations),
 * favorites management, localization, and hierarchical organization structures.
 *
 * @param props - Configuration object for the hook
 * @returns AccountSelectorProps object with organized account data and handlers.
 */
export const useAccountSelector = ({
  partyListDTO = [],
  favoriteAccountUuids,
  currentAccountUuid,
  selfAccountUuid,
  isLoading = false,
  onSelectAccount,
  isVirtualized = false,
  onToggleFavorite,
  languageCode,
}: useAccountSelectorProps): AccountSelectorProps => {
  const isDesktop = useIsDesktop();

  const [accounts, accountGroups, currentAccount]: [
    AccountMenuItemProps[],
    Record<string, MenuGroupProps>,
    AccountMenuItemProps | undefined,
  ] = useMemo(() => {
    if (isLoading || !partyListDTO || !selfAccountUuid) {
      return [[], {}, undefined];
    }
    const isFavorite = (partyUuid: string) => {
      return favoriteAccountUuids?.includes(partyUuid);
    };

    const texts = getTexts(languageCode);

    // Separate self, people and organizations
    const self = partyListDTO.find((party) => isPersonType(party.type) && party.partyUuid === selfAccountUuid);

    const otherPeople = partyListDTO.filter((party) => isPersonType(party.type) && party.partyUuid !== selfAccountUuid);

    const organizations = partyListDTO.filter((party) => isOrgType(party.type));

    // Build account items of self, people and organizations
    const selfAccountItem = getAccountFromAuthorizedParty(
      languageCode!,
      self!,
      'favorites',
      currentAccountUuid,
      false,
      onToggleFavorite,
      isDesktop,
      undefined,
      true,
    );

    const peopleAccountItems = otherPeople?.map((party) =>
      getAccountFromAuthorizedParty(
        languageCode!,
        party,
        party.partyUuid,
        currentAccountUuid,
        isFavorite(party.partyUuid),
        onToggleFavorite,
        isDesktop,
      ),
    );

    const organizationAccountItems: AccountMenuItemProps[] = [];

    for (const org of organizations) {
      const orgAccountItem = getAccountFromAuthorizedParty(
        languageCode!,
        org,
        org.partyUuid,
        currentAccountUuid,
        isFavorite(org.partyUuid),
        onToggleFavorite,
        isDesktop,
      );
      organizationAccountItems.push(orgAccountItem);
      if (org.subunits && org.subunits.length > 0) {
        for (const subUnit of org.subunits) {
          const subUnitAccountItem = getAccountFromAuthorizedParty(
            languageCode!,
            subUnit,
            org.partyUuid,
            currentAccountUuid!,
            isFavorite(subUnit.partyUuid),
            onToggleFavorite,
            isDesktop,
            org,
          );
          organizationAccountItems.push(subUnitAccountItem);
        }
      }
    }

    // Build favorite account items from previously built people and organization items
    const favoritePeopleAccountItems = peopleAccountItems.reduce<AccountMenuItemProps[]>((acc, item) => {
      if (isFavorite(item.id)) {
        acc.push({ ...item, groupId: 'favorites' });
      }
      return acc;
    }, []);
    const favoriteOrganizationAccountItems = organizationAccountItems.reduce<AccountMenuItemProps[]>((acc, item) => {
      if (isFavorite(item.id)) {
        acc.push({ ...item, groupId: 'favorites' });
      }
      return acc;
    }, []);

    const favoriteAccountItems = [...favoritePeopleAccountItems, ...favoriteOrganizationAccountItems];

    // Put the full list of accounts together in order
    const allAccounts = [selfAccountItem, ...favoriteAccountItems, ...peopleAccountItems, ...organizationAccountItems];

    const currentAccountListItem = allAccounts.find((account) => account?.selected === true);

    // Build account groups
    const accountGroups: Record<string, MenuGroupProps> = {
      [organizationAccountItems[0]?.groupId || 'company']: {
        title: texts.account_orgs,
        divider: true,
      },
      [peopleAccountItems[0]?.groupId || 'person']: {
        title: texts.account_persons,
        divider: true,
      },
      favorites: {
        title: texts.account_favorites,
        divider: true,
      },
    };

    return [allAccounts, accountGroups, currentAccountListItem];
  }, [
    partyListDTO,
    selfAccountUuid,
    favoriteAccountUuids,
    currentAccountUuid,
    isLoading,
    onToggleFavorite,
    languageCode,
    isDesktop,
  ]);

  if (isLoading || !partyListDTO || !currentAccount) {
    return {
      accountMenu: {
        items: [],
        groups: {},
        isVirtualized: false,
        onSelectAccount: () => {},
        currentAccount: undefined,
      },
      loading: isLoading,
    };
  }

  return {
    accountMenu: {
      items: accounts,
      groups: accountGroups,
      isVirtualized: isVirtualized,
      onSelectAccount: onSelectAccount,
      currentAccount: currentAccount,
    },
    loading: false,
  };
};

/**
 * Converts an AuthorizedParty object into an AccountMenuItemProps object
 * with proper formatting, localization, and interactive elements.
 *
 * @param languageCode - Language code for text localization
 * @param party - The authorized party to convert
 * @param group - Group identifier for organizing accounts
 * @param currentAccountUuid - UUID of currently selected account for selection state
 * @param isFavorite - Whether this account is marked as favorite
 * @param toggleFavorite - Callback for toggling favorite status
 * @param isDesktopScreen - Whether this is intended for a desktop screen
 * @param parent - Parent organization (for subunits)
 * @param isSelf - Whether this is the user's own account
 * @returns Formatted account menu item with all necessary props
 */
const getAccountFromAuthorizedParty = (
  languageCode: string,
  party: AuthorizedParty,
  group: string,
  currentAccountUuid?: string,
  isFavorite?: boolean,
  toggleFavorite?: (accountId: string) => void,
  isDesktopScreen?: boolean,
  parent?: AuthorizedParty,
  isSelf?: boolean,
): AccountMenuItemProps => {
  const type: 'company' | 'person' = getAccountType(party?.type ?? '');

  const texts = getTexts(languageCode);

  const name = formatDisplayName({
    fullName: party?.name,
    type: type,
  });
  const parentName = parent
    ? formatDisplayName({
        fullName: parent?.name,
        type: getAccountType(parent?.type ?? ''),
        reverseNameOrder: false,
      })
    : undefined;
  let description = '';

  const formatType = type === 'company' && !!parent ? 'subunit' : type;
  switch (formatType) {
    case 'company':
      description = `${texts.org_no}: ${party.organizationNumber}`;
      break;
    case 'person':
      description = party?.dateOfBirth ? `${texts.birthdate}: ${formatDate(party?.dateOfBirth)}` : '';
      break;
    case 'subunit':
      description = `↳ ${texts.org_no}: ${party?.organizationNumber}, ${texts.subunit_of} ${parentName}`;
      break;
    default:
      description = '';
  }
  return {
    id: party?.partyUuid,
    icon: {
      name: name,
      type: type,
      isParent: !parent,
      isDeleted: party?.isDeleted,
      colorKey: parentName ?? undefined,
    },
    name: name,
    description: description,
    groupId: group,
    type: formatType,
    selected: currentAccountUuid === party?.partyUuid,
    disabled: !!party?.onlyHierarchyElementWithNoAccess,
    badge: isSelf
      ? { label: texts.you, color: 'person' }
      : party.isDeleted && isDesktopScreen
        ? { label: texts.deleted, color: 'neutral' }
        : undefined,
    controls: !isSelf && (
      <IconButton
        rounded
        variant="text"
        icon={isFavorite ? HeartFillIcon : HeartIcon}
        iconAltText={isFavorite ? texts.remove_from_favorites : texts.add_to_favorites}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (toggleFavorite) {
            e.stopPropagation();
            toggleFavorite(party?.partyUuid);
          }
        }}
        size="xs"
      />
    ),
  };
};

/**
 * Checks if a party type represents an organization.
 * @param type - The party type string to check
 * @returns True if the type is 'Organization'
 */
const isOrgType = (type?: string) => {
  return type === 'Organization';
};

/**
 * Checks if a party type represents a person. (Self identified users are also considered persons)
 * @param type - The party type string to check
 * @returns True if the type is 'Person'
 */
const isPersonType = (type?: string) => {
  return type === 'Person' || type === 'SelfIdentified';
};

/**
 * Returns localized text strings based on the provided language code.
 * Supports Norwegian Nynorsk (nn), English (en), and Norwegian Bokmål (default).
 *
 * TODO: Move to a common texts file when i18next is added
 * This is only a temporary solution for providing texts in different languages in a very simple POC
 *
 * @param languageCode - Language code ('nn', 'en', or default for 'nb')
 * @returns Object containing localized text strings
 */
const getTexts = (languageCode: string | undefined) => {
  switch (languageCode) {
    case 'nn':
      return {
        account_orgs: 'Virksemder',
        account_persons: 'Personar',
        account_favorites: 'Favorittar',
        add_to_favorites: 'Legg til i favorittar',
        remove_from_favorites: 'Fjern frå favorittar',
        you: 'Deg',
        org_no: 'Org.nr',
        birthdate: 'Født',
        subunit_of: 'undereining av',
        deleted: 'Sletta',
      };
    case 'en':
      return {
        account_orgs: 'Organizations',
        account_persons: 'Persons',
        account_favorites: 'Favorites',
        add_to_favorites: 'Add to favorites',
        remove_from_favorites: 'Remove from favorites',
        you: 'You',
        org_no: 'Org.no',
        birthdate: 'Born',
        subunit_of: 'subunit of',
        deleted: 'Deleted',
      };
    default:
      return {
        account_orgs: 'Virksomheter',
        account_persons: 'Personer',
        account_favorites: 'Favoritter',
        add_to_favorites: 'Legg til i favorittar',
        remove_from_favorites: 'Fjern frå favorittar',
        you: 'Deg',
        org_no: 'Org.nr',
        birthdate: 'Født',
        subunit_of: 'underenhet av',
        deleted: 'Slettet',
      };
  }
};
