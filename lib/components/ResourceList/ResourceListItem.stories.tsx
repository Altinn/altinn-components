import { PencilIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { List } from '../List';
import { ResourceListItem } from './ResourceListItem';

const meta = {
  title: 'Access/List/ResourceListItem',
  component: ResourceListItem,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    size: 'md',
    id: 'se_5733_1',
    loading: false,
    resourceName: 'Avtale om oppbevaring om eksplosiver',
    ownerName: 'Direktoratet for samfunnssikkerhet og beredskap',
    ownerLogoUrl: 'https://altinncdn.no/orgs/dsb/dsb.png',
    controls: (
      <Button icon={PencilIcon} variant="text" size="sm" onClick={() => alert('Endre')}>
        Endre
      </Button>
    ),
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} satisfies Meta<typeof ResourceListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <List>
      <ResourceListItem
        badge={{ label: 'New', color: 'success', theme: 'base' }}
        {...args}
        onClick={() => alert(`You clicked me - yay!`)}
      />
    </List>
  ),
  args: {},
};
