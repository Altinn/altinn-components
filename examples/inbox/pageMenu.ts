import { ArchiveIcon, ArrowRedoIcon, EyeClosedIcon, TrashIcon } from '@navikt/aksel-icons';
import type { PageMenuProps } from '../../lib';

export const pageMenu: PageMenuProps = {
  id: 'page-menu',
  items: [
    {
      id: '1',
      icon: ArrowRedoIcon,
      title: 'Del og gi tilgang',
    },
    {
      id: '2',
      icon: EyeClosedIcon,
      title: 'Marker som ulest',
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
};
