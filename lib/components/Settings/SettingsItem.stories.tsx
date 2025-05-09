import { BellIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { SettingsItem } from '..';
const meta = {
  title: 'Settings/SettingsItem',
  component: SettingsItem,
  tags: ['beta', 'autodocs'],
  parameters: {},
  args: {
    icon: BellIcon,
    title: 'Settings title',
  },
} satisfies Meta<typeof SettingsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithValue: Story = {
  args: {
    value: 'Value',
  },
};

export const WithDescription: Story = {
  args: {
    description: 'Description',
  },
};

export const WithBadge: Story = {
  args: {
    badge: {
      label: '6 profiler',
    },
  },
};

export const Company: Story = {
  args: {
    icon: undefined,
    avatar: {
      type: 'company',
      name: 'Diaspora Bergensis',
    },
    title: 'Diaspora Bergensis',
    description: 'Org. nr. XXXXXXXXXXX',
    badge: {
      label: '6 profiler',
    },
  },
};

export const Person: Story = {
  args: {
    icon: undefined,
    avatar: {
      type: 'person',
      name: 'Dolly Duck',
    },
    title: 'Dolly Duck',
    description: 'Fødselsnr. XX.XX.XXXX YYYYYY',
    badge: {
      label: '6 profiler',
    },
  },
};
