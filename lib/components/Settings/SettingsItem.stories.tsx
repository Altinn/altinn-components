import { BellIcon, MagnifyingGlassIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, List, QueryLabel, SettingsItem } from '..';
const meta = {
  title: 'Settings/SettingsItem',
  component: SettingsItem,
  tags: ['beta', 'autodocs'],
  parameters: {},
  args: {
    ariaLabel: 'Title',
  },
  decorators: [
    (Story) => (
      <List>
        <Story />
      </List>
    ),
  ],
} satisfies Meta<typeof SettingsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    icon: BellIcon,
    title: 'Title',
  },
};

export const TitleDescription: Story = {
  args: {
    icon: BellIcon,
    title: 'Title',
    description: 'Description',
  },
};

export const TitleValue: Story = {
  args: {
    icon: BellIcon,
    title: 'Title',
    value: 'Value',
  },
};

export const CustomLabel: Story = {
  args: {
    icon: BellIcon,
    label: (
      <span>
        Custom label: <em>Value</em>
      </span>
    ),
  },
};

export const Company: Story = {
  args: {
    icon: {
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
    icon: {
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

export const SavedSearch: Story = {
  args: {
    icon: MagnifyingGlassIcon,
    label: (
      <QueryLabel
        size="sm"
        params={[
          { type: 'search', label: 'skatt' },
          { type: 'filter', label: 'Krever handling' },
          { type: 'filter', label: 'Ikke sett' },
        ]}
      />
    ),
    controls: (
      <Button size="xs" variant="outline">
        Endre
      </Button>
    ),
  },
};

export const SavedSearchWithTitle: Story = {
  args: {
    icon: MagnifyingGlassIcon,
    title: 'Viktige dialoger om skatt',
    description: (
      <QueryLabel
        size="xs"
        params={[
          { type: 'search', label: 'skatt' },
          { type: 'filter', label: 'Krever handling' },
          { type: 'filter', label: 'Ikke sett' },
        ]}
      />
    ),
    controls: (
      <Button size="xs" variant="outline">
        Endre
      </Button>
    ),
  },
};
