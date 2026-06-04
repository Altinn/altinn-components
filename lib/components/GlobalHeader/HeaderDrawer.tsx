import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { type ReactNode, useEffect, useRef } from 'react';
import { Button } from '../Button';
import { useRootContext } from '../RootProvider';
import styles from './headerDrawer.module.css';

export interface HeaderDrawerProps {
  id: string;
  open: boolean;
  onClose: () => void;
  closedBy?: 'any' | 'closerequest' | 'none';
  expanded?: boolean;
  expandable?: boolean;
  onToggle?: () => void;
  children: ReactNode;
}

export const HeaderDrawer = ({
  id,
  open,
  onClose,
  closedBy = 'any',
  expanded,
  expandable = true,
  onToggle,
  children,
}: HeaderDrawerProps) => {
  const { languageCode } = useRootContext();
  const texts = getTexts(languageCode);

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    // Light dismiss: close when the backdrop (the dialog element itself) is
    // clicked. Escape is handled natively via the dialog "cancel" event.
    const handleBackdropClick = (event: MouseEvent) => {
      if (window.getSelection()?.toString()) return;
      const { clientY: y, clientX: x, target } = event;
      if (dialog && target === dialog && closedBy === 'any') {
        const { top, left, right, bottom } = dialog.getBoundingClientRect();
        const isInDialog = top <= y && y <= bottom && left <= x && x <= right;

        if (!isInDialog) dialog.close();
      }
    };

    const handleAutoFocus = () => {
      const autofocus = dialog?.querySelector<HTMLElement>('[autofocus]');
      if (document.activeElement !== autofocus) autofocus?.focus();
    };

    dialog?.addEventListener('animationend', handleAutoFocus);
    dialog?.addEventListener('click', handleBackdropClick);
    return () => {
      dialog?.removeEventListener('animationend', handleAutoFocus);
      dialog?.removeEventListener('click', handleBackdropClick);
    };
  }, [closedBy]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [open]);

  const handleCancel = (e: React.SyntheticEvent<HTMLDialogElement>) => {
    // The "cancel" event fires on Escape (a close request). Block it only when
    // the dialog must not be dismissed; otherwise let it close natively, which
    // notifies the parent through the "close" event (onClose) and restores
    // focus to the element that opened the dialog.
    if (closedBy === 'none') e.preventDefault();
  };

  return (
    <>
      <div className={styles.backdrop} aria-hidden={!open} />
      <dialog
        id={id}
        ref={dialogRef}
        aria-modal="true"
        aria-labelledby="modal-title"
        data-open={open}
        data-expanded={expanded}
        onCancel={handleCancel}
        className={styles.drawer}
        onClose={closedBy !== 'none' ? onClose : undefined}
      >
        <div className={styles.body}>{children}</div>
        {closedBy !== 'none' && expandable && (
          <footer className={styles.footer}>
            <Button className={styles.toggleButton} size="xs" variant="outline" onClick={onToggle}>
              {expanded ? (
                <>
                  <ChevronUpIcon className={styles.btnIcon} aria-hidden="true" />
                  {texts.minimize}
                </>
              ) : (
                <>
                  <ChevronDownIcon className={styles.btnIcon} aria-hidden="true" />
                  {texts.fullscreen}
                </>
              )}
            </Button>
          </footer>
        )}
      </dialog>
    </>
  );
};

// TODO: Move to a common texts files when i18next is added
// This is only a temporary solution for providing texts in different languages in a very simple POC
const getTexts = (languageCode: string | undefined) => {
  switch (languageCode) {
    case 'nn':
      return {
        minimize: 'Minimer',
        fullscreen: 'Vis i fullskjerm',
      };
    case 'en':
      return {
        minimize: 'Minimize',
        fullscreen: 'Show in fullscreen',
      };
    default:
      return {
        minimize: 'Minimer',
        fullscreen: 'Vis i fullskjerm',
      };
  }
};
