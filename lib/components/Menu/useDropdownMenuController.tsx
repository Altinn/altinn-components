import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';
import type { DropdownPopup, DropdownVariant } from '../Dropdown';

type UseDropdownMenuControllerOptions = {
  id?: string;
  /** What the trigger opens. Sets `aria-haspopup` and `aria-controls`. `disclosure` has no `aria-haspopup`. */
  popup?: DropdownPopup;
  /** `drawer` variants open as a dialog on small screens. */
  variant?: DropdownVariant;
  /** For a controlled open state. */
  open?: boolean;
  returnFocusOnClose?: boolean;
};

export function useDropdownMenuController(options: UseDropdownMenuControllerOptions = {}) {
  const { id, popup = 'menu', variant = 'dropdown', open: controlledOpen, returnFocusOnClose = true } = options;

  const reactId = useId();
  const menuId = useMemo(() => id || `menu-${reactId}`, [id, reactId]);
  const triggerId = `${menuId}-trigger`;
  const panelId = `${menuId}-panel`;
  const listId = popup === 'menu' ? menuId : `${menuId}-listbox`;

  const [internalOpen, setOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;

  const triggerRef = useRef<HTMLElement | null>(null);

  const prevOpenRef = useRef(open);

  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    const prevOpen = prevOpenRef.current;
    prevOpenRef.current = open;

    // Only run focus return on actual close transition (true -> false)
    if (prevOpen && !open && returnFocusOnClose) {
      const raf = requestAnimationFrame(() => {
        const trigger = triggerRef.current;
        if (!trigger) return;

        const active = document.activeElement;
        const dialog = document.querySelector<HTMLDialogElement>('dialog[open]');
        const coveredByDialog = Boolean(dialog && !dialog.contains(trigger));

        // Focus has moved to another control, e.g. the next filter.
        const movedOn =
          active instanceof HTMLElement &&
          active !== document.body &&
          active !== trigger &&
          !document.getElementById(panelId)?.contains(active);
        if (movedOn && !coveredByDialog) return;

        trigger.focus?.();

        // Re-assert focus on the trigger once that modal dialog closes so it isn't lost.
        if (document.activeElement === trigger) return;
        if (!dialog || !coveredByDialog) return;
        const handleDialogClose = () => {
          dialog.removeEventListener('close', handleDialogClose);
          triggerRef.current?.focus?.();
        };
        dialog.addEventListener('close', handleDialogClose);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [open, returnFocusOnClose, panelId]);

  const isDesktop = useIsDesktop();
  const fullscreen = variant === 'drawer' || (variant === 'drawer-dropdown' && !isDesktop);
  const openedPopup: DropdownPopup = fullscreen ? 'dialog' : popup;
  const controlsId = openedPopup === 'menu' || openedPopup === 'listbox' ? listId : panelId;

  /** For the trigger, with `ref={triggerRef}`. */
  const triggerProps = useMemo(
    () => ({
      id: triggerId,
      'aria-haspopup': openedPopup === 'disclosure' ? undefined : openedPopup,
      'aria-expanded': open,
      'aria-controls': open ? controlsId : undefined,
    }),
    [triggerId, openedPopup, open, controlsId],
  );

  /** For the Dropdown. */
  const dropdownProps = useMemo(() => ({ id: menuId, variant, popup }), [menuId, variant, popup]);

  /** For the Menu. Named by the trigger unless it gets its own label. */
  const listProps = useMemo(
    () => ({
      id: menuId,
      keyboardScope: 'focus' as const,
      'aria-labelledby': triggerId,
    }),
    [menuId, triggerId],
  );

  return {
    open,
    setOpen,
    openMenu,
    closeMenu,
    toggleMenu,
    menuId,
    listId,
    panelId,
    triggerId,
    triggerRef,
    triggerProps,
    dropdownProps,
    listProps,
  };
}
