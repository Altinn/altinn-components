import { HeartFillIcon, HeartIcon } from '@navikt/aksel-icons';
import { useMemo, useRef } from 'react';
import { type AccountMenuItemProps, type AccountSelectorProps, Button, type MenuGroupProps } from '../components';
import { formatDate, formatDisplayName, formatOrgNo } from '../functions';
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
  virtualized?: boolean;
  /** Callback triggered when a user selects an account */
  onSelectAccount?: (accountId: string) => void;
  /** Callback triggered when a user toggles an account's favorite status */
  onToggleFavorite?: (accountId: string) => void;
  /** Language code for localization ('nn', 'en', or 'nb'/default) */
  languageCode?: string;
  /** The external value of the include deleted accounts switch */
  showDeletedUnits?: boolean;
  /** Function to handle changes to the include deleted accounts switch */
  onShowDeletedUnitsChange?: (newValue: boolean) => void;
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
  virtualized = false,
  onToggleFavorite,
  languageCode,
  showDeletedUnits,
  onShowDeletedUnitsChange,
}: useAccountSelectorProps): AccountSelectorProps => {
  const isDesktop = useIsDesktop();

  // Store callbacks and currentAccountUuid in refs so they don't invalidate the expensive memo
  const toggleFavoriteRef = useRef(onToggleFavorite);
  toggleFavoriteRef.current = onToggleFavorite;
  const currentAccountUuidRef = useRef(currentAccountUuid);
  currentAccountUuidRef.current = currentAccountUuid;

  // Sort parties once: only re-sorts when partyListDTO or languageCode changes
  const sortedParties = useMemo(() => {
    if (!partyListDTO || partyListDTO.length === 0) return [];
    const locale = languageCode || 'nb';
    const compareFn = (a: AuthorizedParty, b: AuthorizedParty) =>
      a.name.localeCompare(b.name, locale, {
        sensitivity: 'base',
        ignorePunctuation: true,
      });
    return [...partyListDTO].sort(compareFn);
  }, [partyListDTO, languageCode]);

  const [accountItems, accountGroups] = useMemo((): [
    {
      selfAccountItem: AccountMenuItemProps | undefined;
      peopleAccountItems: AccountMenuItemProps[];
      organizationAccountItems: AccountMenuItemProps[];
      favoriteAccountItems: AccountMenuItemProps[];
    },
    Record<string, MenuGroupProps>,
  ] => {
    if (isLoading || !sortedParties.length || !selfAccountUuid) {
      return [
        { selfAccountItem: undefined, peopleAccountItems: [], organizationAccountItems: [], favoriteAccountItems: [] },
        {},
      ];
    }

    const favoriteSet = new Set(favoriteAccountUuids);
    const isFavorite = (partyUuid: string) => favoriteSet.has(partyUuid);

    const isVisible = (party: AuthorizedParty) => {
      return !party.isDeleted || showDeletedUnits !== false || party.partyUuid === currentAccountUuidRef.current;
    };

    const texts = getTexts(languageCode);
    const locale = languageCode || 'nb';
    const compareFn = (a: AuthorizedParty, b: AuthorizedParty) =>
      a.name.localeCompare(b.name, locale, {
        sensitivity: 'base',
        ignorePunctuation: true,
      });

    let selfAccountItem: AccountMenuItemProps | undefined = undefined;
    const peopleAccountItems: AccountMenuItemProps[] = [];
    const organizationAccountItems: AccountMenuItemProps[] = [];
    const favoriteAccountItems: AccountMenuItemProps[] = [];

    for (const party of sortedParties) {
      if (isPersonType(party.type)) {
        if (party.partyUuid === selfAccountUuid) {
          selfAccountItem = getAccountItemData(
            languageCode!,
            party,
            'favorites',
            false,
            toggleFavoriteRef,
            isDesktop,
            undefined,
            true,
          );
        } else if (isVisible(party) || isFavorite(party.partyUuid)) {
          const account = getAccountItemData(
            languageCode!,
            party,
            party.partyUuid,
            isFavorite(party.partyUuid),
            toggleFavoriteRef,
            isDesktop,
          );

          peopleAccountItems.push(account);

          if (isFavorite(party.partyUuid)) {
            favoriteAccountItems.push({ ...account, groupId: 'favorites' });
          }
        }
      } else if (isOrgType(party.type)) {
        if (isVisible(party) || isFavorite(party.partyUuid)) {
          const account = getAccountItemData(
            languageCode!,
            party,
            party.partyUuid,
            isFavorite(party.partyUuid),
            toggleFavoriteRef,
            isDesktop,
          );

          if (isVisible(party)) {
            organizationAccountItems.push(account);
          }

          if (isFavorite(party.partyUuid)) {
            favoriteAccountItems.push({ ...account, groupId: 'favorites' });
          }
        }

        // Handle subunits
        if (party.subunits && party.subunits.length > 0) {
          const subunits = [...party.subunits].sort(compareFn);
          for (const subUnit of subunits) {
            if (isVisible(subUnit) || isFavorite(subUnit.partyUuid)) {
              const subUnitAccountItem = getAccountItemData(
                languageCode!,
                subUnit,
                party.partyUuid,
                isFavorite(subUnit.partyUuid),
                toggleFavoriteRef,
                isDesktop,
                party,
              );
              if (isVisible(subUnit)) {
                organizationAccountItems.push(subUnitAccountItem);
              }
              if (isFavorite(subUnit.partyUuid)) {
                favoriteAccountItems.push({
                  ...subUnitAccountItem,
                  groupId: 'favorites',
                });
              }
            }
          }
        }
      }
    }

    const groups: Record<string, MenuGroupProps> = {
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

    return [{ selfAccountItem, peopleAccountItems, organizationAccountItems, favoriteAccountItems }, groups];
  }, [sortedParties, selfAccountUuid, favoriteAccountUuids, isLoading, languageCode, isDesktop, showDeletedUnits]);

  const allAccounts = useMemo((): AccountMenuItemProps[] => {
    const { selfAccountItem, peopleAccountItems, organizationAccountItems, favoriteAccountItems } = accountItems;
    if (!selfAccountItem) {
      return [];
    }
    return [selfAccountItem, ...favoriteAccountItems, ...peopleAccountItems, ...organizationAccountItems];
  }, [accountItems]);

  const [accounts, currentAccount] = useMemo((): [AccountMenuItemProps[], AccountMenuItemProps | undefined] => {
    if (allAccounts.length === 0) {
      return [[], undefined];
    }

    let currentAccountItem: AccountMenuItemProps | undefined;
    const result = allAccounts.map((account) => {
      const isSelected = currentAccountUuid === account.id;
      if (isSelected) {
        const selected = { ...account, selected: true };
        currentAccountItem = selected;
        return selected;
      }
      return account.selected ? { ...account, selected: false } : account;
    });

    return [result, currentAccountItem];
  }, [allAccounts, currentAccountUuid]);

  if (isLoading || !partyListDTO || !currentAccount) {
    return {
      accountMenu: {
        items: [],
        groups: {},
        virtualized: false,
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
      virtualized: virtualized,
      onSelectAccount: onSelectAccount,
      currentAccount: currentAccount,
    },
    loading: false,
    showDeletedUnits: showDeletedUnits,
    onShowDeletedUnitsChange: onShowDeletedUnitsChange,
  };
};

/**
 * Lightweight component for the favorite toggle button.
 * Reads the toggle callback from a ref at click time, so the parent memo
 * doesn't need the callback in its dependency array.
 */
const FavoriteButton = ({
  partyUuid,
  isFavorite,
  toggleFavoriteRef,
  texts,
}: {
  partyUuid: string;
  isFavorite?: boolean;
  toggleFavoriteRef?: React.RefObject<((accountId: string) => void) | undefined>;
  texts: ReturnType<typeof getTexts>;
}) => (
  <Button
    rounded
    variant="ghost"
    aria-label={isFavorite ? texts.remove_from_favorites : texts.add_to_favorites}
    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      toggleFavoriteRef?.current?.(partyUuid);
    }}
    size="xs"
  >
    {isFavorite ? <HeartFillIcon /> : <HeartIcon />}
  </Button>
);

/**
 * Converts an AuthorizedParty object into an AccountMenuItemProps object
 * with proper formatting, localization, and interactive elements.
 *
 * Uses a ref for toggleFavorite to avoid capturing the callback in the memo closure,
 * and defers JSX creation for controls to render time via a lazy getter pattern.
 */
const getAccountItemData = (
  languageCode: string,
  party: AuthorizedParty,
  group: string,
  isFavorite?: boolean,
  toggleFavoriteRef?: React.RefObject<((accountId: string) => void) | undefined>,
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
      description = `${texts.org_no}. ${formatOrgNo(party.organizationNumber)}`;
      break;
    case 'person':
      description = party?.dateOfBirth ? `${texts.birthdate}: ${formatDate(party?.dateOfBirth)}` : '';
      break;
    case 'subunit':
      description = `↳ ${texts.org_no}. ${formatOrgNo(party?.organizationNumber)}, ${texts.subunit_of} ${parentName}`;
      break;
    default:
      description = '';
  }

  const controls = !isSelf ? (
    <FavoriteButton
      partyUuid={party?.partyUuid}
      isFavorite={isFavorite}
      toggleFavoriteRef={toggleFavoriteRef}
      texts={texts}
    />
  ) : undefined;

  return {
    id: party?.partyUuid,
    icon: {
      name: name,
      type: type,
      isParent: !parent,
      isDeleted: party?.isDeleted,
    },
    name: name,
    description: description,
    searchWords: formatType === 'person' ? [name, party?.dateOfBirth ?? ''] : [name, party?.organizationNumber ?? ''],
    groupId: group,
    type: formatType,
    selected: false,
    disabled: !!party?.onlyHierarchyElementWithNoAccess,
    badge: isSelf
      ? { label: texts.you, color: 'person' }
      : party.isDeleted && isDesktopScreen
        ? { label: texts.deleted, color: 'neutral' }
        : undefined,
    controls,
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
