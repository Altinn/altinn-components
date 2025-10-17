import type { ToolbarFilterProps } from '../../lib';

export const inboxDateFilter: ToolbarFilterProps = {
  name: 'date',
  label: 'Velg dato',
  optionType: 'radio',
  options: [
    {
      groupId: 'a',
      name: 'date',
      label: 'I dag',
      value: 'today',
    },
    {
      groupId: 'a',
      name: 'date',
      label: 'Denne uken',
      value: 'this-week',
    },
    {
      groupId: 'a',
      name: 'date',
      label: 'Denne måneden',
      value: 'this-month',
    },
    {
      groupId: 'b',
      name: 'date',
      label: 'Siste 6 måneder',
      value: 'last-6-months',
    },
    {
      groupId: 'b',
      label: 'Siste 12 måneder',
      value: 'last-year',
    },
    {
      groupId: 'c',
      label: 'Spesifiser dato ...',
      value: 'other',
    },
  ],
};

export const inboxStatusFilter: ToolbarFilterProps = {
  name: 'status',
  optionType: 'checkbox',
  label: 'Velg status',
  options: [
    {
      groupId: '1',
      value: 'draft',
      label: 'Utkast',
    },
    {
      groupId: '1',
      value: 'sent',
      label: 'Sendt',
    },
    {
      groupId: '2',
      value: 'in-progress',
      label: 'Under arbeid',
    },
    {
      groupId: '2',
      value: 'requires-attention',
      label: 'Krever handling',
    },
    {
      groupId: '2',
      value: 'completed',
      label: 'Avsluttet',
    },
  ],
};

export const inboxFilters: ToolbarFilterProps[] = [
  {
    removable: true,
    name: 'from',
    optionType: 'checkbox',
    label: 'Velg avsender',
    options: [
      {
        value: 'skatt',
        label: 'Skatteetaten',
      },
      {
        value: 'brreg',
        label: 'Brønnøysundregistrene',
      },
      {
        value: 'ssb',
        label: 'Statisitisk sentralbyrå',
        count: 10,
      },
      {
        value: 'fkd',
        label: 'Fagernes kjøtt og data',
        count: 124,
      },
      {
        value: 'dvkd',
        label: 'Direktoratet for vilt-, kjøtt og datautstyr',
        count: 14,
      },
      {
        value: 'nav',
        label: 'Arbeids- og velferdsetaten (NAV)',
        count: 120,
      },
      {
        value: 'oslo',
        label: 'Oslo kommune',
      },
    ],
  },
  { ...inboxStatusFilter, removable: true },
  { ...inboxDateFilter, removable: true },
];
