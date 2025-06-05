import { ClockIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MetaTimestamp } from './MetaTimestamp';

const meta = {
  title: 'Metadata/MetaTimestamp',
  component: MetaTimestamp,
  tags: ['autodocs'],
  parameters: {},
  args: {
    children: '26. mai 1999',
    datetime: '1999-05-26',
  },
} satisfies Meta<typeof MetaTimestamp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '26. mai 1999',
    datetime: '1999-05-26',
  },
};

export const Icon: Story = {
  args: {
    icon: ClockIcon,
    children: 'Frist: 26. mai 1999',
    datetime: '1999-05-26',
  },
};
