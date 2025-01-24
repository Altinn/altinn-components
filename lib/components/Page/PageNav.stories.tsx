import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu, PageNav } from '../';
import { dialogContextMenu } from '../../../examples';

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
  },
};

export const BackButton: Story = {
  args: {
    backButton: {
      label: 'Tilbake',
    },
  },
};

export const BackButtonAndControls: Story = {
  args: {
    backButton: {
      label: 'Tilbake',
    },
    controls: <ContextMenu {...dialogContextMenu} />,
  },
};
