import type { Meta, StoryObj } from '@storybook/react';
import type { ToolbarProps } from '..';
import { skatt } from '../../../examples/avatar';
import { ActivityLog } from './ActivityLog';

const meta = {
  title: 'Dialog/ActivityLog',
  component: ActivityLog,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    items: [
      {
        type: 'created',
        createdAt: '2023-03-11 08:00',
        createdAtLabel: '11. mars 2023 kl 08.00',
        description: 'Dialogen ble opprettet.',
      },
      {
        type: 'information',
        createdBy: skatt,
        createdAt: '2023-03-11 08:00',
        createdAtLabel: '11. mars 2023 kl 08.00',
        description: 'Skattemeldingen din er tilgjengelig.',
      },
      {
        type: 'opened',
        createdAt: '2023-03-11 08:05',
        createdAtLabel: '11. mars 2023 kl 08.05',
        description: 'Varsling ble sendt til deg, Aune Heggebø og Felix Horn Myhre.',
      },
      {
        type: 'opened',
        createdAt: '2023-03-11 09:05',
        createdAtLabel: '11. mars 2023 kl 09.05',
        description: 'Dialogen ble åpnet av Felix Horn Myhre.',
      },
      {
        type: 'opened',
        createdAt: '2023-03-12 09:15',
        createdAtLabel: '12. mars 2023 kl 09.15',
        description: 'Dialogen ble åpnet av deg.',
      },
      {
        type: 'opened',
        createdAt: '2023-03-12 11:22',
        createdAtLabel: '12. mars 2023 kl 11.22',
        description: 'Dialogen ble åpnet av Aune Heggebø.',
      },
      {
        type: 'opened',
        createdAt: '2023-03-12 14:35',
        createdAtLabel: '12. mars 2023 kl 14.35',
        description: 'Dialogen ble send til innsending.',
      },
      {
        type: 'information',
        createdBy: {
          name: 'Aune Heggebø',
        },
        createdAt: '2023-03-12 14:40',
        createdAtLabel: '12. mars 2023 kl 14.40',
        description: 'Skattemeldingen ble levert.',
      },
      {
        type: 'information',
        createdBy: skatt,
        createdAt: '2023-04-09 08:00',
        createdAtLabel: '9. april 2023 kl 08.00',
        description: 'Vi har mottatt nye opplysninger og oppdatert Skattemeldingen din.',
      },
      {
        type: 'opened',
        createdAt: '2023-03-11 08:05',
        createdAtLabel: '11. mars 2023 kl 08.05',
        description: 'Varsling ble sendt til deg, Aune Heggebø og Felix Horn Myhre.',
      },
      {
        type: 'opened',
        createdAt: '2023-03-11 09:15',
        createdAtLabel: '11. mars 2023 kl 09.15',
        description: 'Dialogen ble åpnet av deg.',
      },
      {
        type: 'opened',
        createdAt: '2023-03-11 08:00',
        createdAtLabel: '11. mars 2023 kl 08.00',
        description: 'Dialogen ble åpnet av Aune Heggebø.',
      },
      {
        type: 'information',
        createdBy: {
          name: 'Aune Heggebø',
        },
        createdAt: '2023-07-02 12:45',
        createdAtLabel: '2. juli 2023 kl 12.45',
        description: 'Skattemeldingen ble levert.',
      },
      {
        type: 'closed',
        createdAt: '2023-07-12 12:45',
        createdAtLabel: '2. juli 2023 kl 12.50',
        description: 'Dialogen ble avsluttet.',
      },
    ],
  },
} satisfies Meta<typeof ActivityLog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithToolbar = (args: typeof ActivityLog) => {
  const toolbar: ToolbarProps = {
    search: {
      name: 'search',
      placeholder: 'Søk i loggen',
    },
    filters: [
      {
        name: 'type',
        label: 'Alle hendelser',
        optionType: 'checkbox',
        options: [
          {
            label: 'Informasjon',
            value: 'information',
          },
          {
            label: 'Åpnet av',
            value: 'opened',
          },
        ],
      },
    ],
  };

  return <ActivityLog {...args} toolbar={toolbar} />;
};
