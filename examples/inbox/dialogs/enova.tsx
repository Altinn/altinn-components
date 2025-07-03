import { Button, ButtonGroup, DialogActions, TransmissionList } from '../../../lib';
import { enova } from '../../avatar';

export const enovaDraft = {
  id: 'enova-draft',
  title: 'Støtte til fjernvarme',
  draftsLabel: 'Utkast',
  updatedAt: '2025-01-07T23:27:37.384Z',
  updatedAtLabel: '8. mars 2025 kl. 00.27',
  sender: enova,
  history: {
    items: [
      {
        id: '1',
        children: (
          <TransmissionList
            items={[
              {
                id: 'draft',
                datetime: '2024-10-15T09:40:00.000Z',
                byline: 'Anna Aahjem, 15. oktober kl. 12.30',
                title: 'Utkast til søknad',
                sender: {
                  name: 'Anna Aahjem',
                },
                type: {
                  value: 'draft',
                  label: 'Utkast',
                },
                children: (
                  <>
                    <p>Utkast er opprettet.</p>
                    <ButtonGroup>
                      <Button>Fortsett</Button>
                      <Button variant="outline">Slett utkast</Button>
                    </ButtonGroup>
                  </>
                ),
              },
            ]}
          />
        ),
      },
      {
        id: '0',
        byline: '15. oktober kl. 12.30',
        summary: 'Søknad ble opprettet',
      },
    ],
  },
};

export const enovaSent = {
  id: 'enova-sent',
  title: 'Melding om elulykke',
  summary: 'Vi trenger mer informasjon.',
  updatedAt: '2025-02-07T22:27:37.384Z',
  updatedAtLabel: '22. februar 2025 kl. 22.27',
  sentCount: 1,
  status: {
    value: 'requires-attention',
    label: 'Krever handling',
  },
  sender: enova,
  history: {
    items: [
      {
        id: '1',
        children: (
          <TransmissionList
            items={[
              {
                id: 't1',
                byline: 'Felix Horn Myhre, 7. februar 2025',
                datetime: '2025-02-07',
                sender: {
                  name: 'Felix Horn Myhre',
                },
                title: 'Melding om elulykke',
                attachments: {
                  items: [
                    {
                      href: '#',
                      label: 'Kopi av innsendt skjema.pdf',
                    },
                  ],
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
      <p>Vi trenger mer informasjon.</p>
      <ul>
        <li>Hvor skjedde ulykken?</li>
        <li>Hvem var involvert?</li>
      </ul>
      <DialogActions items={[{ id: '1', label: 'Send inn', priority: 'primary' }]} />
    </>
  ),
};

export const enovaProgress = {
  id: 'enova-progress',
  groupId: '2025-03',
  title: 'Støtte til energitiltak',
  status: { value: 'in-progress', label: 'Under arbeid' },
  summary: 'Søknad er sendt til behandling. Forventet behandlingstid: 2 uker.',
  updatedAt: '2025-03-07T23:27:37.384Z',
  updatedAtLabel: '8. mars 2025 kl. 00.27',
  sender: enova,
  sentCount: 1,
  dueAt: undefined,
  dueAtLabel: undefined,
  history: {
    items: [
      {
        id: '1',
        children: (
          <TransmissionList
            items={[
              {
                id: 't1',
                byline: 'Felix Horn Myhre, 7. mars 2025',
                datetime: '2025-03-07',
                sender: {
                  name: 'Felix Horn Myhre',
                },
                title: 'Søknad om støtte til energitiltak',
                attachments: {
                  items: [
                    {
                      href: '#',
                      label: 'Kopi av søknad.pdf',
                    },
                  ],
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
      <p>Søknad er sendt til behandling. Forventet behandlingstid: 2 uker.</p>
    </>
  ),
};
