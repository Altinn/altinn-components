import { PencilIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import resources from '../../../test-data/resources.json';
import { Button } from '../Button';
import { List } from '../List';
import { ResourceListItem } from './ResourceListItem';

const resourceList = resources.map((resource) => (
  <ResourceListItem
    key={resource.identifier}
    id={resource.identifier}
    ownerName={resource.ownerName ?? ''}
    resourceName={resource.resourceName}
    ownerLogoUrl={resource.ownerImageUrl ?? ''}
    ownerLogoUrlAlt={`${resource.ownerName} logo`}
  />
));

const meta = {
  title: 'Access/ResourceListItem',
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
    shadow: 'xs',
    border: 'none',
    as: 'div',
    titleAs: 'h3',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
    shadow: {
      options: ['none', 'xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    as: {
      options: ['div', 'button', 'a', 'span'],
      control: {
        type: 'select',
      },
    },
    border: {
      options: ['none', 'solid', 'dashed'],
      control: {
        type: 'select',
      },
    },
    titleAs: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span'],
      control: {
        type: 'select',
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
        controls={
          <Button icon={PencilIcon} variant="ghost" size="sm" onClick={() => alert('Edit')}>
            Edit
          </Button>
        }
        {...args}
        onClick={() => alert(`You clicked me - yay!`)}
      />
    </List>
  ),
  args: {},
};

export const ListOfResources = () => {
  return <List spacing={2}>{resourceList}</List>;
};
