import type { Meta, StoryObj } from '@storybook/react-vite';
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
    name: 'checkboxes',
    options: [
      {
        type: 'checkbox',
        label: 'Brønnøysundregistrene',
        checked: true,
        value: 'brreg',
        count: 14,
      },
      {
        type: 'checkbox',
        label: 'Skatteetaten',
        checked: true,
        value: 'Skatt',
        count: 23,
      },
      {
        type: 'checkbox',
        label: 'Digdir',
        value: 'digdir',
        count: 2,
      },
      {
        type: 'checkbox',
        label: 'Helstilsynet',
        value: 'hdir',
        count: 7,
      },
    ],
  },
};

export const Radio: Story = {
  args: {
    name: 'radio',
    optionType: 'radio',
    options: [
      {
        groupId: 'a',
        name: 'date',
        label: 'I dag',
        value: 'today',
        checked: true,
        count: 1,
      },
      {
        groupId: 'a',
        name: 'date',
        label: 'Denne uken',
        value: 'this-week',
        count: 4,
      },
      {
        groupId: 'a',
        name: 'date',
        label: 'Denne måneden',
        value: 'this-week',
        count: 11,
      },
      {
        groupId: 'b',
        name: 'date',
        label: 'Siste 6 måneder',
        value: 'last-6-months',
        count: 23,
      },
      {
        groupId: 'b',
        label: 'Siste 12 måneder',
        value: 'this-year',
        count: 43,
      },
      {
        groupId: 'c',
        label: 'Eldre enn 1 år',
        value: 'older-than-a-year',
        count: 22,
      },
    ],
  },
};
