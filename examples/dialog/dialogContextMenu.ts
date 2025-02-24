import { ArchiveIcon, ArrowRedoIcon, ClockDashedIcon, EyeIcon, TrashIcon } from '@navikt/aksel-icons';
import type { ContextMenuProps } from '../../lib';

export const dialogContextMenu: ContextMenuProps = {
  id: 'context-menu',
  items: [
    {
      groupId: '1',
      id: '1',
      icon: ArrowRedoIcon,
      title: 'Del og gi tilgang',
    },
    {
      groupId: '1',
      id: '2',
      icon: EyeIcon,
      title: 'Marker som lest',
    },
    {
      groupId: '2',
      id: '3',
      icon: ArchiveIcon,
      title: 'Flytt til arkiv',
    },
    {
      groupId: '2',
      id: '4',
      icon: TrashIcon,
      title: 'Flytt til papirkurv',
    },
    {
      groupId: '3',
      id: '4',
      icon: ClockDashedIcon,
      title: 'Aktivitetslogg',
    },
  ],
};
