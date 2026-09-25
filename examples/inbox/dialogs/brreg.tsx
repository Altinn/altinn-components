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

export const brregTable = {
  id: 'table-2025',
  title: 'Innsendingspliktige virksomheter som ikke har levert årsregnskap for regnskapsåret 2024',
  status: { value: 'completed', label: 'Avsluttet' },
  summary: 'Påminnelse om innsending av årsregnskap',
  updatedAt: '2025-10-22T08:43:00.000Z',
  updatedAtLabel: '22. oktober 2025 kl. 08.43',
  sender: brreg,
  badge: { theme: 'surface', label: 'Ulest' },
  children: (
    <>
      <p>Påminnelse om innsending av årsregnskap</p>
      <p>
        Under følger en oversikt over de virksomhetene som ikke har fått godkjent årsregnskapet, der 01866295189
        Knuslete Kunngjøring er registrert med rollen revisor i Enhetsregisteret.
      </p>
      <p>
        I oversikten har vi ikke tatt med de virksomhetene som har årsregnskap under behandling hos Regnskapsregisteret.
      </p>
      <table>
        <thead>
          <tr>
            <th>Org.nr.</th>
            <th>Navn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>310229784</td>
            <td>SAMTIDIG EVENTYRLIG TIGER AS TVANGSAVVIKLINGSBO</td>
          </tr>
          <tr>
            <td>311771302</td>
            <td>DISKRET DOBBEL TIGER AS KONKURSBO</td>
          </tr>
          <tr>
            <td>312987694</td>
            <td>MINKENDE LYKKELIG TIGER AS KONKURSBO</td>
          </tr>
          <tr>
            <td>310790311</td>
            <td>OVERMODIG LYSEBLÅ TIGER AS KONKURSBO</td>
          </tr>
          <tr>
            <td>312285681</td>
            <td>INTRIKAT FIRKANTET TIGER AS KONKURSBO</td>
          </tr>
          <tr>
            <td>314167783</td>
            <td>LYSEBLÅ KJEMPENDE TIGER AS KONKURSBO</td>
          </tr>
          <tr>
            <td>212982202</td>
            <td>SKRIVEFØR OPPRØMT TIGER AS TVANGSAVVIKLINGSBO</td>
          </tr>
          <tr>
            <td>310790389</td>
            <td>KLASSISK USTABIL TIGER AS KONKURSBO</td>
          </tr>
          <tr>
            <td>312186446</td>
            <td>RETTFERDIG LOGISK TIGER AS KONKURSBO</td>
          </tr>
        </tbody>
      </table>{' '}
      <p>Med hilsen</p>
      <p>Brønnøysundregistrene - Regnskapsregisteret</p>
    </>
  ),
};
