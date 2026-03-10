import { ArrowRedoIcon, EyeClosedIcon, ArchiveIcon, TrashIcon } from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react-vite';
import { BulkMenu, type BulkMenuProps } from './BulkMenu';

const meta: Meta<typeof BulkMenu> = {
  title: 'Bulk/BulkMenu',
  component: BulkMenu,
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

export const Default = (args: BulkMenuProps) => {
  return (
    <BulkMenu {...args} />
  );
};