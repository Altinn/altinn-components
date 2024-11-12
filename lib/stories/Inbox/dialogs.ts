import type { DialogProps } from '../../components';

export const dialogs: DialogProps[] = [
  {
    id: 'd1',
    title: 'Dialog 1',
    updatedAt: '2024-01-01 16:05',
    status: {
      label: 'Krever handling',
      value: 'requires-attention',
    },
    actions: [
      {
        id: 'a1',
        priority: 'primary',
        label: 'Call to action',
      },
    ],
  },
  {
    id: 'd2',
    title: 'Dialog 2',
    updatedAt: '2024-01-01 14:05',
    status: {
      label: 'Avsluttet',
      value: 'completed',
    },
  },
  {
    id: 'd3',
    title: 'Dialog 2',
    updatedAt: '2024-01-05 12:05',
    status: {
      label: 'Under arbeid',
      value: 'in-progress',
    },
  },
];
