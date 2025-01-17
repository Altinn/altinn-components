import type { Meta, StoryObj } from '@storybook/react';
import { dialogContextMenu } from '../../../examples';
import { PageNav } from './PageNav';

const meta = {
  title: 'Page/PageNav',
  component: PageNav,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    backButton: {
      label: 'Tilbake',
    },
  },
} satisfies Meta<typeof PageNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BackButton: Story = {
  args: {
    backButton: {
      label: 'Tilbake',
    },
  },
};

export const BackAndContextMenu: Story = {
  args: {
    backButton: {
      label: 'Tilbake',
    },
    menu: dialogContextMenu,
  },
};

export const Breadcrumbs: Story = {
  args: {
    breadcrumbs: [
      {
        label: 'Home',
      },
      {
        label: 'Section',
      },
      {
        label: 'Article',
      },
    ],
    menu: dialogContextMenu,
  },
};
