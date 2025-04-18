import { TeddyBearFillIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { TimelineHeader } from '..';
import { skatt } from '../../../examples/avatar';

const meta = {
  title: 'Timeline/TimelineHeader',
  component: TimelineHeader,
  tags: ['autodocs'],
  parameters: {},
  args: {
    as: 'header',
    avatar: skatt,
    children: (
      <>
        <strong>Skatteetaten</strong>
        til Kari Nordmann
      </>
    ),
  },
} satisfies Meta<typeof TimelineHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avatar: Story = {
  args: {
    avatar: skatt,
    children: (
      <>
        <strong>Skatteetaten</strong>
        til Kari Nordmann
      </>
    ),
  },
};

export const Icon: Story = {
  args: {
    icon: TeddyBearFillIcon,
    children: (
      <>
        <strong>Skatteetaten</strong>
        til Kari Nordmann
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
