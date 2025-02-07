import type { Meta } from '@storybook/react';
import areaGroups from '../../../test-data/accesspackages.json';
import { AccessPackageList, AccessPackageListProps } from './AccessPackageList';

const testArea = areaGroups[0].areas[1];

const meta = {
  title: 'Access/List/AccessPackageList',
  component: AccessPackageList,
  tags: ['autodocs', 'beta'],
  args: {
  },
  argTypes: {
    spacing: {
      options: ['page', 'xs', '1', '2', '3', '4', '5'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} satisfies Meta<typeof AccessPackageList>;

export default meta;

export const AccessPackageListStory = (args: AccessPackageListProps) => {
  return <AccessPackageList {...args} items={testArea.packages.map((p) => ({
    id: p.id,
    title: p.name,
    onClick: () => alert(`Package name: ${p.name}`)
  }))} />;
}
