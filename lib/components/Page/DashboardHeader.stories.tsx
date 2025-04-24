import type { Meta, StoryObj } from '@storybook/react';
import { DashboardHeader, Typography } from '../';

const meta = {
  title: 'Page/DashboardHeader',
  component: DashboardHeader,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {},
} satisfies Meta<typeof DashboardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Company: Story = {
  args: {
    type: 'company',
    name: 'Bergen Bar',
    description: 'Org nr: XXXXXXXXX',
    children: (
      <Typography>
        <h6>Adresse</h6>
        <p>Neumanns gate 8, 5015 BERGEN</p>
      </Typography>
    ),
  },
};

export const Person: Story = {
  args: {
    type: 'person',
    name: 'Mathias Dyngeland',
    description: 'Fødselsnr: XX.XX.XXXX XXXXXX',
    children: (
      <Typography>
        <h6>Telefon</h6>
        <p>+47 990 55 445</p>
        <h6>E-post</h6>
        <p>mathias@brann.no</p>
      </Typography>
    ),
  },
};
