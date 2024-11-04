import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

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
      },
      {
        title: 'Støtte til utbygging av solceller',
        summary: 'Din støtte er innvilget',
        status: { value: 'sent' },
      },
      {
        title: 'Støtte til utbygging av solceller',
        summary: 'Din støtte er innvilget',
        status: { value: 'requires-attention' },
      },
      {
        title: 'Støtte til utbygging av solceller',
        summary: 'Din støtte er innvilget',
        status: { value: 'in-progress' },
      },
      {
        title: 'Støtte til utbygging av solceller',
        summary: 'Din støtte er innvilget.',
        status: { value: 'completed' },
      },
    ],
  },
} satisfies Meta<typeof DialogList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Company: Story = {
  args: {
    theme: 'company',
  },
};

export const Person: Story = {
  args: {
    theme: 'person',
  },
};
