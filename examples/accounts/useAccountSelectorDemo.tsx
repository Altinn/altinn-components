import { useState } from 'react';
import { type AuthorizedParty, useAccountSelector } from '../../lib';

export const SELF_PARTY_UUID = '167536b5-f8ed-4c5a-8f48-0279507e53ae';

const selfParty: AuthorizedParty = {
  partyUuid: SELF_PARTY_UUID,
  name: 'SITRONGUL MEDALJONG',
  partyId: '0',
  type: 'Person',
  dateOfBirth: '1985-05-17',
  isDeleted: false,
  onlyHierarchyElementWithNoAccess: false,
  authorizedResources: [],
  authorizedRoles: [],
};

const makeOrgParty = (index: number, isDeleted: boolean): AuthorizedParty => ({
  partyUuid: `synthetic-party-${index}`,
  name: `Aktør AS ${index}`,
  organizationNumber: `${912345670 + index}`,
  partyId: `${index}`,
  type: 'Organization',
  isDeleted,
  onlyHierarchyElementWithNoAccess: false,
  authorizedResources: [],
  authorizedRoles: [],
});

/** Builds a party list with `total` accounts (including self), the first
 * `deletedCount` of the non-self accounts being deleted. */
export const buildAuthorizedParties = (total: number, deletedCount = 0): AuthorizedParty[] => {
  const others = Array.from({ length: total - 1 }, (_, i) => makeOrgParty(i + 1, i < deletedCount));
  return [selfParty, ...others];
};

/** Drives useAccountSelector with local state for favourites, the current
 * account and the "show deleted" toggle. Used by the account-count stories. */
export const useAccountSelectorDemo = (parties: AuthorizedParty[]) => {
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [showDeletedAccounts, setShowDeletedAccounts] = useState(true);
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(SELF_PARTY_UUID);
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids((prev) => (prev.includes(uuid) ? prev.filter((id) => id !== uuid) : [...prev, uuid]));
  };
  return useAccountSelector({
    partyListDTO: parties,
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
};
