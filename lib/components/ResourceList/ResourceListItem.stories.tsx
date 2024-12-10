import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../Button';
import { ResourceListItem } from './ResourceList';

const meta = {
  title: 'Resource/ListItem',
  component: ResourceListItem,
  tags: ['autodocs'],
  parameters: {},
  args: {
    id: '1',
    size: 'md',
    resourceName: 'Utlån',
    ownerName: 'Fiskeridirektoratet',
    ownerLogoUrl: 'https://altinncdn.no/orgs/fd/fiskeridirektoratet.png',
    ownerLogoUrlAlt: 'fiskeridirektoratet',
    controls: (
      <Button icon="pencil" variant="text" size="sm">
        Endre
      </Button>
    ),
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} satisfies Meta<typeof ResourceListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
