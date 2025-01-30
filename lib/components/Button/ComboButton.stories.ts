import { ChevronDownIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { ComboButton } from './ComboButton';

const meta = {
  title: 'Atoms/Button/ComboButton',
  component: ComboButton,
  tags: ['autodocs'],
  parameters: {},
  args: {
    ariaLabel: 'combo button',
    children: 'ComboButton',
    icon: ChevronDownIcon,
    iconAltText: 'chevron down',
    size: 'sm',
  },
} satisfies Meta<typeof ComboButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    ariaLabel: 'solid',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    ariaLabel: 'outline',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    ariaLabel: 'text',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    ariaLabel: 'disabled',
  },
};
