import type { Meta, StoryObj } from '@storybook/react';
import { HeaderLogo } from './HeaderLogo';

const meta = {
  title: 'Layout/Header/HeaderLogo',
  component: HeaderLogo,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof HeaderLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
