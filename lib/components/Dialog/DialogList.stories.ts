import type { Meta, StoryObj } from '@storybook/react';
import { DialogList } from './DialogList';

const meta = {
  title: 'Dialog/DialogList',
  component: DialogList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    items: [
      {
        title: 'Støtte til utbygging av solceller',
        summary: 'Din støtte er innvilget',
        status: { value: 'draft' },
        groupId: '2024-01',
      },
      {
        title: 'Støtte til utbygging av solceller',
        summary: 'Din støtte er innvilget',
        status: { value: 'sent' },
        groupId: '2024-02',
      },
      {
        title: 'Støtte til utbygging av solceller',
        summary: 'Din støtte er innvilget',
        status: { value: 'requires-attention' },
        groupId: '2024-01',
      },
      {
        title: 'Støtte til utbygging av solceller',
        summary: 'Din støtte er innvilget',
        status: { value: 'in-progress' },
        groupId: '2024-02',
      },
      {
        title: 'Støtte til utbygging av solceller',
        summary: 'Din støtte er innvilget.',
        status: { value: 'completed' },
        groupId: '2024-01',
      },
    ],
  },
} satisfies Meta<typeof DialogList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Grouped: Story = {
  args: {
    groups: {
      '2024-01': {
        title: 'Januar 2024',
      },
      '2024-02': {
        title: 'Februar 2024',
      },
    },
  },
};
