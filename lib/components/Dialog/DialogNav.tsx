'use client';
import type { ElementType } from 'react';
import { Button } from '../Button';
import { ContextMenu, type ContextMenuProps } from '../ContextMenu';
import { MetaTimestamp } from '../Meta';
import { DialogStatus, type DialogStatusProps } from './DialogStatus';
import { DialogTouchedBy, type DialogTouchedByActor } from './DialogTouchedBy';
import styles from './dialogNav.module.css';

export interface DialogBackButtonProps {
  as?: ElementType;
  href?: string;
  label?: string;
}

export interface DialogNavProps {
  status?: DialogStatusProps;
  dueAt?: string;
  dueAtLabel?: string;
  touchedBy?: DialogTouchedByActor[];
  backButton?: DialogBackButtonProps;
  menu?: ContextMenuProps;
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
  dueAtLabel,
  touchedBy,
  menu,
}: DialogNavProps) => {
  return (
    <nav className={styles.nav}>
      <Button {...backButton} variant="text" color="secondary" icon="arrow-left" reverse>
        {backButton?.label || 'Back'}
      </Button>
      <div className={styles.action}>
        {dueAt && dueAtLabel && (
          <MetaTimestamp datetime={dueAt} size="xs">
            {dueAtLabel}
          </MetaTimestamp>
        )}
        {status && <DialogStatus {...status} />}
        {touchedBy && <DialogTouchedBy touchedBy={touchedBy} />}
        {menu && <ContextMenu {...menu} />}
      </div>
    </nav>
  );
};
