import type { MenuProps } from '../../../components';
import { docsMenuItems } from './';
import {Buildings2Icon, ChatExclamationmarkIcon, PadlockLockedIcon} from "@navikt/aksel-icons";

export const loginMenu: MenuProps = {
  items: [
    {
      id: 'docs',
      groupId: 'login',
      size: 'lg',
      color: 'strong',
      icon: PadlockLockedIcon,
      title: 'Logg inn',
      items: docsMenuItems,
    },
    {
      id: 'startup',
      groupId: 'help',
      color: 'neutral',
      size: 'sm',
      icon: Buildings2Icon,
      title: 'Starte og drive bedrift',
    },
    {
      id: 'help',
      groupId: 'help',
      color: 'neutral',
      size: 'sm',
      icon: ChatExclamationmarkIcon,
      title: 'Trenger du hjelp?',
    },
  ],
};
