import { ArchiveIcon, ArrowRedoIcon, EyeClosedIcon, TrashIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DialogActions,
  DialogAttachments,
  DialogBody,
  DialogHeader,
  DialogHistory,
  DialogLayout,
  TransmissionList,
} from '..';

const meta = {
  title: 'Inbox/Dialog/DialogDetails',
  tags: ['beta'],
  parameters: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const DialogDetails: Story = {
  render: () => (
    <DialogLayout
      backButton={{
        label: 'Tilbake',
        onClick: () => console.log('Back clicked'),
      }}
      contextMenu={{
        items: [
          {
            id: '1',
            label: 'Alternativ 1',
            onClick: () => console.log('Option 1 clicked'),
          },
          {
            id: '2',
            label: 'Alternativ 2',
            onClick: () => console.log('Option 2 clicked'),
          },
        ],
      }}
      pageMenu={{
        items: [
          {
            id: '1',
            icon: ArrowRedoIcon,
            title: 'Del og gi tilgang',
            as: 'button',
            onClick: () => console.log('Share clicked'),
          },
          {
            id: '2',
            icon: EyeClosedIcon,
            title: 'Marker som ulest',
            as: 'button',
            onClick: () => console.log('Mark unread clicked'),
          },
          {
            id: '3',
            icon: ArchiveIcon,
            title: 'Flytt til arkiv',
            as: 'button',
            onClick: () => console.log('Archive clicked'),
          },
          {
            id: '4',
            icon: TrashIcon,
            title: 'Flytt til papirkurv',
            as: 'button',
            onClick: () => console.log('Delete clicked'),
          },
        ],
      }}
    >
      <DialogHeader
        title="Rapportering av bedriftsdata"
        updatedAt="2025-02-14T23:27:37.383Z"
        updatedAtLabel="15. februar 2025 kl. 08.30"
        status={{
          value: 'requires-attention',
          label: 'Krever handling',
        }}
        dueAt="2025-05-31T21:59:59.999Z"
        dueAtLabel="Frist: 31. mai 2025"
        attachmentsCount={2}
        sentCount={1}
        receivedCount={0}
      />
      <DialogBody
        sender={{
          type: 'company',
          name: 'Statistisk sentralbyrå',
          imageUrl:
            'https://cdn.sanity.io/images/z3it2oa7/production/610b0696bb3c942b0493841b348780535b035275-44x44.png?w=96',
        }}
        recipientLabel="til"
        recipient={{
          type: 'person',
          name: 'Mottakers navn',
        }}
        seenByLog={{
          collapsible: true,
          title: 'Sett av deg+3',
          items: [
            {
              id: '1',
              type: 'person',
              name: 'Felix Horn Myhre',
              seenAt: '2025-01-01 08:30',
              seenAtLabel: '1. januar kl 08.30',
            },
            {
              id: '2',
              type: 'person',
              name: 'Mathias Dyngeland',
              isEndUser: true,
              seenAt: '2025-02-03 08:45',
              seenAtLabel: '6. januar kl 08.45',
            },
            {
              id: '3',
              type: 'person',
              name: 'Aune Heggebø',
              seenAt: '2025-04-15 11:22',
              seenAtLabel: '15. april kl 11.22',
            },
          ],
        }}
      >
        <p>Du må levere bedriftsdata innen 31. mai.</p>
        <DialogAttachments
          title="2 vedlegg"
          items={[
            { href: '#', label: 'Dokument 1.pdf' },
            { href: '#', label: 'Dokument 2.pdf' },
          ]}
        />
        <DialogActions
          items={[
            {
              id: '1',
              priority: 'primary',
              label: 'Til rapportering',
            },
            { id: '2', priority: 'secondary', label: 'Sekundær' },
          ]}
        />
      </DialogBody>
      <DialogHistory
        items={[
          {
            children: (
              <TransmissionList
                items={[
                  {
                    id: '1',
                    byline: 'Jakob Nielsen, 20. februar kl 00.27',
                    sender: { name: 'Jakob Nielsen' },
                    title: 'Bedriftsdata er sendt inn',
                    attachments: {
                      items: [
                        {
                          href: '#',
                          label: 'Bedriftsdata.pdf',
                        },
                      ],
                    },
                  },
                ]}
              />
            ),
          },
          {
            byline: '15. februar 2025 kl. 08.30',
            summary: 'Dialogen ble opprettet',
          },
        ]}
        maxItems={3}
        expandLabel="Vis mer"
        collapseLabel="Vis mindre"
      />
    </DialogLayout>
  ),
};
