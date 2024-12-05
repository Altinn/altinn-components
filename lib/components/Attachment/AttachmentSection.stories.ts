import type { Meta, StoryObj } from '@storybook/react';
import { AttachmentSection } from './AttachmentSection';

const meta = {
  title: 'Attachment/AttachmentSection',
  component: AttachmentSection,
  tags: ['autodocs'],
  args: {
    title: '6 vedlegg',
    items: [
      {
        label: 'A10-01 Situasjonsplan.pdf',
      },
      {
        label: 'A40-01 Fasade Nord Ny.pdf',
      },
      {
        label: 'A40-01 Fasade Øst.pdf',
      },
      {
        label: 'Tegning ny fasade.pdf',
      },
      {
        label: 'Tegning nytt snitt.pdf',
      },
      {
        label: 'Redegjørelse estetikk.pdf',
      },
    ],
  },
} satisfies Meta<typeof AttachmentSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
