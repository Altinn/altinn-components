import type { MenuProps } from '../lib';

export const loginMenu: MenuProps = {
  items: [
    {
      id: 'login',
      groupId: 'login',
      size: 'lg',
      icon: { name: 'padlock-locked', theme: 'base', variant: 'solid' },
      title: 'Logg inn',
    },
    {
      id: 'startup',
      groupId: 'help',
      size: 'sm',
      icon: 'buildings2',
      title: 'Starte og drive bedrift',
    },
    {
      id: 'help',
      groupId: 'help',
      size: 'sm',
      icon: 'chat-exclamationmark',
      title: 'Trenger du hjelp?',
    },
  ],
};
