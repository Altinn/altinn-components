import type { Meta, StoryObj } from '@storybook/react-vite';
import { AccountOrganization } from '../';

const meta = {
  title: 'Account/AccountOrganization',
  component: AccountOrganization,
  tags: ['autodocs'],
  args: {
    items: [
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
          {
            title: 'Mors Bergensis',
            description: 'Org nr. 028914030',
            avatar: {
              type: 'company',
              name: 'Mors Bergensis',
              variant: 'outline',
              isDeleted: true,
            },
          },
        ],
      },
    ],
  },
  parameters: {},
} satisfies Meta<typeof AccountOrganization>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Subunit: Story = {
  args: {
    items: [
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
        ],
      },
    ],
  },
};

export const Group: Story = {
  args: {
    items: [
      {
        title: 'Diaspora Bergensis',
        description: 'Org nr. 928914038',
        avatar: { type: 'company', name: 'Diaspora Bergensis' },
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
          {
            selected: true,
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
              name: 'Glasgow Bergensis',
              variant: 'outline',
            },
          },
        ],
      },
    ],
  },
};
