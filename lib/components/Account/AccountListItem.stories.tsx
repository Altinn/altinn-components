import { BellIcon, HandshakeIcon, HashtagIcon } from '@navikt/aksel-icons';
import { FilesIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AccountListItem, AccountListItemDetails, type AccountListItemProps, Button, List } from '..';
const meta = {
  title: 'Account/AccountListItem',
  component: AccountListItem,
  tags: ['autodocs'],
  parameters: {},
  args: {
    icon: {
      type: 'company',
      name: 'Diaspora Bergensis',
    },
    title: 'Diaspora Bergensis',
    description: 'Org nr. 928914038',
  },
  decorators: [
    (Story) => (
      <List>
        <Story />
      </List>
    ),
  ],
} satisfies Meta<typeof AccountListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    collapsible: true,
  } as AccountListItemProps,
};

export const Expanded: Story = {
  args: {
    collapsible: true,
    expanded: true,
    interactive: false,
    children: (
      <AccountListItemDetails
        settings={[
          {
            id: '1',
            title: 'Rolle og tilganger',
            value: 'Daglig leder',
            badge: {
              label: '4 tilganger',
            },
            icon: HandshakeIcon,
            linkIcon: true,
          },
          {
            id: '2',
            title: 'Varslinger på SMS',
            icon: BellIcon,
            badge: {
              variant: 'text',
              label: 'Legg til',
            },
            variant: 'modal',
            linkIcon: true,
          },
          {
            id: '2',
            title: 'Varslinger på e-post',
            value: 'mathias@gmail.com',
            icon: BellIcon,
            badge: {
              variant: 'text',
              label: 'Endre',
            },
            variant: 'modal',
            linkIcon: true,
          },
          {
            id: '3',
            title: 'Organisasjonsnummer',
            value: 'XXX XXX XXX',
            icon: HashtagIcon,
            as: 'button',
            onClick: () => alert('Org nr. ble kopiert'),
            controls: (
              <Button as="div" size="xs" variant="ghost">
                <FilesIcon />
                <span>Kopier org. nr</span>
              </Button>
            ),
          },
        ]}
        organization={[
          {
            title: 'Diaspora Bergensis',
            description: 'Org nr. 928914038',
            avatar: { type: 'company', name: 'Diaspora Bergensis' },
            selected: true,
            items: [
              {
                title: 'Diaspora Bergensis',
                description: 'Org nr. 928914038',
                avatar: {
                  type: 'company',
                  name: 'Diaspora Bergensis',
                  variant: 'outline',
                },
              },
            ],
          },
        ]}
      />
    ),
  } as AccountListItemProps,
};
