import { ArchiveIcon, ArrowRedoIcon, EyeIcon, TrashIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { PageMenu } from './PageMenu';

const meta: Meta<typeof PageMenu> = {
  title: 'Page/PageMenu',
  component: PageMenu,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    items: [
      {
        id: '1',
        icon: ArrowRedoIcon,
        title: 'Del og gi tilgang',
      },
      {
        id: '2',
        icon: EyeIcon,
        title: 'Marker som lest',
      },
      {
        id: '3',
        icon: ArchiveIcon,
        title: 'Flytt til arkiv',
      },
      {
        id: '4',
        icon: TrashIcon,
        title: 'Flytt til papirkurv',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BulkActionbar: Story = {
  args: {
    color: 'accent',
    theme: 'base',
  },
};
