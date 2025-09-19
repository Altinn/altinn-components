import { HeartFillIcon, HeartIcon } from '@navikt/aksel-icons';
import { Badge, type BadgeProps, IconButton } from '../../lib';
import type { AccountMenuProps } from '../../lib';
import { type UseAccountsProps, useAccounts } from './';

export const useAccountMenu = ({ accountId, accounts, includeGroups = false }: UseAccountsProps) => {
  const { groups, items, currentAccount, onSelectAccount, onToggleFavourite } = useAccounts({
    accountId,
    accounts,
    includeGroups,
  });

  const search = {
    placeholder: 'Finn konto',
    name: 'search-account',
    getResultsLabel: (hits = 0) => {
      if (hits) {
        return hits + ' treff';
      }
      return 'Ingen treff';
    },
    hidden: false,
  };

  const itemsWithFavourite = items?.map((item) => {
    const { id, favourite, badge } = item;

    return {
      ...item,
      badge: undefined,
      controls: badge ? (
        <Badge {...(badge as BadgeProps)} />
      ) : (
        <IconButton
          rounded
          variant="text"
          icon={favourite ? HeartFillIcon : HeartIcon}
          iconAltText={'Favoritt'}
          onClick={() => onToggleFavourite?.(id)}
          size="xs"
        />
      ),
    };
  });

  return {
    items: itemsWithFavourite,
    groups,
    search,
    currentAccount,
    onSelectAccount,
  } as AccountMenuProps;
};
