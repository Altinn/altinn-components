import type { AuthorizedParty } from '../../lib/hooks/useAccountSelector';
import * as data from './authorizedPartiesData.json';

export const getAuthorizedPartiesData = (): AuthorizedParty[] => {
  // Handle both default export and direct array import
  // biome-ignore lint/suspicious/noExplicitAny: Need to handle potential default export vs direct import
  const arrayData = (data as any).default || data;
  return arrayData as AuthorizedParty[];
};

export const getFavoriteAccountUuidsData = (): string[] => {
  return ['cd35779b-b174-4ecc-bbef-ece13611be7f', '8c29421f-a4af-45b0-a9f1-125cb4d9137f'];
};
