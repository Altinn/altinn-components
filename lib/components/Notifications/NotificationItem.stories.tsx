import { BellIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { List, NotificationItem } from '..';
const meta = {
  title: 'Notifications/NotificationItem',
  component: NotificationItem,
  tags: ['beta', 'autodocs'],
  parameters: {},
  args: {
    id: 'settings',
    variant: 'tinted',
    ariaLabel: 'Title',
    icon: BellIcon,
    title: 'Du har fått en beskjed',
    description: 'Dette er en beskrivelse av notifikasjonen. Her kan du lese mer om innholdet i meldingen.',
    dismissable: true,
  },
  decorators: [
    (Story) => (
      <List>
        <Story />
      </List>
    ),
  ],
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithBadge: Story = {
  args: {
    iconBadge: {
      label: 'Nytt innhold',
    },
  },
};

export const NotDismissable: Story = {
  args: { dismissable: false },
};
