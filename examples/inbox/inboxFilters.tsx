import { CalendarIcon, EyeIcon, InformationSquareIcon, MenuHamburgerIcon, PaperclipIcon } from '@navikt/aksel-icons';
import type { FilterProps } from '../../lib/components/Toolbar/useFilter';

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
    },
    {
      id: '2',
      groupId: '1',
      role: 'checkbox',
      name: 'owner',
      value: 'nav',
      title: 'NAV',
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
