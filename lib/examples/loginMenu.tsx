import type { MenuProps } from '../components';

export const loginMenu: MenuProps = {
  items: [
    {
      id: 'login',
      groupId: 'login',
      size: 'lg',
      color: 'strong',
      icon: 'padlock-locked',
      title: 'Logg inn',
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
