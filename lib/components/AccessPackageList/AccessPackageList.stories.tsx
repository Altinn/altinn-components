import type { Meta, StoryObj } from '@storybook/react';
import areaGroups from '../../../test-data/accesspackages.json';
import { AccessPackageList } from './AccessPackageList';

const testArea = areaGroups[0].areas[1];

const meta = {
  title: 'Access/List/AccessPackageList',
  component: AccessPackageList,
  tags: ['autodocs'],
  args: {
    items: testArea.packages.map((p) => ({
      id: p.id,
      title: p.name,
    })),
  },
} satisfies Meta<typeof AccessPackageList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccessPackageListStory: Story = {};
