import {
  Buildings2Icon,
  ChatExclamationmarkIcon,
  InboxFillIcon,
  MagnifyingGlassIcon,
  MenuGridIcon,
  PadlockLockedFillIcon,
} from '@navikt/aksel-icons';
import type { MenuProps } from '../../lib';

/** Global menu before login, as in the design proposal */
export const loggedOutMenu: MenuProps = {
  groups: {
    apps: {},
    help: { divider: false },
  },
  items: [
    { id: 'inbox', groupId: 'apps', size: 'lg', icon: InboxFillIcon, title: 'Innboks' },
    { id: 'admin', groupId: 'apps', size: 'lg', icon: PadlockLockedFillIcon, title: 'Tilgangsstyring' },
    {
      id: 'forms',
      groupId: 'apps',
      size: 'lg',
      icon: MenuGridIcon,
      title: 'Alle skjema og tjenester',
      selected: true,
    },
    { id: 'search', groupId: 'apps', size: 'lg', icon: MagnifyingGlassIcon, title: 'Søk i innhold' },
    { id: 'startup', groupId: 'help', size: 'sm', icon: Buildings2Icon, title: 'Starte og drive bedrift' },
    { id: 'help', groupId: 'help', size: 'sm', icon: ChatExclamationmarkIcon, title: 'Trenger du hjelp?' },
  ],
};

export const loginMenu: MenuProps = {
  items: [
    {
      id: 'login',
      groupId: 'login',
      size: 'lg',
      icon: { svgElement: PadlockLockedFillIcon, theme: 'base' },
      title: 'Logg inn',
    },
    {
      id: 'startup',
      groupId: 'help',
      size: 'sm',
      icon: Buildings2Icon,
      title: 'Starte og drive bedrift',
    },
    {
      id: 'help',
      groupId: 'help',
      size: 'sm',
      icon: ChatExclamationmarkIcon,
      title: 'Trenger du hjelp?',
    },
  ],
};
