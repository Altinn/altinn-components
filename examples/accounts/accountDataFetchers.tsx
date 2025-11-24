import type { AuthorizedParty } from '../../lib';
import data from './authorizedPartiesData.json';

export const getAuthorizedPartiesData = (): AuthorizedParty[] => {
  return data as unknown as AuthorizedParty[];
};

export const getLargeAuthorizedPartiesData = (count = 1000): AuthorizedParty[] => {
  const baseData = data as unknown as AuthorizedParty[];
  const largeData: AuthorizedParty[] = [];

  for (let i = 0; i < count; i++) {
    const baseItem = baseData[i % baseData.length];
    largeData.push({
      ...baseItem,
      partyUuid: `${baseItem.partyUuid}-${i}`,
      name: `${baseItem.name} ${i + 1}`,
      organizationNumber: baseItem.organizationNumber
        ? `${Number.parseInt(baseItem.organizationNumber) + i}`
        : undefined,
      partyId: baseItem.partyId + i,
    });
  }

  return largeData;
};
