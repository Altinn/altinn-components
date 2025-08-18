import { ExclamationmarkTriangleIcon } from '@navikt/aksel-icons';
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
    name: testArea.packages[0].name,
    size: 'md',
    color: 'neutral',
    loading: false,
    shadow: 'xs',
    border: 'none',
    as: 'button',
    titleAs: 'h3',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
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
    as: {
      options: ['button', 'div', 'a'],
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
} satisfies Meta<typeof AccessPackageListItem>;

export default meta;

export const AccessPackageListStory = (args: AccessPackageListItemProps) => {
  return (
    <List>
      <AccessPackageListItem {...args} />
    </List>
  );
};

export const AccessPackageWithBadge = (args: AccessPackageListItemProps) => {
  return (
    <List>
      <AccessPackageListItem {...args} badge={<ExclamationmarkTriangleIcon title="warning" />} />
    </List>
  );
};

export const ListOfPackages = () => {
  const items = testArea.packages.map((p) => (
    <AccessPackageListItem id={p.id} key={p.id} name={p.name} onClick={() => alert(`Package name: ${p.name}`)} />
  ));
  return <List spacing={2}>{items}</List>;
};
