import { ChevronDownIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComboButton } from './ComboButton';

const meta: Meta<typeof ComboButton> = {
  title: 'Button/ComboButton',
  component: ComboButton,
  tags: ['autodocs', 'deprecated'],
  parameters: {},
  args: {
    children: 'ComboButton',
    secondaryButton: {
      children: <ChevronDownIcon />,
    },
    size: 'sm',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    variant: 'tinted',
    disabled: true,
  },
};
