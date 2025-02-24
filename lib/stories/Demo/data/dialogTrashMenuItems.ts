import type { MenuItemProps } from '../../../components';
import {FileShredderIcon, InboxIcon} from "@navikt/aksel-icons";

export const dialogTrashMenuItems: MenuItemProps[] = [
    {
      groupId: '2',
      id: '3',
      icon: InboxIcon,
      title: 'Flytt til innboks',
    },
    {
      groupId: '2',
      id: '4',
      icon: FileShredderIcon,
      title: 'Slett permanent',
    },
  ];
