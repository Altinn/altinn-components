import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { iconsMap } from './iconsMap';

const meta = {
  title: 'Atoms/Icon/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {
    name: Object.keys(iconsMap),
  },
  args: {
    name: 'inbox',
    variant: 'outline',
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
