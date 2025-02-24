import type { Meta, StoryObj } from '@storybook/react';
import { SeenByLog } from './SeenByLog';

const meta = {
  title: 'Dialog/SeenByLog',
  component: SeenByLog,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    endUserLabel: 'deg',
    items: [
      {
        id: '1',
        seenBy: {
          type: 'person',
          name: 'Felix Horn Myhre',
        },
        seenAt: '2025-01-01 08:30',
        seenAtLabel: '1. januar kl 08.30',
      },
      {
        id: '2',
        seenBy: {
          type: 'person',
          name: 'Mathias Dyngeland',
          isEndUser: true,
        },
        seenAt: '2025-02-03 08:45',
        seenAtLabel: '6. januar kl 08.45',
      },
      {
        id: '3',
        seenBy: {
          type: 'person',
          name: 'Aune Heggebø',
        },
        seenAt: '2025-04-15 11:22',
        seenAtLabel: '15. april kl 11.22',
      },
      {
        id: '4',
        seenBy: {
          type: 'person',
          name: 'Freyr Alexandersson',
        },
        seenAt: '2025-04-15 12:25',
        seenAtLabel: '16. april kl 12.25',
      },
      {
        id: '5',
        seenBy: {
          type: 'person',
          name: 'Joachim Soltvedt',
        },
        seenAt: '2025-05-17 08:15',
        seenAtLabel: '17. mai kl 08.15',
      },
    ],
  },
} satisfies Meta<typeof SeenByLog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
