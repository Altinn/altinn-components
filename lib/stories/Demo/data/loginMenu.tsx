import type { MenuProps } from '../../../components';
import { docsMenuItems } from './';

export const loginMenu: MenuProps = {
  items: [
    {
      id: 'docs',
      groupId: 'login',
      size: 'lg',
      color: 'strong',
      icon: 'padlock-locked',
      title: 'Logg inn',
      items: docsMenuItems,
    },
    {
      id: 'startup',
      groupId: 'help',
      color: 'neutral',
      size: 'sm',
      icon: 'buildings2',
      title: 'Starte og drive bedrift',
    },
    {
      id: 'help',
      groupId: 'help',
      color: 'neutral',
      size: 'sm',
      icon: 'chat-exclamationmark',
      title: 'Trenger du hjelp?',
    },
  ],
};
