import { HeartFillIcon, HeartIcon, InboxIcon, PlusIcon } from '@navikt/aksel-icons';
import type { AccountListItemProps } from '../lib';
import { accountMenu } from './accountMenu';

export const accountListItems: AccountListItemProps[] = accountMenu.accounts!.map((item, index) => {
  const { id, type, name, items } = item;

  const favourite = !index;

  const contextMenu = {
    id: id + '-menu',
    items: [
      {
        id: 'inbox',
        groupId: 'apps',
        icon: InboxIcon,
        title: 'Gå til Innboks',
      },
      {
        id: 'fav',
        groupId: 'context',
        icon: favourite ? HeartFillIcon : HeartIcon,
        title: favourite ? 'Fjern fra favoritter' : 'Legg til favoritter',
      },
      {
        id: 'new-group',
        groupId: 'new',
        icon: PlusIcon,
        title: 'Ny gruppe',
      },
    ],
    groups: {
      apps: {
        title: name,
      },
    },
  };

  if (items) {
    return {
      id,
      type: 'group',
      title: name,
      description: 'Gruppe',
      label: items.length + ' aktører',
      avatarGroup: {
        items,
      },
      contextMenu,
    };
  }

  return {
    id,
    type,
    title: name,
    label: !index ? 'Deg' : '',
    favourite,
    description: type === 'person' ? 'Fødselsnr: XX.XX.XXXX XXXXXX' : 'Org nr. XXXXXXXXXXX',
    avatar: {
      type,
      name,
    },
    contextMenu,
  };
});
