import { ClockDashedIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { MetaItem } from './MetaItem';

const meta = {
  title: 'Meta/MetaItem',
  component: MetaItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Label',
  },
} satisfies Meta<typeof MetaItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Icon: Story = {
  args: { icon: ClockDashedIcon },
};
