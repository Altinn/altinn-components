import type { Meta, StoryObj } from '@storybook/react';

import { ToolbarFilter } from './ToolbarFilter';

const meta = {
  title: 'Toolbar/ToolbarDate',
  component: ToolbarFilter,
  tags: ['autodocs'],
  parameters: {},
  args: {
    label: 'Velg dato',
    value: ['today'],
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
        value: 'this-week',
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
  },
} satisfies Meta<typeof ToolbarFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'default',
  },
};

export const Expanded: Story = {
  args: {
    name: 'expanded',
  },
};
