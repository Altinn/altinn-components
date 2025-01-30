import { InboxFillIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {},
  args: {
    svgElement: InboxFillIcon,
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
