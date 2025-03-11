import type { Meta, StoryObj } from '@storybook/react';
import { skatt } from '../../../examples/avatar';
import { TransmissionTimeline } from './TransmissionTimeline';

const meta = {
  title: 'Transmission/TransmissionTimeline',
  component: TransmissionTimeline,
  tags: ['autodocsi', 'beta'],
  parameters: {},
  args: {
    items: [
      {
        id: '1a',
        sender: skatt,
        byline: '10. september 2025 kl. 13.39',
        title: 'Svar på søknad om å endre kredittgrense',
        collapsible: false,
        expandLabel: (
          <>
            Svar på <u>Søknad om å endre kredittgrense for tollkreditt</u>
          </>
        ),
        items: [
          {
            id: '1b',
            sender: skatt,
            createdAtLabel: '3. september 2025 kl. 08.30',
            byline: '3. september 2025 kl. 08.30',
            title: 'Søknaden er sendt til behandling',
          },
          {
            id: '1b',
            type: 'submission',
            sender: {
              type: 'company',
              name: 'Bergen bar',
            },
            createdAtLabel: '2. september 2025 kl. 11.15',
            byline: '2. september 2025 kl. 11.15',
            title: 'Søknad om å endre kredittgrense for tollkreditt',
          },
        ],
      },
      {
        id: '2',
        sender: skatt,
        createdAtLabel: '8. september 2025 kl. 13.39',
        byline: '8. september 2025 kl. 13.39',
        title: 'Svar på søknad om tollkreditt',
        expandLabel: (
          <>
            Svar på <u>Søknad om tollkreditt</u>
          </>
        ),
        items: [
          {
            id: '2b',
            type: 'submission',
            sender: {
              type: 'company',
              name: 'Bergen bar',
            },
            byline: '3. august 2025 kl. 13.39',
            title: 'Søknad om tollkreditt',
          },
        ],
      },
      {
        id: '1',
        type: 'submission',
        sender: {
          type: 'person',
          name: 'Mathias Dyngeland',
        },
        createdAtLabel: '15. august 2025 kl. 13.39',
        byline: '15. august 2025 kl. 13.39',
        title: 'Henvendelse om tollkreditt',
      },
    ],
  },
} satisfies Meta<typeof TransmissionTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    collapsible: false,
  },
};

export const Collapsible: Story = {
  args: {
    collapsible: true,
    collapseLabel: 'Skjul detaljer',
  },
};

export const LinkedItems: Story = {
  args: {
    items: [
      {
        id: '2b',
        type: 'submission',
        sender: {
          type: 'company',
          name: 'Bergen bar',
        },
        byline: '3. august 2025 kl. 13.39',
        title: 'Søknad om tollkreditt',
      },
      {
        id: '1',
        type: 'submission',
        sender: {
          type: 'person',
          name: 'Mathias Dyngeland',
        },
        createdAtLabel: '15. august 2025 kl. 13.39',
        byline: '15. august 2025 kl. 13.39',
        title: 'Henvendelse om tollkreditt',
      },
      {
        id: '1b',
        type: 'submission',
        sender: {
          type: 'company',
          name: 'Bergen bar',
        },
        createdAtLabel: '2. september 2025 kl. 11.15',
        byline: '2. september 2025 kl. 11.15',
        title: 'Søknad om å endre kredittgrense for tollkreditt',
      },
      {
        id: '1b',
        sender: skatt,
        createdAtLabel: '3. september 2025 kl. 08.30',
        byline: '3. september 2025 kl. 08.30',
        title: 'Søknaden er sendt til behandling',
        link: {
          label: (
            <>
              Svar på <u>Søknad om å endre kredittgrense for tollkreditt</u>
            </>
          ),
        },
      },
      {
        id: '1a',
        sender: skatt,
        byline: '10. september 2025 kl. 13.39',
        title: 'Svar på søknad om å endre kredittgrense',
        collapsible: false,
        link: {
          label: (
            <>
              Svar på <u>Søknad om å endre kredittgrense for tollkreditt</u>
            </>
          ),
        },
      },
      {
        id: '2',
        sender: skatt,
        createdAtLabel: '8. september 2025 kl. 13.39',
        byline: '8. september 2025 kl. 13.39',
        title: 'Svar på søknad om tollkreditt',
        link: {
          label: (
            <>
              Svar på <u>Søknad om tollkreditt</u>
            </>
          ),
        },
      },
    ],
  },
};
