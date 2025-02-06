import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import areaGroups from '../../../test-data/accesspackages.json';
import { AccessPackageList } from '../AccessPackageList';
import { ListBase } from '../List';
import { AccessAreaListItem, type AccessAreaListItemProps } from './AccessAreaListItem';

const testArea = areaGroups[1].areas[1];

/* eslint-disable react/no-danger */
const svgStringToComponent = (dataString: string, altText: string): React.FC<React.SVGProps<SVGSVGElement>> => {
  // @ts-ignore
  // biome-ignore lint/security/noDangerouslySetInnerHtml: Let's trust the test
  return (props) => <span aria-label={altText} dangerouslySetInnerHTML={{ __html: dataString }} {...props} />;
};

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
  title: 'Access/List/AccessAreaListItem',
  component: AccessAreaListItem,
  tags: ['autodocs'],
  args: {
    id: testArea.id,
    size: 'md',
    name: testArea.name,
    icon: svgStringToComponent(testArea.icon, testArea.name),
    children,
  },
  argTypes: {
    expanded: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    icon: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof AccessAreaListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AreaListItemStory: Story = {
  render: (args) => (
    <ListBase>
      <AccessAreaListItem {...args} />
    </ListBase>
  ),
};

export const AllAreas = (args: AccessAreaListItemProps) => {
  const [expanded, setExpanded] = React.useState<string | null>(null);
  return (
    <div>
      {areaGroups.map((group) => (
        <div key={group.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h2>{group.name}</h2>
          <p>{group.description}</p>
          <ListBase>
            {group.areas.map((area) => (
              <AccessAreaListItem
                id={area.id}
                key={area.id}
                name={area.name}
                icon={svgStringToComponent(area.icon, area.name)}
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
          </ListBase>
        </div >
      ))}
    </div >
  );
};
