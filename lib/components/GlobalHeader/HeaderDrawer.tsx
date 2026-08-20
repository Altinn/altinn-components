import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { type ReactNode, useEffect, useRef } from 'react';
import { Button } from '../Button';
import { useRootContext } from '../RootProvider';
import styles from './headerDrawer.module.css';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

// show() does not move focus; mirror what showModal() would have done.
const focusInitial = (dialog: HTMLDialogElement) => {
  const target =
    dialog.querySelector<HTMLElement>('[autofocus]') ?? dialog.querySelector<HTMLElement>(FOCUSABLE) ?? dialog;
  target.focus({ preventScroll: true });
};

export interface HeaderDrawerProps {
  id: string;
  open: boolean;
  onClose: () => void;
  closedBy?: 'any' | 'closerequest' | 'none';
  expanded?: boolean;
  expandable?: boolean;
  onToggle?: () => void;
  children: ReactNode;
  ariaLabelledby?: string;
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
  ariaLabelledby,
}: HeaderDrawerProps) => {
  const { languageCode } = useRootContext();
  const texts = getTexts(languageCode);

  // Modal only when undismissable: showModal() makes the header inert and covers it with a ::backdrop.
  const isModal = closedBy === 'none';

  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  // `open` is the only source of truth; the dialog's "close" event is left unwired on purpose,
  // since it fires while the parent is already opening another overlay.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) {
        returnFocusRef.current = document.activeElement as HTMLElement | null;
        if (isModal) {
          dialog.showModal();
        } else {
          dialog.show();
          focusInitial(dialog);
        }
      }
    } else if (dialog.open) {
      // close() restores focus for modal dialogs only, and only if focus has not already moved on.
      const active = document.activeElement;
      const focusWasInside = !active || active === document.body || dialog.contains(active);
      dialog.close();
      if (!isModal && focusWasInside) returnFocusRef.current?.focus({ preventScroll: true });
    }
  }, [open, isModal]);

  // Escape is handled by RootProvider through `open`; closing natively too would bypass the parent.
  const handleCancel = (e: React.SyntheticEvent<HTMLDialogElement>) => {
    e.preventDefault();
  };

  // Light dismiss: a real element below the header, so header clicks reach the header instead.
  const handleBackdropMouseDown = () => {
    if (closedBy === 'any') onClose();
  };

  return (
    <>
      <div className={styles.backdrop} aria-hidden={!open} onMouseDown={open ? handleBackdropMouseDown : undefined} />
      <dialog
        id={id}
        ref={dialogRef}
        aria-modal={isModal || undefined}
        aria-labelledby={ariaLabelledby}
        data-open={open}
        data-expanded={expanded}
        tabIndex={-1}
        onCancel={handleCancel}
        className={styles.drawer}
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
