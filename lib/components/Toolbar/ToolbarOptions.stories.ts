import type { Meta, StoryObj } from '@storybook/react';
import { ToolbarOptions } from './ToolbarOptions';

const meta = {
  title: 'Toolbar/ToolbarOptions',
  component: ToolbarOptions,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof ToolbarOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkboxes: Story = {
  args: {
    optionType: 'checkbox',
    options: [
      {
        type: 'checkbox',
        label: 'Brønnøysundregistrene',
        checked: true,
        value: 'brreg',
        badge: {
          label: '14',
        },
      },
      {
        type: 'checkbox',
        label: 'Skatteetaten',
        checked: true,
        value: 'Skatt',
        badge: {
          label: '23',
        },
      },
      {
        type: 'checkbox',
        label: 'Digdir',
        value: 'digdir',
        badge: {
          label: '2',
        },
      },
      {
        type: 'checkbox',
        label: 'Helstilsynet',
        value: 'hdir',
        badge: {
          label: '7',
        },
      },
    ],
  },
};

export const Radio: Story = {
  args: {
    optionType: 'radio',
    options: [
      {
        groupId: 'a',
        name: 'date',
        label: 'I dag',
        value: 'today',
        checked: true,
        badge: {
          label: '1',
        },
      },
      {
        groupId: 'a',
        name: 'date',
        label: 'Denne uken',
        value: 'this-week',
        badge: {
          label: '4',
        },
      },
      {
        groupId: 'a',
        name: 'date',
        label: 'Denne måneden',
        value: 'this-week',
        badge: {
          label: '11',
        },
      },
      {
        groupId: 'b',
        name: 'date',
        label: 'Siste 6 måneder',
        value: 'last-6-months',
        badge: {
          label: '23',
        },
      },
      {
        groupId: 'b',
        label: 'Siste 12 måneder',
        value: 'this-year',
        badge: {
          label: '43',
        },
      },
      {
        groupId: 'c',
        label: 'Eldre enn 1 år',
        value: 'older-than-a-year',
        badge: {
          label: '22',
        },
      },
    ],
  },
};
