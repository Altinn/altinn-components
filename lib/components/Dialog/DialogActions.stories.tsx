import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Section, Switch } from '..';
import { type DialogActionButtonProps, DialogActions } from './DialogActions';

const primary: DialogActionButtonProps = { id: 'primary', priority: 'primary', label: 'Til rapportering' };
const secondary: DialogActionButtonProps = { id: 'secondary', priority: 'secondary', label: 'Gi tilbakemelding' };
const tertiary: DialogActionButtonProps[] = [
  { id: 'tertiary-1', priority: 'tertiary', label: 'Last ned kvittering' },
  { id: 'tertiary-2', priority: 'tertiary', label: 'Be om utsettelse' },
  { id: 'tertiary-3', priority: 'tertiary', label: 'Trekk innsendingen' },
  { id: 'tertiary-4', priority: 'tertiary', label: 'Slett' },
];

const meta = {
  title: 'Inbox/Dialog/DialogActions',
  component: DialogActions,
  tags: ['autodocsi', 'beta'],
  args: {
    items: [primary, secondary],
  },
} satisfies Meta<typeof DialogActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryOnly: Story = {
  args: {
    items: [primary],
  },
};

export const SecondaryOnly: Story = {
  args: {
    items: [secondary],
  },
};

export const WithTertiary: Story = {
  args: {
    items: [primary, secondary, tertiary[0]],
  },
};

export const MaxActions: Story = {
  args: {
    items: [primary, secondary, ...tertiary],
  },
};

export const SortedByPriority: Story = {
  args: {
    items: [tertiary[0], secondary, tertiary[1], primary],
  },
};

export const HiddenActions: Story = {
  args: {
    items: [primary, { ...secondary, hidden: true }, tertiary[0], { ...tertiary[1], hidden: true }],
  },
};

export const PrimaryDisabled: Story = {
  args: {
    items: [{ ...primary, disabled: true }, secondary, tertiary[0]],
  },
};

export const PrimaryLoading: Story = {
  args: {
    items: [{ ...primary, loading: true }, secondary, tertiary[0]],
  },
};

export const NarrowContainer: Story = {
  args: {
    items: [primary, secondary, ...tertiary],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '20rem' }}>
        <Story />
      </div>
    ),
  ],
};

export const ActionAddedAtRuntime: Story = {
  render: function Render(args) {
    const [inBin, setInBin] = useState(false);
    const items: DialogActionButtonProps[] = [
      ...args.items,
      { id: 'delete', priority: 'tertiary', label: 'Slett', hidden: !inBin },
    ];

    return (
      <Section spacing={6}>
        <Switch
          name="in-bin"
          value="1"
          label="Flytt dialogen til papirkurven"
          checked={inBin}
          onChange={() => setInBin(!inBin)}
        />
        <DialogActions items={items} />
      </Section>
    );
  },
};
