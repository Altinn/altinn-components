import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import areaGroups from '../../../test-data/accesspackages.json';
import { AccessPackageList } from '../AccessPackageList';
import { AccessAreaListItem, type AccessAreaListItemProps } from './AccessAreaListItem';
import { Color } from '../../types';

const testArea = areaGroups[1].areas[1];

/* eslint-disable react/no-danger */
const svgStringToComponent = (dataString: string, altText: string): React.FC<React.SVGProps<SVGSVGElement>> => {
  // @ts-ignore
  // biome-ignore lint/security/noDangerouslySetInnerHtml: Let's trust the test
  return (props) => <span aria-label={altText} dangerouslySetInnerHTML={{ __html: dataString }} {...props} />;
};

const children = (colorTheme: Color | undefined) => (
  <>
    {testArea.description && <p>{testArea.description}</p>}
    <AccessPackageList
      items={testArea.packages.map((p, index) => ({
        id: p.id,
        title: p.name,
        color: index < 2 ? colorTheme : 'neutral',
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
    badgeText: '2 of 7',
    colorTheme: 'company',
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
    colorTheme: {
      options: ['neutral', 'company', 'person'],
      control: {
        type: 'select',
      },
    },
  },
  render: (args) => (
    <AccessAreaListItem {...args}>
      {children(args.colorTheme)}
    </AccessAreaListItem>
  ),
} satisfies Meta<typeof AccessAreaListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AreaListItemStory: Story = {};

export const AreaWithPackages = (args: AccessAreaListItemProps) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  return <AccessAreaListItem {...args} colorTheme='company' expanded={expanded} onClick={() => setExpanded(!expanded)} badgeText={`2 of ${testArea.packages.length}`}>{children(args.colorTheme)}</AccessAreaListItem>;
};

export const AllAreas = (args: AccessAreaListItemProps) => {
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
              icon={svgStringToComponent(area.icon, area.name)}
              colorTheme='neutral'
              size={args.size}
              expanded={expanded === area.id}
              onClick={() => setExpanded((prev) => (prev === area.id ? null : area.id))}
              badgeText={`0 of ${area.packages.length}`}
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
      ))
      }
    </div >
  );
};
