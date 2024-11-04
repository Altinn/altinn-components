'use client';
import { useState } from 'react';
import type { ElementType } from 'react';
import { Button } from '../Button';
import { DialogContextMenu, type DialogContextMenuProps } from './DialogContextMenu';
import { DialogDue } from './DialogDue';
import { DialogStatus, type DialogStatusProps } from './DialogStatus';
import { DialogTouched, type DialogTouchedByProps } from './DialogTouched';
import styles from './dialog.module.css';

export interface DialogBackButtonProps {
  as?: ElementType;
  href?: string;
  label?: string;
}

export interface DialogNavProps {
  status?: DialogStatusProps;
  dueAt?: string;
  touchedBy?: DialogTouchedByProps[];
  backButton?: DialogBackButtonProps;
  contextMenu?: DialogContextMenuProps;
}

type ExpandedItemType = 'menu';

export const DialogNav = ({
  backButton = {
    as: 'a',
    label: 'Back',
  },
  status,
  dueAt,
  touchedBy,
  contextMenu = {
    items: [
      {
        id: '1',
        group: '1',
        icon: 'arrow-redo',
        label: 'Del og gi tilgang',
      },
      {
        id: '2',
        group: '1',
        icon: 'eye-closed',
        label: 'Marker som ny',
      },
      {
        id: '3',
        group: '2',
        icon: 'archive',
        label: 'Flytt til arkiv',
      },
      {
        id: '4',
        group: '2',
        icon: 'trash',
        label: 'Flytt til papirkurv',
      },
      {
        id: '5',
        group: '3',
        icon: 'clock-dashed',
        label: 'Aktivitetslogg',
      },
    ],
  },
}: DialogNavProps) => {
  const [expandedItem, setExpandedItem] = useState<ExpandedItemType>(null);

  const onToggle = (type: ExpandedItemType) => {
    if (expandedItem === type) {
      setExpandedItem(null);
    } else {
      setExpandedItem(type);
    }
  };

  return (
    <nav className={styles?.nav}>
      <Button {...backButton} variant="text" color="secondary" icon="arrow-left" reverse>
        {backButton?.label || 'Back'}
      </Button>
      <div className={styles?.action}>
        {dueAt ? <DialogDue size="xs" dueAt={dueAt} /> : ''}
        {status ? <DialogStatus value={status?.value} label={status?.label} /> : ''}
        {touchedBy ? <DialogTouched touchedBy={touchedBy} /> : ''}
        {contextMenu && <DialogContextMenu {...contextMenu} expanded={expandedItem === 'menu'} onToggle={onToggle} />}
      </div>
    </nav>
  );
};
