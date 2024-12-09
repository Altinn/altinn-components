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
    title: 'Title',
    description: 'Description',
    size: 'md',
    avatar: {
      name: 'Fiskeridirektoratet',
      imageUrl: 'https://altinncdn.no/orgs/fd/fiskeridirektoratet.png',
      imageUrlAlt: 'fiskeridirektoratet logo',
    },
    controls: (
      <Button icon="pencil" variant="text" size="sm">
        Endre
      </Button>
    ),
  },
} satisfies Meta<typeof ResourceListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
