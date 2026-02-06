export const inboxDateFilter = {
  name: 'date',
  label: 'Velg dato',
  items: [
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
  ].map((item) => ({
    ...item,
    name: 'date',
    role: 'radio',
  })),
};

export const inboxStatusFilter = {
  name: 'status',
  label: 'Velg status',
  items: [
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
  ].map((item) => ({
    ...item,
    name: 'status',
    role: 'checkbox',
  })),
};

export const inboxFilters = [
  {
    removable: true,
    name: 'from',
    label: 'Velg avsender',
    items: [
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
    ].map((item) => ({
      ...item,
      name: 'from',
      role: 'checkbox',
    })),
    search: {
      placeholder: 'Søk etter avsender',
      name: 'search-sender',
      clearButtonAltText: 'Tøm søkefelt',
    },
  },
  { ...inboxStatusFilter, removable: true },
  { ...inboxDateFilter, removable: true },
];
