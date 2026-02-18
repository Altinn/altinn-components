import {
  ArchiveIcon,
  BookmarkIcon,
  CalendarIcon,
  DocPencilIcon,
  EyeIcon,
  FileCheckmarkIcon,
  InboxFillIcon,
  InformationSquareIcon,
  MenuHamburgerIcon,
  PaperclipIcon,
  TrashIcon,
} from '@navikt/aksel-icons';
import { nav, skatt } from '../../../examples/avatar';
import type { AvatarProps } from '../Avatar';
import type { FilterProps } from './useFilter';

export const ownerFilter: FilterProps = {
  id: 'owner',
  groupId: '3',
  name: 'owner',
  icon: MenuHamburgerIcon,
  title: 'Tjenesteeier ...',
  groups: {
    1: {
      title: 'Velg tjenesteier',
    },
  },
  items: [
    {
      id: '1',
      groupId: '1',
      role: 'checkbox',
      name: 'owner',
      value: 'skatt',
      title: 'Skatteetaten',
      icon: skatt,
    },
    {
      id: '2',
      groupId: '1',
      role: 'checkbox',
      name: 'owner',
      value: 'nav',
      title: 'NAV',
      icon: nav,
    },
  ],
};

export const statusFilter: FilterProps = {
  id: '1',
  groupId: '1',
  name: 'status',
  icon: InformationSquareIcon,
  title: 'Status ...',
  groups: {
    1: {
      title: 'Velg status',
    },
  },
  items: [
    {
      id: '1',
      groupId: '1',
      role: 'checkbox',
      name: 'unread',
      value: 'true',
      title: 'Ulest',
    },
    {
      id: '2',
      groupId: '2',
      role: 'checkbox',
      name: 'status',
      value: 'requires-action',
      title: 'Krever handling',
    },
    {
      id: '3',
      groupId: '2',
      role: 'checkbox',
      name: 'status',
      value: 'awaiting',
      title: 'Avventer',
    },
    {
      id: '4',
      groupId: '2',
      role: 'checkbox',
      name: 'status',
      value: 'in-progress',
      title: 'Under arbeid',
    },
    {
      id: '5',
      groupId: '2',
      role: 'checkbox',
      name: 'status',
      value: 'completed',
      title: 'Avsluttet',
    },
    {
      id: '6',
      groupId: '3',
      role: 'checkbox',
      name: 'status',
      value: 'undefined',
      title: 'Ingen status',
    },
  ],
};

export const timeFilter: FilterProps = {
  id: '2',
  groupId: '1',
  icon: CalendarIcon,
  name: 'time',
  title: 'Dato ...',
  groups: {
    1: {
      title: 'Velg dato',
    },
  },
  items: [
    {
      id: '1',
      groupId: '1',
      name: 'time',
      role: 'radio',
      value: 'all-time',
      title: 'Alle tider',
    },
    {
      id: '2',
      groupId: '2',
      name: 'time',
      role: 'radio',
      value: 'today',
      title: 'I dag',
    },
    {
      id: '3',
      groupId: '2',
      name: 'time',
      role: 'radio',
      value: 'this-week',
      title: 'Denne uken',
    },
    {
      id: '4',
      groupId: '2',
      name: 'time',
      role: 'radio',
      value: 'this-month',
      title: 'Denne måneden',
    },

    {
      id: '5',
      groupId: '3',
      name: 'time',
      role: 'radio',
      value: 'last-6-months',
      title: 'Siste 6 måneder',
    },
    {
      id: '6',
      groupId: '3',
      name: 'time',
      role: 'radio',
      value: 'last-12-months',
      title: 'Siste 12 måneder',
    },
    {
      id: '7',
      groupId: '4',
      name: 'datepicker',
      role: 'datepicker',
      icon: CalendarIcon,
      title: 'Spesifiser dato ...',
      linkIcon: true,
    },
  ],
};

export const seenByFilter: FilterProps = {
  id: 'seenBy',
  groupId: '2',
  icon: EyeIcon,
  name: 'seenBy',
  title: 'Sett av ...',
  searchable: true,
  search: {
    name: 'seenBy',
    placeholder: 'Seen by who?',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
  },
  groups: {
    1: {
      title: 'Sett av ...',
    },
    search: {
      title: '{count} treff',
    },
  },
  items: [
    {
      id: '1',
      groupId: '1',
      name: 'seenBy',
      role: 'checkbox',
      value: 'you',
      title: 'Sett av deg',
    },
    {
      id: '2',
      groupId: '1',
      name: 'seenBy',
      role: 'checkbox',
      value: 'others',
      title: 'Sett av andre',
    },
    {
      id: '3',
      groupId: '2',
      name: 'seenBy',
      role: 'checkbox',
      value: 'per-nordmann',
      title: 'Per Nordmann',
    },
    {
      id: '4',
      groupId: '2',
      name: 'seenBy',
      role: 'checkbox',
      value: 'kari-nordmann',
      title: 'Kari Nordmann',
    },
  ],
};

export const contentFilter: FilterProps = {
  id: 'content',
  groupId: '2',
  icon: PaperclipIcon,
  name: 'content',
  title: 'Inneholder ...',
  groups: {
    1: {
      title: 'Inneholder ...',
    },
  },
  items: [
    {
      id: '1',
      groupId: '1',
      name: 'drafts',
      role: 'checkbox',
      value: 'true',
      title: 'Utkast',
    },
    {
      id: '2',
      groupId: '1',
      name: 'attachments',
      role: 'checkbox',
      value: 'true',
      title: 'Vedlegg',
    },
    {
      id: '3',
      groupId: '2',
      name: 'sent',
      role: 'checkbox',
      value: 'true',
      title: 'Sendte meldinger',
    },
    {
      id: '4',
      groupId: '2',
      name: 'received',
      role: 'checkbox',
      value: 'true',
      title: 'Mottatte meldinger',
    },
  ],
};

export const inboxFilters = [statusFilter, timeFilter, seenByFilter, contentFilter, ownerFilter] as FilterProps[];

export const removableInboxFilters = inboxFilters?.map((filter) => ({
  ...filter,
  removable: true,
})) as FilterProps[];

export const accountMenuItems = [
  {
    id: 'user',
    groupId: 'favourites',
    name: 'Kari Nordmann',
    birthdate: '03037712345',
  },
  {
    id: 'aa-1',
    groupId: 'aa',
    name: 'Alfa Bar & Brød',
    orgNumber: '551415161',
  },
  {
    id: 'aa-2',
    groupId: 'aa',
    name: 'Alfa Bar & Brød',
    orgNumber: '551415162',
    parentId: 'aa-1',
  },
  {
    id: 'bb-1',
    groupId: 'bb',
    name: 'Beta Inc.',
    orgNumber: '991557788',
  },
  {
    id: 'bb-2',
    groupId: 'bb',
    name: 'Beta Inc.',
    orgNumber: '991557789',
    parentId: 'bb-1',
  },
  {
    id: 'cc-1',
    groupId: 'cc',
    name: 'Charlies engler',
    orgNumber: '333444555',
  },
  {
    id: 'cc-2',
    groupId: 'cc',
    name: 'Charlies engler',
    orgNumber: '333444556',
    parentId: 'cc-1',
  },
  {
    id: 'cc-3',
    groupId: 'dd',
    name: 'Den kjempeskumle krokodillen Alan',
    orgNumber: '333444557',
    parentId: '',
  },
]?.map((item) => {
  const searchWords = [item.name, item.orgNumber, item.birthdate]?.filter(Boolean) || undefined;

  if (item.birthdate) {
    return {
      id: item.id,
      groupId: item.groupId,
      searchWords,
      title: item.name,
      description: 'Født: ' + item.birthdate,
      icon: {
        type: 'person',
        name: item.name,
      } as AvatarProps,
    };
  }

  function splitOrgNumber(str?: string) {
    if (!str) {
      return '';
    }
    const length = str.length;
    const partLength = Math.ceil(length / 3);
    const part1 = str.slice(0, partLength);
    const part2 = str.slice(partLength, partLength * 2);
    const part3 = str.slice(partLength * 2);

    return [part1, part2, part3].join('\u00a0');
  }

  const description = 'Org. nr. ' + splitOrgNumber(item?.orgNumber);

  return {
    id: item.id,
    groupId: item.groupId,
    title: item.name,
    description,
    searchWords,
    icon: {
      type: 'company',
      name: item.name,
      isParent: !item?.parentId,
    } as AvatarProps,
  };
});

export const accountMenu = {
  label: accountMenuItems[0].title,
  items: accountMenuItems,
  searchable: true,
  groups: {
    favourites: { title: 'Favoritter' },
    aa: { title: 'Alle virksomheter' },
    search: { title: '{count} treff' },
  },
  size: 'md',
};

export const inboxMenuItems = [
  {
    id: 'inbox',
    groupId: '1',
    icon: InboxFillIcon,
    selected: true,
    title: 'Innboks',
  },
  {
    id: 'drafts',
    groupId: '2',
    icon: DocPencilIcon,
    title: 'Utkast',
  },
  {
    id: 'sent',
    groupId: '2',
    icon: FileCheckmarkIcon,
    title: 'Sendt',
  },
  {
    id: 'bookmarks',
    groupId: '3',
    icon: BookmarkIcon,
    title: 'Lagrede søk',
  },
  {
    id: 'trash',
    groupId: '4',
    icon: ArchiveIcon,
    title: 'Arkivert',
  },
  {
    id: '6',
    groupId: '4',
    icon: TrashIcon,
    title: 'Papirkurv',
  },
];

export const inboxMenu = {
  label: inboxMenuItems[0].title,
  items: inboxMenuItems,
  size: 'sm',
};
