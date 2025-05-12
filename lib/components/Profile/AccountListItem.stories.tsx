import { BellIcon, Buildings2Icon, HandshakeIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { AccountListItem, Button, Divider, Flex, ListItem, Section } from '..';
const meta = {
  title: 'Profile/AccountListItem',
  component: AccountListItem,
  tags: ['autodocs'],
  parameters: {},
  args: {
    avatar: {
      type: 'company',
      name: 'Diaspora Bergensis',
    },
    title: 'Diaspora Bergensis',
    description: 'Org nr. 928914038',
  },
} satisfies Meta<typeof AccountListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Expanded: Story = {
  args: {
    collapsible: true,
    expanded: true,
    children: (
      <Section color="company" padding={6}>
        <Flex spacing={2}>
          <Button size="sm" variant="outline">
            Action
          </Button>
          <Button size="sm" variant="outline">
            Action
          </Button>
          <Button size="sm" variant="outline">
            Action
          </Button>
        </Flex>
        <Divider />
        <ListItem
          icon={{ svgElement: Buildings2Icon, theme: 'tinted' }}
          variant="inline"
          title={{
            size: 'xs',
            weight: 'normal',
            variant: 'subtle',
            children: 'Organisasjonsnummer',
          }}
          description={{
            size: 'sm',
            weight: 'normal',
            variant: 'default',
            children: '928914038',
          }}
          linkIcon
        />
        <Divider />
        <ListItem
          icon={{ svgElement: HandshakeIcon, theme: 'tinted' }}
          variant="inline"
          title={{
            size: 'xs',
            weight: 'normal',
            variant: 'subtle',
            children: 'Rolle og rettigheter',
          }}
          description={{
            size: 'sm',
            weight: 'normal',
            variant: 'default',
            children: 'Daglig leder',
          }}
          linkIcon
        />
        <Divider />
        <ListItem
          icon={{ svgElement: BellIcon, theme: 'tinted' }}
          variant="inline"
          title={{
            size: 'sm',
            weight: 'normal',
            variant: 'default',
            children: 'Varslingsprofil',
          }}
          badge={{ label: 'E-post og SMS' }}
          linkIcon
        />
      </Section>
    ),
  },
};
