import { DialogAttachments, TransmissionList } from '../../../lib';
import { brreg } from '../../avatar';

export const brregCompleted = {
  id: 'regnskap-2025',
  title: 'Årsregnskap 2025',
  status: { value: 'completed', label: 'Avsluttet' },
  summary: 'Årsregnskapet for 2025 er godkjent.',
  updatedAt: '2025-03-04T07:17:00.000Z',
  updatedAtLabel: '4. mars 2025 kl. 08.17',
  sentCount: 1,
  receivedCount: 1,
  sender: brreg,
  badge: { theme: 'surface', label: 'Ulest' },
  history: {
    items: [
      {
        id: '1',
        children: (
          <TransmissionList
            items={[
              {
                id: '2',
                datetime: '2025-03-04T07:17:00.000Z',
                byline: 'Brreg, 4. mars 2025 kl. 08.17',
                sender: brreg,
                title: 'Årsregnskapet er godkjent',
                type: {
                  value: 'acceptance',
                  label: 'Godkjent',
                },
                attachments: {
                  items: [{ href: '#', label: 'Vedtak om godkjent årsregnskap.pdf' }],
                },
              },
              {
                id: '1',
                datetime: '2025-02-21T12:17:00.000Z',
                byline: 'Felix Horn Myhre, 21. februar 2025 kl. 12.17',
                sender: {
                  name: 'Felix Horn Myhre',
                },
                title: 'Årsregnskapet er sendt inn',
                attachments: {
                  items: [{ href: '#', label: 'Årsregnskap 2025.pdf' }],
                },
              },
            ]}
          />
        ),
      },
    ],
  },
  children: (
    <>
      <p>Årsregnskapet for 2025 er godkjent.</p>
      <DialogAttachments items={[{ href: '#', label: 'Vedtak om godkjent årsregnskap.pdf' }]} />
    </>
  ),
};

export const brregArchived = {
  id: 'regnskap-2024',
  title: 'Årsregnskap 2024',
  status: { value: 'completed', label: 'Avsluttet' },
  summary: 'Årsregnskapet for 2024 er godkjent.',
  updatedAt: '2024-03-04T07:17:00.000Z',
  updatedAtLabel: '4. mars 2024 kl. 08.17',
  archived: true,
  sentCount: 1,
  receivedCount: 1,
  sender: brreg,
  history: {
    items: [
      {
        id: '1',
        children: (
          <TransmissionList
            items={[
              {
                id: '2',
                datetime: '2024-03-04T07:17:00.000Z',
                byline: 'Brreg, 4. mars 2024 kl. 08.17',
                sender: brreg,
                title: 'Årsregnskapet er godkjent',
                type: {
                  value: 'acceptance',
                  label: 'Godkjent',
                },
                attachments: {
                  items: [{ href: '#', label: 'Vedtak om godkjent årsregnskap.pdf' }],
                },
              },
              {
                id: '1',
                datetime: '2024-02-21T12:17:00.000Z',
                byline: 'Felix Horn Myhre, 21. februar 2024 kl. 12.17',
                sender: {
                  name: 'Felix Horn Myhre',
                },
                title: 'Årsregnskapet er sendt inn',
                attachments: {
                  items: [{ href: '#', label: 'Årsregnskap 2024.pdf' }],
                },
              },
            ]}
          />
        ),
      },
    ],
  },
  children: (
    <>
      <p>Årsregnskapet for 2024 er godkjent.</p>
      <DialogAttachments items={[{ href: '#', label: 'Vedtak om godkjent årsregnskap.pdf' }]} />
    </>
  ),
};

export const brregTrashed = {
  id: 'regnskap-2023',
  title: 'Årsregnskap 2023',
  status: { value: 'completed', label: 'Avsluttet' },
  summary: 'Årsregnskapet for 2023 er godkjent.',
  updatedAt: '2023-03-04T07:17:00.000Z',
  updatedAtLabel: '4. mars 2023 kl. 08.17',
  trashed: true,
  sentCount: 1,
  receivedCount: 1,
  sender: brreg,
  history: {
    items: [
      {
        id: '1',
        children: (
          <TransmissionList
            items={[
              {
                id: '2',
                datetime: '2023-03-04T07:17:00.000Z',
                byline: 'Brreg, 4. mars 2023 kl. 08.17',
                sender: brreg,
                title: 'Årsregnskapet er godkjent',
                type: {
                  value: 'acceptance',
                  label: 'Godkjent',
                },
                attachments: {
                  items: [{ href: '#', label: 'Vedtak om godkjent årsregnskap.pdf' }],
                },
              },
              {
                id: '1',
                datetime: '2023-02-21T12:17:00.000Z',
                byline: 'Felix Horn Myhre, 21. februar 2023 kl. 12.17',
                sender: {
                  name: 'Felix Horn Myhre',
                },
                title: 'Årsregnskapet er sendt inn',
                attachments: {
                  items: [{ href: '#', label: 'Årsregnskap 2023.pdf' }],
                },
              },
            ]}
          />
        ),
      },
    ],
  },
  children: (
    <>
      <p>Årsregnskapet for 2023 er godkjent.</p>
      <DialogAttachments items={[{ href: '#', label: 'Vedtak om godkjent årsregnskap.pdf' }]} />
    </>
  ),
};
