import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';

const meta = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    address: 'Postboks 1382 Vika, 0114 Oslo.',
    address2: 'Org.nr. 991 825 827',
    menu: {
      items: [
        {
          id: '1',
          title: 'Hjelp og kontakt',
        },
        {
          id: '2',
          title: 'Om Altinn',
        },
        {
          id: '3',
          title: 'Personvern',
        },
        {
          id: '4',
          title: 'Tilgjengelighet',
        },
      ],
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
