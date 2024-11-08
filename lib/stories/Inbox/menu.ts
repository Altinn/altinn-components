import type { MenuProps } from '../../components';

export const menu: MenuProps = {
  groups: {},
  items: [
    {
      id: 'inbox',
      group: 1,
      size: 'lg',
      icon: 'inbox',
      title: 'Innboks',
      color: 'strong',
    },
    {
      id: 'drafts',
      group: 2,
      icon: 'doc-pencil',
      title: 'Utkast',
    },
    {
      id: 'sent',
      group: 2,
      icon: 'file-checkmark',
      selected: true,
      title: 'Sendt',
    },
    {
      id: 'bookmarks',
      group: 3,
      icon: 'bookmark',
      title: 'Lagrede søk',
    },
    {
      id: 'archived',
      group: 4,
      icon: 'archive',
      title: 'Arkivert',
    },
    {
      id: 'trash',
      group: 4,
      disabled: true,
      icon: 'trash',
      title: 'Papirkurv',
    },
  ],
};

export const sections = {
  search: {
    empty: 'Ingen treff',
  },
  drafts: {
    title: '{count} utkast',
  },
  sent: {
    title: '{count} sendt',
  },
  trash: {
    title: '{count} dialoger i papirkurven',
  },
  archive: {
    title: '{count} arkiverte dialoger',
  },
};
