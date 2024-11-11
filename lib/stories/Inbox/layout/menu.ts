export const menu = {
  groups: {
    shortcuts: {
      title: 'Snarveier',
      defaultItemColor: 'neutral',
    },
  },
  items: [
    {
      id: 'inbox',
      groupId: 1,
      size: 'lg',
      icon: 'inbox',
      title: 'Innboks',
      color: 'strong',
    },
    {
      id: 'drafts',
      groupId: 2,
      icon: 'doc-pencil',
      title: 'Utkast',
    },
    {
      id: 'sent',
      groupId: 2,
      icon: 'file-checkmark',
      selected: true,
      title: 'Sendt',
    },
    {
      id: 'bookmarks',
      groupId: 3,
      icon: 'bookmark',
      //      disabled: true,
      title: 'Lagrede søk',
    },
    {
      id: 'archived',
      groupId: 4,
      disabled: true,
      icon: 'archive',
      title: 'Arkivert',
    },
    {
      id: 'trash',
      groupId: 4,
      disabled: true,
      icon: 'trash',
      title: 'Papirkurv',
    },
    {
      id: 'profile',
      groupId: 'shortcuts',
      icon: 'person-circle',
      title: 'Din profil',
    },
    {
      id: 'settings',
      groupId: 'shortcuts',
      icon: 'cog',
      title: 'Innstillinger',
    },
  ],
};
