import { HeartFillIcon, HeartIcon } from '@navikt/aksel-icons';
import { useMemo } from 'react';
import { type AccountMenuItemProps, IconButton, type MenuGroupProps } from '../components';
import type { AccountSelectorProps } from '../components/GlobalHeader/AccountSelector';
import { formatDisplayName } from '../functions';

export interface AuthorizedParty {
  partyUuid: string;
  name: string;
  organizationNumber?: string;
  dateOfBirth?: string;
  partyId: string;
  type?: string;
  unitType?: string;
  isDeleted: boolean;
  onlyHierarchyElementWithNoAccess: boolean;
  authorizedResources: string[];
  authorizedRoles: string[];
  subunits?: AuthorizedParty[];
}

export interface useAccountSelectorProps {
  partyListDTO?: AuthorizedParty[];
  favoriteAccountUuids?: string[];
  currentAccountUuid?: string;
  selfAccountUuid?: string;
  isLoading?: boolean;
  isVirtualized?: boolean;
  onSelectAccount?: (accountId: string) => void;
  onToggleFavorite?: (accountId: string) => void;
  languageCode?: string;
}

const getAccountType = (type: string): 'company' | 'person' => {
  return type === 'Organization' ? 'company' : 'person';
};

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

    const currentAccountListItem = allAccounts.find((account) => account.selected === true);

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
  ]);

  if (isLoading || !partyListDTO || !selfAccountUuid) {
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

const getAccountFromAuthorizedParty = (
  languageCode: string,
  party: AuthorizedParty,
  group: string,
  currentAccountUuid?: string,
  isFavorite?: boolean,
  toggleFavorite?: (accountId: string) => void,
  parent?: AuthorizedParty,
  isSelf?: boolean,
): AccountMenuItemProps => {
  const type: 'company' | 'person' = getAccountType(party.type ?? '');

  const texts = getTexts(languageCode);

  const name = formatDisplayName({
    fullName: party.name,
    type: type,
  });
  const parentName = parent
    ? formatDisplayName({
        fullName: parent.name,
        type: getAccountType(parent.type ?? ''),
        reverseNameOrder: false,
      })
    : undefined;
  let description = '';

  const formatType = type === 'company' && !!parent ? 'subUnit' : type;
  switch (formatType) {
    case 'company':
      description = `${texts.org_no}: ${party.organizationNumber}`;
      break;
    case 'person':
      description = `${texts.birthdate}: ${formatDateToNorwegian(party.dateOfBirth)}`;
      break;
    case 'subUnit':
      description = `↳ ${texts.org_no}: ${party.organizationNumber}, ${texts.part_of} ${parentName}`;
      break;
  }
  return {
    id: party.partyUuid,
    icon: {
      name: name,
      type: type,
      isParent: !parent,
      isDeleted: party.isDeleted,
      colorKey: parentName ?? undefined,
    },
    name: name,
    description: description,
    groupId: group,
    type: type,
    selected: currentAccountUuid === party.partyUuid,
    disabled: !!party.onlyHierarchyElementWithNoAccess,
    badge: isSelf ? { label: texts.you, color: 'person' } : undefined,
    controls: !isSelf && (
      <IconButton
        rounded
        variant="text"
        icon={isFavorite ? HeartFillIcon : HeartIcon}
        iconAltText={isFavorite ? texts.remove_from_favorites : texts.add_to_favorites}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (toggleFavorite) {
            e.stopPropagation();
            toggleFavorite(party.partyUuid);
          }
        }}
        size="xs"
      />
    ),
  };
};

const isOrgType = (type?: string) => {
  return type === 'Organization';
};

const isPersonType = (type?: string) => {
  return type === 'Person';
};

// TODO: Move to a common texts files when i18next is added
// This is only a temporary solution for providing texts in different languages in a very simple POC
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
        part_of: 'del av',
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
        part_of: 'part of',
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
        part_of: 'del av',
      };
  }
};

export function formatDateToNorwegian(dateString: string | undefined, locale = 'no-NO'): string | undefined {
  if (!dateString) {
    return undefined;
  }

  try {
    // Parse the date string (assumes YYYY-MM-DD format)
    const date = new Date(dateString);

    // Check if the date is valid
    if (Number.isNaN(date.getTime())) {
      return dateString; // Return original if invalid
    }

    // Format to Norwegian locale (DD.MM.YYYY)
    return date.toLocaleDateString(locale, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  } catch (error) {
    console.warn('Error formatting date:', error);
    return dateString; // Return original if error occurs
  }
}
