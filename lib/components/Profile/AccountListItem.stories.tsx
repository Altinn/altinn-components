import type { Meta, StoryObj } from '@storybook/react';
import { AccountListItem, Button, Divider, Flex, List, Section } from '..';
import * as SettingsStories from '../Settings/Settings.stories';
const meta = {
  title: 'Profile/AccountListItem',
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
  args: {},
};

export const Expanded: Story = {
  args: {
    collapsible: true,
    expanded: true,
    children: (
      <Section color="company" padding={6} spacing={2}>
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
        <SettingsStories.CompanySettings />
      </Section>
    ),
  },
};
