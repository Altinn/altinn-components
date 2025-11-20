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
import type { AccountMenuProps, GlobalMenuProps_old, MenuProps } from '../../lib';
import { Badge } from '../../lib';

const designReferenceMenuItems: MenuProps['items'] = [
  {
    id: 'inbox',
    groupId: 'apps',
    size: 'lg',
    icon: InboxFillIcon,
    title: (
      <>
        Innboks <Badge label="Beta" />
      </>
    ),
    selected: true,
  },
  {
    id: 'access-control',
    groupId: 'apps',
    size: 'lg',
    icon: PadlockLockedFillIcon,
    title: (
      <>
        Tilgangsstyring <Badge label="Beta" />
      </>
    ),
  },
  {
    id: 'forms',
    groupId: 'apps',
    size: 'lg',
    icon: MenuGridIcon,
    title: 'Alle skjema og tjenester',
  },
  {
    id: 'about',
    groupId: 'help',
    size: 'sm',
    icon: InformationSquareIcon,
    title: 'Om nye altinn',
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
  {
    id: 'profile',
    groupId: 'profile',
    size: 'sm',
    icon: PersonCircleIcon,
    title: 'Din profil',
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
  defaultIconTheme: 'surface',
  groups: {
    apps: {
      divider: true,
    },
    help: {
      defaultIconTheme: 'transparent',
      divider: true,
    },
    profile: {
      title: 'Logget inn som: Akvarell Søvnig',
      defaultIconTheme: 'transparent',
    },
  },
  items: designReferenceMenuItems,
};

export const globalMenuDesignReference: GlobalMenuProps_old = {
  accountMenu: {
    ...(accountMenu as AccountMenuProps),
    isVirtualized: true,
  },
  menu: designReferenceMenu,
  currentEndUserLabel: 'Logget inn som: Akvarell Søvnig',
  menuLabel: 'Meny',
  backLabel: 'Tilbake',
  logoutButton: { label: 'Logg ut' },
  changeLabel: 'Endre',
};
