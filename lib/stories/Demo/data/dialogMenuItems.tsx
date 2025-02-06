import type { MenuItemProps } from '../../../components';
import {ArchiveIcon, ArrowRedoIcon, EyeIcon, TrashIcon} from "@navikt/aksel-icons";

export const dialogMenuItems: MenuItemProps[] = [
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
];
