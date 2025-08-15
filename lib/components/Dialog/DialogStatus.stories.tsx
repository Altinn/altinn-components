import type { Meta, StoryObj } from '@storybook/react-vite';
import { DialogStatus, DialogStatusEnum, MetaBase } from '..';

const meta = {
  title: 'Inbox/Dialog/DialogStatus',
  component: DialogStatus,
  tags: ['autodocsi', 'beta'],
  parameters: {},
  argTypes: {
    value: {
      options: Object.keys(DialogStatusEnum),
    },
  },
  args: {},
} satisfies Meta<typeof DialogStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => {
  return (
    <MetaBase>
      <DialogStatus value="draft" label="Utkast" />
      <DialogStatus value="requires-attention" label="Krever handling" />
      <DialogStatus value="awaiting" label="Avventer" />
      <DialogStatus value="in-progress" label="Under arbeid" />
      <DialogStatus value="completed" label="Avsluttet" />
    </MetaBase>
  );
};

export const Draft: Story = {
  args: {
    value: 'draft',
    label: 'Utkast',
  },
};

export const Awaiting: Story = {
  args: {
    value: 'awaiting',
    label: 'Avventer',
  },
};

export const RequiresAttention: Story = {
  args: {
    value: 'requires-attention',
    label: 'Krever handling',
  },
};

export const InProgress: Story = {
  args: {
    value: 'in-progress',
    label: 'Under arbeid',
  },
};

export const Completed: Story = {
  args: {
    value: 'completed',
    label: 'Avsluttet',
  },
};
