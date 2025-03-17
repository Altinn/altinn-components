import { ArrowRedoIcon, ClockDashedIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu, PageNav } from '../';

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
    controls: (
      <ContextMenu
        id="context-menu"
        items={[
          {
            id: '1',
            groupId: '1',
            icon: ArrowRedoIcon,
            title: 'Del og gi tilgang',
          },
          {
            id: '5',
            groupId: '3',
            icon: ClockDashedIcon,
            title: 'Aktivitetslogg',
          },
        ]}
      />
    ),
  },
};
