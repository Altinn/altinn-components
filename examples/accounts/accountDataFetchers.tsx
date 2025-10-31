import type { AuthorizedParty } from '../../lib/hooks/useAccountSelector';
import data from './authorizedPartiesData.json';

export const getAuthorizedPartiesData = (): AuthorizedParty[] => {
  return data as unknown as AuthorizedParty[];
};
