import { ArrowRedoIcon, EyeClosedIcon, ArchiveIcon, TrashIcon } from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react-vite';
import { BulkToolbar, type BulkToolbarProps } from './BulkToolbar';

const meta: Meta<typeof BulkToolbar> = {
  title: 'Bulk/BulkToolbar',
  component: BulkToolbar,
  tags: ['beta'],
  parameters: {},
  args: {
    items: [
      {
        icon: ArrowRedoIcon,
        label: "Del og gi tilgang",
      },
      {
        icon: EyeClosedIcon,
        label: "Marker som lest",
      },
      {
        icon: ArchiveIcon,
        label: "Flytt til arkiv",
      },
      {
        icon: TrashIcon,
        label: "Flytt til papirkurv",
      },
    ],
  },
};

export default meta;

export const Default = (args: BulkToolbarProps) => {
  return (
    <BulkToolbar {...args} />
  );
};