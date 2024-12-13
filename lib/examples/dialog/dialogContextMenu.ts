import type { ContextMenuProps } from '../../components';

export const dialogContextMenu: ContextMenuProps = {
  id: 'context-menu',
  items: [
    {
      groupId: '1',
      id: '1',
      icon: 'arrow-redo',
      title: 'Del og gi tilgang',
    },
    {
      groupId: '1',
      id: '2',
      icon: 'eye',
      title: 'Marker som lest',
    },
    {
      groupId: '2',
      id: '3',
      icon: 'archive',
      title: 'Flytt til arkiv',
    },
    {
      groupId: '2',
      id: '4',
      icon: 'trash',
      title: 'Flytt til papirkurv',
    },
    {
      groupId: '3',
      id: '4',
      icon: 'clock-dashed',
      title: 'Aktivitetslogg',
    },
  ],
};
