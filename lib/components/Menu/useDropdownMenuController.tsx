import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';

type UseDropdownMenuControllerOptions = {
  id?: string;
  focusPanelOnOpen?: boolean;
  returnFocusOnClose?: boolean;
};

export function useDropdownMenuController(options: UseDropdownMenuControllerOptions = {}) {
  const { id, focusPanelOnOpen = true, returnFocusOnClose = true } = options;

  const reactId = useId();
  const menuId = useMemo(() => id || `menu-${reactId}`, [id, reactId]);

  const [open, setOpen] = useState(false);
  const [activeDescendantId, setActiveDescendantId] = useState<string | undefined>(undefined);

  const triggerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);

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
        trigger.focus?.();

        // Re-assert focus on the trigger once that modal dialog closes so it isn't lost.
        if (document.activeElement === trigger) return;
        const dialog = document.querySelector<HTMLDialogElement>('dialog[open]');
        if (!dialog || dialog.contains(trigger)) return;
        const handleDialogClose = () => {
          dialog.removeEventListener('close', handleDialogClose);
          triggerRef.current?.focus?.();
        };
        dialog.addEventListener('close', handleDialogClose);
      });
      return () => cancelAnimationFrame(raf);
    }

    // Only run panel focus on actual open transition (false -> true)
    if (!prevOpen && open && focusPanelOnOpen) {
      requestAnimationFrame(() => panelRef.current?.focus?.());
    }
  }, [open, focusPanelOnOpen, returnFocusOnClose]);

  const dropdownA11yProps = useMemo(
    () => ({
      menuId,
      activeDescendantId,
      panelRef,
    }),
    [menuId, activeDescendantId],
  );

  const menuA11yProps = useMemo(
    () => ({
      id: menuId,
      onActiveItemIdChange: setActiveDescendantId,
    }),
    [menuId],
  );

  return {
    open,
    setOpen,
    openMenu,
    closeMenu,
    toggleMenu,
    menuId,
    activeDescendantId,
    setActiveDescendantId,
    triggerRef,
    panelRef,
    dropdownA11yProps,
    menuA11yProps,
  };
}
