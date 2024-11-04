'use client';
import { useState } from 'react';
import type { ElementType } from 'react';
import { Button } from '../Button';
import { ContextMenu, type DialogContextMenuProps } from '../ContextMenu/ContextMenu.tsx';
import { MetaTimestamp } from '../Meta';
import { DialogStatus, type DialogStatusProps } from './DialogStatus';
import { DialogTouchedBy, type DialogTouchedByActor } from './DialogTouchedBy';
import styles from './dialog.module.css';

export interface DialogBackButtonProps {
  as?: ElementType;
  href?: string;
  label?: string;
}

export interface DialogNavProps {
  status?: DialogStatusProps;
  dueAt?: string;
  duaAtLabel?: string;
  touchedBy?: DialogTouchedByActor[];
  backButton?: DialogBackButtonProps;
  menu?: DialogContextMenuProps;
}

/**
 * Dialog navigation bar with Back button and possibly a context menu.
 */
export const DialogNav = ({
  backButton = {
    as: 'a',
    label: 'Back',
  },
  status,
  dueAt,
  touchedBy,
  duaAtLabel,
  menu,
}: DialogNavProps) => {
  const [expandedItem, setexpandedItem] = useState<boolean>(false);
  const onToggle = () => setexpandedItem((expanded) => !expanded);

  return (
    <nav className={styles.nav}>
      <Button {...backButton} variant="text" color="secondary" icon="arrow-left" reverse>
        {backButton?.label || 'Back'}
      </Button>
      <div className={styles.action}>
        {duaAtLabel && duaAtLabel && (
          <MetaTimestamp datetime={dueAt} size="xs">
            {duaAtLabel}
          </MetaTimestamp>
        )}
        {status && <DialogStatus {...status} />}
        {touchedBy && <DialogTouchedBy touchedBy={touchedBy} />}
        {menu && <ContextMenu {...menu} expanded={expandedItem} onToggle={onToggle} />}
      </div>
    </nav>
  );
};
