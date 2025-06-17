import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  DialogActions,
  DialogAttachments,
  DialogBody,
  DialogContact,
  DialogHeader,
  DialogHistory,
  DialogLayout,
  DialogSection,
  Divider,
} from '../';
import { dialogContact, dialogLayout, seenByLog } from '../../../examples';
import { brreg } from '../../../examples/avatar';

const meta = {
  title: 'Inbox/Dialog/DialogLayout',
  component: DialogLayout,
  tags: ['beta', 'skip-test'],
  parameters: {},
  args: {
    ...dialogLayout,
  },
} satisfies Meta<typeof DialogLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const RequiresAttention: Story = {
  args: {
    children: (
      <>
        <DialogHeader
          title="Rapportering av bedriftsdata"
          updatedAt="2015-01-15 08:00:00"
          updatedAtLabel="15. januar 2025 kl. 08.00"
          status={{ value: 'requires-attention', label: 'Krever handling' }}
        />
        <DialogBody sender={brreg} recipientLabel="til" recipient={{ name: 'Mottakers navn' }} seenByLog={seenByLog}>
          <p>Du må rapportere bedriftsdata innen 15. april 2025.</p>
          <DialogActions items={[{ id: '1', label: 'Til rapportering', priority: 'primary' }]} />
        </DialogBody>
        <DialogHistory
          items={[
            {
              id: 's1',
              items: [
                {
                  id: 's1.1',
                  byline: 'Brreg, 15. januar 2025 kl. 08.00',
                  children: <p>Dialogen ble opprettet.</p>,
                },
              ],
            },
          ]}
        />
        <Divider />
        <DialogSection title="Mer informasjon">
          <p>
            Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.
          </p>
        </DialogSection>
        <Divider />
        <DialogContact {...dialogContact} title="Ta kontakt">
          <p>
            Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.
          </p>
        </DialogContact>
      </>
    ),
  },
};

export const InProgress: Story = {
  args: {
    children: (
      <>
        <DialogHeader
          title="Rapportering av bedriftsdata"
          updatedAt="2015-03-03 12:15:00"
          updatedAtLabel="3. april 2025 kl. 12.15"
          status={{ value: 'in-progress', label: 'Under arbeid' }}
        />
        <DialogBody
          sender={brreg}
          recipientLabel="til"
          recipient={{ name: 'Mottakers navn' }}
          seenByLog={{
            ...seenByLog,
            items: seenByLog.items.slice(0, 2),
            title: 'Sett av deg og Felix Horn Myhre',
          }}
        >
          <p>Bedriftsdata er sendt til behandling. Forventet behandlingstid: 2 uker.</p>
        </DialogBody>
        <DialogHistory
          items={[
            {
              id: 's1',
              items: [
                {
                  id: 's1.1',
                  type: 'submission',
                  variant: 'transmission',
                  byline: 'Felix Horn Myhre, 16. mars 2025',
                  sender: {
                    name: 'Felix Horn Myhre',
                  },
                  title: 'Bedriftsdata er sendt inn',
                },
              ],
            },
            {
              id: 's1',
              items: [
                {
                  id: 's1.1',
                  byline: 'Brreg, 16. mars 2025',
                  children: <p>Dialogen ble opprettet.</p>,
                },
              ],
            },
          ]}
        />
        <Divider />
        <DialogSection title="Mer informasjon">
          <p>
            Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.
          </p>
        </DialogSection>
        <Divider />
        <DialogContact {...dialogContact} title="Ta kontakt">
          <p>
            Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.
          </p>
        </DialogContact>
      </>
    ),
  },
};

export const Completed: Story = {
  args: {
    children: (
      <>
        <DialogHeader
          title="Rapportering av bedriftsdata"
          updatedAt="2015-03-03 12:15:00"
          updatedAtLabel="15. april 2025 kl. 14.15"
          status={{ value: 'completed', label: 'Avsluttet' }}
        />
        <DialogBody
          sender={brreg}
          recipientLabel="til"
          recipient={{ name: 'Mottakers navn' }}
          seenByLog={{
            ...seenByLog,
            items: seenByLog.items.slice(0, 3),
            title: 'Sett av deg+2',
          }}
        >
          <p>Bedriftsdata er godkjent.</p>
          <DialogAttachments title="1 vedlegg" items={[{ label: 'Søknaden er godkjent.pdf', href: '#' }]} />
        </DialogBody>
        <DialogHistory
          items={[
            {
              id: 's1',
              items: [
                {
                  id: 's1.1',
                  variant: 'transmission',
                  byline: 'Brreg, 16. mars 2025',
                  sender: brreg,
                  type: 'acceptance',
                  title: 'Bedriftsdata er godkjent',
                  badge: {
                    color: 'success',
                    label: 'Godkjent',
                  },
                },
                {
                  id: 's1.1',
                  type: 'submission',
                  variant: 'transmission',
                  byline: 'Felix Horn Myhre, 16. mars 2025',
                  sender: {
                    name: 'Felix Horn Myhre',
                  },
                  title: 'Bedriftsdata er sendt inn',
                },
              ],
            },
            {
              id: 's1',
              items: [
                {
                  id: 's1.1',
                  byline: 'Brreg, 16. mars 2025',
                  children: <p>Dialogen ble opprettet.</p>,
                },
              ],
            },
          ]}
        />
        <Divider />
        <DialogSection title="Mer informasjon">
          <p>
            Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.
          </p>
        </DialogSection>
        <Divider />
        <DialogContact {...dialogContact} title="Ta kontakt">
          <p>
            Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.
          </p>
        </DialogContact>
      </>
    ),
  },
};

export const WithoutStatus: Story = {
  args: {
    children: (
      <>
        <DialogHeader
          title="Rapportering av bedriftsdata"
          updatedAt="2015-03-03 12:15:00"
          updatedAtLabel="15. april 2025 kl. 14.15"
        />
        <DialogHistory
          items={[
            {
              id: 's1',
              items: [
                {
                  id: 's1.1',
                  variant: 'transmission',
                  byline: 'Brreg, 16. mars 2025',
                  sender: brreg,
                  type: 'acceptance',
                  title: 'Bedriftsdata er godkjent',
                  badge: {
                    color: 'success',
                    label: 'Godkjent',
                  },
                },
                {
                  id: 's1.1',
                  type: 'submission',
                  variant: 'transmission',
                  byline: 'Felix Horn Myhre, 16. mars 2025',
                  sender: {
                    name: 'Felix Horn Myhre',
                  },
                  title: 'Bedriftsdata er sendt inn',
                },
              ],
            },
            {
              id: 's1',
              items: [
                {
                  id: 's1.1',
                  byline: 'Brreg, 16. mars 2025',
                  children: <p>Dialogen ble opprettet.</p>,
                },
              ],
            },
          ]}
        />
        <Divider />
        <DialogSection title="Mer informasjon">
          <p>
            Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.
          </p>
        </DialogSection>
        <Divider />
        <DialogContact {...dialogContact} title="Ta kontakt">
          <p>
            Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.
          </p>
        </DialogContact>
      </>
    ),
  },
};
