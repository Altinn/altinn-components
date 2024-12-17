import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AccessAreaListItem } from './AccessAreaListItem';

import areaGroups from '../../../test-data/accesspackages.json';
import { AccessPackageList } from '../AccessPackageList/AccessPackageList';

const testArea = areaGroups[1].areas[1];

const children = (
  <>
    {testArea.description && <p>{testArea.description}</p>}
    <AccessPackageList
      items={testArea.packages.map((p) => ({
        id: p.id,
        title: p.name,
      }))}
    />
  </>
);

const meta = {
  title: 'List/AccessAreaListItem',
  component: AccessAreaListItem,
  tags: ['autodocs'],
  args: {
    id: testArea.id,
    size: 'md',
    name: testArea.name,
    icon: `data:image/svg+xml;base64,${btoa(testArea.icon)}`,
    children,
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} satisfies Meta<typeof AccessAreaListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AreaListItemStory: Story = {};

export const AllAreas = (args) => {
  const [expanded, setExpanded] = React.useState<string | null>(null);
  return (
    <div>
      {areaGroups.map((group) => (
        <div key={group.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h2>{group.name}</h2>
          <p>{group.description}</p>
          {group.areas.map((area) => (
            <AccessAreaListItem
              id={area.id}
              key={area.id}
              name={area.name}
              icon={`data:image/svg+xml;base64,${btoa(area.icon)}`}
              size={args.size}
              expanded={expanded === area.id}
              onClick={() => setExpanded((prev) => (prev === area.id ? null : area.id))}
            >
              {area.description && <p>{area.description}</p>}
              <AccessPackageList
                items={area.packages.map((p) => ({
                  id: p.id,
                  title: p.name,
                }))}
              />
            </AccessAreaListItem>
          ))}
        </div>
      ))}
    </div>
  );
};
