import { Buildings2Icon, ChatExclamationmarkIcon, PadlockLockedFillIcon } from '@navikt/aksel-icons';
import type { MenuProps } from '../../lib';

/** Items that go somewhere are links: pass `href`, or `as` for a router link. */
export const loginMenu: MenuProps = {
  items: [
    {
      id: 'login',
      groupId: 'login',
      size: 'lg',
      icon: { svgElement: PadlockLockedFillIcon, theme: 'base' },
      title: 'Logg inn',
      href: '#login',
    },
    {
      id: 'startup',
      groupId: 'help',
      size: 'sm',
      icon: Buildings2Icon,
      title: 'Starte og drive bedrift',
      href: '#start-business',
    },
    {
      id: 'help',
      groupId: 'help',
      size: 'sm',
      icon: ChatExclamationmarkIcon,
      title: 'Trenger du hjelp?',
      href: '#help',
    },
  ],
};
