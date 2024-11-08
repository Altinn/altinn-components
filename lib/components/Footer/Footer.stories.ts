import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta = {
  title: 'Footer/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {},
  args: {
    address: 'Postboks 1382 Vika, 0114 Oslo.',
    menu: {
      items: [
        {
          id: '1',
          title: 'Om Altinn',
        },
        {
          id: '2',
          title: 'Driftsmeldinger',
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
