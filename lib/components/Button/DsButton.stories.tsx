import type { Meta, StoryObj } from '@storybook/react';

import { PlusIcon } from '@navikt/aksel-icons';
import { DsButton } from './DsButton';

const meta = {
  title: 'Atoms/DsButton/DsButtons',
  component: DsButton,
  tags: ['autodocs'],
  parameters: {},
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof DsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const DSButton: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    'data-size': 'md',
    loading: false,
    disabled: false,
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Dotted: Story = {
  args: {
    variant: 'dotted',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Icon: Story = {
  args: {
    variant: 'solid',
    icon: true,
    children: (
      <>
        <PlusIcon />
      </>
    ),
  },
};
