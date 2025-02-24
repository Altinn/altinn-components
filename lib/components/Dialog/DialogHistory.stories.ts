import type { Meta, StoryObj } from '@storybook/react';
import { skatt } from '../../../examples/avatar';
import { DialogHistory } from './DialogHistory';

const meta = {
  title: 'Dialog/DialogHistory',
  component: DialogHistory,
  tags: ['autodocsi', 'beta'],
  parameters: {},
  args: {
    expandLabel: 'Vis historikk',
    collapseLabel: 'Skjul historikk',
    items: [
      {
        createdBy: skatt,
        createdAt: '2023-03-11 08:00',
        createdAtLabel: '11. mars 2023 kl 08.00',
        description: 'Skattemeldingen din er tilgjengelig.',
      },
      {
        createdBy: {
          name: 'Aune Heggebø',
        },
        createdAt: '2023-03-12 14:40',
        createdAtLabel: '12. mars 2023 kl 14.40',
        description: 'Skattemeldingen ble levert.',
      },
      {
        createdBy: skatt,
        createdAt: '2023-04-09 08:00',
        createdAtLabel: '9. april 2023 kl 08.00',
        description: 'Vi har mottatt nye opplysninger og oppdatert Skattemeldingen din.',
      },
      {
        createdBy: {
          name: 'Aune Heggebø',
        },
        createdAt: '2023-07-02 12:45',
        createdAtLabel: '2. juli 2023 kl 12.45',
        description: 'Skattemeldingen ble levert.',
      },
    ],
  },
} satisfies Meta<typeof DialogHistory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Collapsible: Story = {
  args: {
    collapsible: true,
  },
};
