import {
  Buildings2Icon,
  ChatExclamationmarkIcon,
  GlobeIcon,
  InboxFillIcon,
  InformationSquareIcon,
  MenuGridIcon,
  PadlockLockedFillIcon,
  PersonCircleIcon,
} from '@navikt/aksel-icons';
import { accountMenu } from '../';
import type { AccountMenuProps, MenuProps } from '../../lib';

/** Items that go somewhere are links. «Språk/language» opens the language list, so it stays a button. */
const designReferenceMenuItems: MenuProps['items'] = [
  {
    id: 'inbox',
    groupId: 'apps',
    size: 'lg',
    icon: InboxFillIcon,
    title: 'Innboks',
    href: '#inbox',
    selected: true,
    badge: { label: 'Beta', color: 'neutral', variant: 'base' },
  },
  {
    id: 'access-control',
    groupId: 'apps',
    size: 'lg',
    icon: PadlockLockedFillIcon,
    title: 'Tilgangsstyring',
    href: '#access',
    badge: { label: 'Beta', color: 'neutral', variant: 'base' },
  },
  {
    id: 'forms',
    groupId: 'apps',
    size: 'lg',
    icon: MenuGridIcon,
    title: 'Alle skjema og tjenester',
    href: '#forms',
  },
  {
    id: 'about',
    groupId: 'help',
    size: 'sm',
    icon: InformationSquareIcon,
    title: 'Om nye altinn',
    href: '#about',
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
  {
    id: 'profile',
    groupId: 'profile',
    size: 'sm',
    icon: PersonCircleIcon,
    title: 'Din profil',
    href: '#profile',
  },
  {
    id: 'language',
    groupId: 'profile',
    size: 'sm',
    icon: GlobeIcon,
    title: 'Språk/language',
  },
];

const designReferenceMenu: MenuProps = {
  groups: {
    apps: {
      divider: true,
    },
    help: {
      divider: true,
    },
    profile: {
      title: 'Logget inn som: Akvarell Søvnig',
    },
  },
  items: designReferenceMenuItems,
};

export const globalMenuDesignReference = {
  accountMenu: {
    ...accountMenu,
    virtualized: true,
  } as unknown as AccountMenuProps,
  menu: designReferenceMenu,
  currentEndUserLabel: 'Logget inn som: Akvarell Søvnig',
  menuLabel: 'Meny',
  backLabel: 'Tilbake',
  logoutButton: { label: 'Logg ut' },
  changeLabel: 'Endre',
};
