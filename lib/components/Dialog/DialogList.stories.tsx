import type { Meta, StoryObj } from '@storybook/react';
import { DialogList } from '..';
import { dialogListItemsDate, dialogListItemsRoute } from '../../../examples';

const meta = {
  title: 'Dialog/DialogList',
  component: DialogList,
  tags: ['beta'],
  args: {
    items: dialogListItemsDate,
  },
} satisfies Meta<typeof DialogList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GroupedByDate: Story = {
  args: {
    groups: {
      '2023-01': {
        title: 'Januar 2023',
      },
      '2023-02': {
        title: 'Februar 2023',
      },
      '2024-05': {
        title: 'May 2024',
      },
      '2025-05': {
        title: 'May 2025',
      },
      '2023-10': {
        title: 'Oktober 2023',
      },
    },
  },
};

export const GroupedByRoute: Story = {
  args: {
    groups: {
      inbox: {
        title: 'Innboks',
      },
      sent: {
        title: 'Sendt',
      },
      draft: {
        title: 'Utkast',
      },
      bin: {
        title: 'Papirkurv',
      },
      archive: {
        title: 'Arkiv',
      },
    },
    items: dialogListItemsRoute,
  },
};
