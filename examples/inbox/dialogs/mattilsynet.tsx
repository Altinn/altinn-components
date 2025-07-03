import { Button, ButtonGroup, DialogActions, TransmissionList } from '../../../lib';
import { mattilsynet } from '../../avatar';

export const mattilsynetDraft = {
  id: 'mattilsynet-draft',
  title: 'Dispensasjon for import av kjæledyr',
  draftsLabel: '2 utkast',
  updatedAt: '2024-10-18T09:40:00.000Z',
  updatedAtLabel: '18. oktober 2024 kl. 11.40',
  sender: mattilsynet,
  history: {
    items: [
      {
        id: '1',
        children: (
          <TransmissionList
            items={[
              {
                id: 'draft',
                datetime: '2024-10-18T09:40:00.000Z',
                byline: 'Japhet Sery Larsen, i går kl. 11.40',
                title: 'Utkast til søknad',
                sender: {
                  name: 'Japhet Sery Larsen',
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
              {
                id: 'draft',
                datetime: '2024-10-15T09:40:00.000Z',
                byline: 'Fredrik Pallesen Knudsen, 15. oktober kl. 12.30',
                title: 'Utkast til søknad',
                sender: {
                  name: 'Fredrik Pallesen Knudsen',
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
    ],
  },
};

export const mattilsynetAttention = {
  id: 'mattilsynet-attention',
  title: 'Godkjenning av dyreforsøk',
  draftsLabel: 'Utkast',
  updatedAt: '2024-08-02T09:40:00.000Z',
  updatedAtLabel: '2. august 2024 kl. 09.00',
  summary: 'Vi trenger mer informasjon om dyreforsøket ditt.',
  status: {
    value: 'requires-attention',
    label: 'Krever handling',
  },
  children: (
    <>
      <p>Vi trenger mer informasjon om dyreforsøket ditt.</p>
      <ul>
        <li>Hvilke dyrearter skal du forske på?</li>
        <li>Når skal forsøket gjennomføres?</li>
      </ul>
      <DialogActions items={[{ id: '1', priority: 'primary', label: 'Send informasjon' }]} />
    </>
  ),
  sender: mattilsynet,
  history: {
    items: [
      {
        id: '1',
        children: (
          <TransmissionList
            items={[
              {
                id: 'draft',
                datetime: '2024-10-18T09:40:00.000Z',
                byline: 'Felix Horn Myhre, i går kl. 11.40',
                title: 'Utkast til svar',
                sender: {
                  name: 'Felix Horn Myhre',
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
        id: '1',
        children: (
          <TransmissionList
            items={[
              {
                id: 'x',
                datetime: '2024-07-07T13:20:00.000Z',
                byline: 'Felix Horn Myhre, 2. august 2024 kl. 09.00',
                title: 'Vi trenger mer informasjon',
                sender: mattilsynet,
              },
              {
                id: 'draft',
                datetime: '2024-07-07T13:20:00.000Z',
                byline: 'Felix Horn Myhre, 7. juli 2024 kl. 13.20',
                title: 'Søknad ble sendt',
                sender: {
                  name: 'Felix Horn Myhre',
                },
              },
            ]}
          />
        ),
      },
    ],
  },
};
