import type { Meta, StoryObj } from '@storybook/react';
import { HistoryList } from './HistoryList';

const meta = {
  title: 'History/HistoryList',
  component: HistoryList,
  tags: ['autodocs'],
  parameters: {},
  args: {
    items: [
      {
        createdAt: '2004-02-15 08:00',
        createdAtLabel: '15. februar 2024 kl 08.00',
        createdBy: {
          type: 'company',
          name: 'Skatteetaten',
          imageUrl:
            'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
        },
        summary: 'Skjemaet er lukket for ordinær rapportering og korreksjoner.',
      },
      {
        createdAt: '2004-01-31 08:00',
        createdAtLabel: '31. januar 2024 kl 08.00',
        createdBy: {
          type: 'company',
          name: 'Skatteetaten',
          imageUrl:
            'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
        },
        summary: 'Skjemaet er lukket for ordinær rapportering. Du kan gjøre korreksjoner tom. 15. februar.',
      },
      {
        size: 'sm',
        createdAt: '2024-01-17 15:12',
        createdAtLabel: '17. januar 2024 kl 15.12',
        summary: 'Tredjepartsopplysninger er godkjent.',
        transmissions: {
          title: '2 forsendelser',
          items: [
            {
              title: 'Forseendelse 1',
              sender: {
                type: 'person',
                name: 'Eirik Horneland',
              },
            },
            {
              title: 'Svar på forsendelse 1',
              sender: {
                type: 'company',
                name: 'Skatteetaten',
                imageUrl:
                  'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
              },
            },
          ],
        },
      },
      {
        size: 'sm',
        createdAt: '2024-01-04 12:15',
        createdAtLabel: '4. januar 2024 kl 12.15',
        summary: 'Tredjepartsopplysninger ble levert.',
        transmissions: {
          title: '1 forsendelse',
          items: [
            {
              title: 'Forseendelse 1',
              sender: {
                type: 'person',
                name: 'Eirik Horneland',
              },
            },
          ],
        },
      },
      {
        createdAt: '2004-01-02 08:00',
        createdAtLabel: '2. januar 2024 kl 08.00',
        createdBy: {
          type: 'company',
          name: 'Skatteetaten',
          imageUrl:
            'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
        },
        summary: 'Skjemaet er åpent. Du kan nå levere tredjepartsopplysninger.',
      },
      {
        createdAt: '2003-10-15 08:00',
        createdAtLabel: '15. oktober 2023 kl 08.00',
        createdBy: {
          type: 'company',
          name: 'Skatteetaten',
          imageUrl:
            'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
        },
        summary: 'Du må levere tredjepartsopplysninger for boligselskap.',
        attachments: {
          title: '1 vedlegg',
          items: [
            {
              href: '#',
              label: 'Rapportering av tredjepartsopplysninger for boligselskap.pdf',
            },
          ],
        },
      },
    ],
  },
} satisfies Meta<typeof HistoryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const ActivityLog: Story = {
  args: {
    items: [
      {
        createdAt: '2004-01-02 08:00',
        createdAtLabel: '2. januar 2024 kl 08.00',
        summary: 'Dialogen ble flyttet til papirkurven.',
      },
      {
        createdAt: '2003-10-15 08:00',
        createdAtLabel: '15. oktober 2023 kl 08.00',
        createdBy: {
          type: 'company',
          name: 'Skatteetaten',
          imageUrl:
            'https://cdn.sanity.io/images/z3it2oa7/production/e16a4f384d1d5ed959e1d74f0626259711d67509-88x88.png?w=96',
        },
        summary: 'Du må levere tredjepartsopplysninger for boligselskap.',
        attachments: {
          title: '1 vedlegg',
          items: [
            {
              href: '#',
              label: 'Rapportering av tredjepartsopplysninger for boligselskap.pdf',
            },
          ],
        },
      },
      {
        size: 'xs',
        createdAt: '2004-01-02 08:00',
        createdAtLabel: '2. januar 2024 kl 08.00',
        summary: 'Utkast lagret.',
      },
      {
        size: 'xs',
        createdAt: '2004-01-02 08:00',
        createdAtLabel: '2. januar 2024 kl 08.00',
        summary: 'Skjema opprettet.',
      },
      {
        size: 'xs',
        createdAt: '2004-01-02 08:00',
        createdAtLabel: '2. januar 2024 kl 08.00',
        summary: 'Dialogen ble flyttet til arkivet.',
      },
      {
        size: 'xs',
        createdAt: '2004-01-02 08:00',
        createdAtLabel: '2. januar 2024 kl 08.00',
        summary: 'Dialogen ble opprettet.',
      },
    ],
  },
};
