import {
  BellIcon,
  HandshakeIcon,
  HashtagIcon,
  HouseHeartIcon,
  MobileIcon,
  PaperplaneIcon,
  PersonIcon,
} from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AccountListItemDetails } from '..';
const meta = {
  title: 'Account/AccountListItemDetails',
  component: AccountListItemDetails,
  tags: ['autodocs'],
  parameters: {},
  args: {
    buttons: [
      {
        label: 'Gå til innboks',
        variant: 'outline',
      },
      {
        label: 'Tilgangsstyring',
        variant: 'outline',
      },
    ],
  },
} satisfies Meta<typeof AccountListItemDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserSettings: Story = {
  args: {
    settings: [
      {
        title: 'Mobiltelefon',
        value: '+47 123 45 678',
        icon: MobileIcon,
        linkIcon: true,
        badge: {
          variant: 'text',
          label: 'Endre',
        },
      },
      {
        title: 'E-postadresse',
        value: 'mathias@brann.no',
        icon: PaperplaneIcon,
        linkIcon: true,
        badge: {
          variant: 'text',
          label: 'Endre',
        },
      },
      {
        title: 'Adresse',
        value: 'Inndalsveien 28, 5063 Bergen',
        icon: HouseHeartIcon,
        linkIcon: true,
        badge: {
          variant: 'text',
          label: 'Endre',
        },
      },
    ],
  },
};

export const PersonSettings: Story = {
  args: {
    settings: [
      {
        title: 'Rolle og tilganger',
        value: 'Ektefelle',
        badge: {
          label: '2 tilganger',
        },
        icon: HandshakeIcon,
        linkIcon: true,
      },
      {
        title: 'Varslinger er på',
        value: 'mathias@brann.no, +47 123 45 678',
        badge: {
          label: 'SMS og e-post',
        },
        icon: BellIcon,
        linkIcon: true,
      },
      {
        title: 'Fødselsnummer',
        value: 'XXXXXX YYYY',
        icon: PersonIcon,
      },
    ],
  },
};

export const CompanySettings: Story = {
  args: {
    settings: [
      {
        title: 'Rolle og tilganger',
        value: 'Daglig leder',
        badge: {
          label: '4 tilganger',
        },
        icon: HandshakeIcon,
        linkIcon: true,
      },
      {
        title: 'Ingen varslinger',
        icon: BellIcon,
        badge: {
          variant: 'text',
          label: 'Legg til',
        },
        linkIcon: true,
      },
      {
        title: 'Organisasjonsnummer',
        value: 'XXX XXX XXX',
        icon: HashtagIcon,
      },
    ],
  },
};

export const OrganizationSettings: Story = {
  args: {
    settings: [
      {
        title: 'Rolle og tilganger',
        value: 'Daglig leder',
        badge: {
          label: '4 tilganger',
        },
        icon: HandshakeIcon,
        linkIcon: true,
      },
      {
        title: 'Ingen varslinger',
        icon: BellIcon,
        badge: {
          variant: 'text',
          label: 'Legg til',
        },
        linkIcon: true,
      },
      {
        title: 'Organisasjonsnummer',
        value: 'XXX XXX XXX',
        icon: HashtagIcon,
      },
    ],
    organization: [
      {
        title: 'Diaspora Bergensis',
        description: 'Org nr. 928914038',
        avatar: { type: 'company', name: 'Diaspora Bergensis' },
        items: [
          {
            selected: true,
            title: 'Diaspora Bergensis',
            description: 'Org nr. 928914038',
            avatar: {
              type: 'company',
              name: 'Diaspora Bergensis',
              variant: 'outline',
            },
          },
          {
            title: 'Sporting Bergensis',
            description: 'Org nr. 928914038',
            avatar: {
              type: 'company',
              name: 'Sporting Bergensis',
              variant: 'outline',
            },
          },
          {
            title: 'Glasgow Bergensis',
            description: 'Org nr. 928914038',
            avatar: {
              type: 'company',
              name: 'Glasgow  Bergensis',
              variant: 'outline',
            },
          },
        ],
      },
    ],
  },
};
