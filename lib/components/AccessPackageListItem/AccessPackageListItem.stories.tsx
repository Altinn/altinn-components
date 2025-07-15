import type { Meta } from '@storybook/react-vite';
import areaGroups from '../../../test-data/accesspackages.json';
import { List } from '../List';
import { AccessPackageListItem, type AccessPackageListItemProps } from './AccessPackageListItem';

const testArea = areaGroups[0].areas[1];

const meta = {
  title: 'Access/AccessPackageListItem',
  component: AccessPackageListItem,
  tags: ['autodocs', 'beta'],
  args: {
    id: testArea.packages[0].id,
    title: testArea.packages[0].name,
    size: 'md',
    color: 'neutral',
    loading: false,
    shadow: 'xs',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      options: ['neutral', 'company', 'person'],
      control: {
        type: 'select',
      },
    },
    shadow: {
      options: ['none', 'xs', 'sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} satisfies Meta<typeof AccessPackageListItem>;

export default meta;

export const AccessPackageListStory = (args: AccessPackageListItemProps) => {
  return (
    <List>
      <AccessPackageListItem {...args} />
    </List>
  );
};

export const ListOfPackages = () => {
  const items = testArea.packages.map((p) => (
    <AccessPackageListItem id={p.id} key={p.id} title={p.name} onClick={() => alert(`Package name: ${p.name}`)} />
  ));
  return <List spacing={2}>{items}</List>;
};
