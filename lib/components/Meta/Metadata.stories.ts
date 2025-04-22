import { CardIcon, ClockDashedIcon, HourglassIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { Metadata } from './Metadata';

const meta = {
  title: 'Meta/Metadata',
  component: Metadata,
  tags: ['autodocs'],
  parameters: {},
  args: {
    items: [
      {
        icon: ClockDashedIcon,
        label: 'Frist: 11. mai 2024',
      },
      {
        icon: HourglassIcon,
        label: 'Behandlingstid: 14 dager',
      },
      {
        icon: CardIcon,
        label: 'Gebyr: 500 kroner',
      },
    ],
  },
} satisfies Meta<typeof Metadata>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const List: Story = {
  args: {
    variant: 'list',
  },
};
