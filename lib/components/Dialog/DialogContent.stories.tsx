import type { Meta, StoryObj } from '@storybook/react';
import { DialogContent } from './DialogContent';

const meta = {
  title: 'Dialog/DialogContent',
  component: DialogContent,
  tags: ['autodocs'],
  args: {
    updatedAt: '1999-05-26 22:59:00',
    updatedAtLabel: '25. mai 1999 kl 22.59',
    children: 'Body',
    seenBy: {
      seenByEndUser: true,
      label: 'Sett av deg',
    },
    activityLog: {
      label: 'Aktivitetslogg',
    },
  },
} satisfies Meta<typeof DialogContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const ExtendedContent: Story = {
  args: {
    children: (
      <>
        <p>
          <strong>Sander Svendsen</strong> er sykmeldt i 4 dager fra 2. juli–5. juli 2024. Du må oppgi nærmeste leder.
        </p>
        <h6>Ansvarlig lege</h6>
        <p>Mark Medisin + 47 23369090</p>
        <h6>Nærmeste leder</h6>
        <p>Ikke oppgitt.</p>
      </>
    ),
  },
};
