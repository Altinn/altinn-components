import { XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { type ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { Color } from '..';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';
import { Button } from '../Button';
import { useRootContext } from '../RootProvider';
import styles from './dropdown.module.css';

export type DropdownSize = 'auto' | 'sm' | 'md' | 'lg';

export type DropdownPlacement =
  | 'left'
  | 'right'
  | 'bottom'
  | 'top'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-left'
  | 'top-right';

export type DropdownVariant = 'dropdown' | 'drawer' | 'drawer-dropdown' | 'header-dropdown' | 'header';

/** What the panel holds. `dialog` makes the panel a dialog named by `title`. */
export type DropdownPopup = 'menu' | 'listbox' | 'dialog' | 'disclosure';

export interface DropdownProps {
  id?: string;
  color?: Color;
  className?: string;
  backdrop?: boolean;
  placement?: DropdownPlacement;
  variant?: DropdownVariant;
  trigger: ReactNode;
  children: ReactNode;
  open: boolean;
  title?: string;
  closeLabel?: string;
  submitLabel?: string;
  onClose: () => void;
  onSubmit?: () => void;
  size?: DropdownSize;
  /** @deprecated No effect. */
  activeDescendantId?: string;
  expanded?: boolean;
  /** Default `disclosure`. */
  popup?: DropdownPopup;
  /** `false` when the close button is outside the panel. Only affects fullscreen. Default `true`. */
  modal?: boolean;
  /** Move focus into the panel on open. Default `true`. */
  autoFocus?: boolean;
}

const FOCUS_GUARD_ATTR = 'data-focus-guard';

const getFocusable = (root: HTMLElement) => {
  const selectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]',
  ].join(',');

  return Array.from(root.querySelectorAll<HTMLElement>(selectors))
    .filter((el) => !el.hasAttribute(FOCUS_GUARD_ATTR))
    .filter((el) => !el.hasAttribute('disabled'))
    .filter((el) => el.getAttribute('aria-hidden') !== 'true')
    .filter((el) => el.tabIndex !== -1)
    .filter((el) => {
      // basic "is visible" check
      const rects = el.getClientRects();
      return rects.length > 0 && rects[0].width > 0 && rects[0].height > 0;
    });
};

const supportsTopLayer = () =>
  typeof HTMLElement !== 'undefined' && typeof HTMLElement.prototype.showPopover === 'function';

export const Dropdown = ({
  id = 'dropdown',
  size = 'sm',
  className,
  backdrop = true,
  placement = 'bottom-left',
  variant = 'dropdown',
  title,
  closeLabel,
  submitLabel,
  trigger,
  children,
  open,
  onClose,
  color,
  onSubmit,
  expanded = false,
  popup = 'disclosure',
  modal = true,
  autoFocus = true,
}: DropdownProps) => {
  const { languageCode } = useRootContext();
  const isDesktop = useIsDesktop();
  const fullscreen = variant === 'drawer' || (variant === 'drawer-dropdown' && !isDesktop);
  const isModal = fullscreen && modal;
  const isDialog = isModal || popup === 'dialog';
  const panelId = `${id}-panel`;
  const titleId = `${id}-title`;

  /** Modal: native `<dialog>` with `showModal()`. Otherwise a `popover`. */
  const [topLayer] = useState(supportsTopLayer);
  const fixedPosition = topLayer;

  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  /** First focusable element next to the panel. */
  const getTrigger = useCallback(() => {
    const container = containerRef.current;
    if (!container) return null;
    const candidates = container.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
    );
    return Array.from(candidates).find((el) => !dropdownRef.current?.contains(el)) ?? null;
  }, []);

  const [coords, setCoords] = useState<{
    yDir: string;
    xDir: string;
    maxHeight: number;
    triggerRect?: DOMRect;
  }>({
    yDir: placement.includes('top') ? 'top' : 'bottom',
    xDir: placement.includes('right') ? 'right' : 'left',
    maxHeight: 300,
  });

  const updatePosition = useCallback(() => {
    if (open && containerRef.current && dropdownRef.current) {
      const referenceRect = containerRef.current.getBoundingClientRect();
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const BUFFER = 16;

      const spaceBelow = viewportHeight - referenceRect.bottom;
      const spaceAbove = referenceRect.top;
      const spaceRight = viewportWidth - referenceRect.right - dropdownRect.width;

      const shouldFlipY = spaceBelow < 250 && spaceAbove > spaceBelow;
      const finalYDir = shouldFlipY ? 'top' : 'bottom';
      const finalMaxHeight = (shouldFlipY ? spaceAbove : spaceBelow) - BUFFER;

      const shouldFlipX = spaceRight < BUFFER;
      const finalXDir = shouldFlipX ? 'right' : 'left';

      const triggerRect = fixedPosition ? referenceRect : undefined;
      setCoords((prev) => {
        const same =
          prev.yDir === finalYDir &&
          prev.xDir === finalXDir &&
          prev.maxHeight === finalMaxHeight &&
          prev.triggerRect?.top === triggerRect?.top &&
          prev.triggerRect?.left === triggerRect?.left &&
          prev.triggerRect?.right === triggerRect?.right &&
          prev.triggerRect?.bottom === triggerRect?.bottom;
        return same ? prev : { ...prev, yDir: finalYDir, maxHeight: finalMaxHeight, xDir: finalXDir, triggerRect };
      });
    }
  }, [open, fixedPosition]);

  useLayoutEffect(() => {
    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [updatePosition]);

  /** Follow the trigger on scroll and resize. */
  useEffect(() => {
    if (!open || !fixedPosition || isModal) return;

    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        updatePosition();
      });
    };

    // Capture, to see scrolling in any container.
    const onScroll = (event: Event) => {
      if (event.target instanceof Node && dropdownRef.current?.contains(event.target)) return;
      schedule();
    };
    document.addEventListener('scroll', onScroll, { capture: true, passive: true });
    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(document.body);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('scroll', onScroll, { capture: true });
      resizeObserver.disconnect();
    };
  }, [open, fixedPosition, isModal, updatePosition]);

  /** The panel stays mounted, so reset its scroll on open. */
  useLayoutEffect(() => {
    if (open && dropdownRef.current) {
      dropdownRef.current.scrollTop = 0;
    }
  }, [open]);

  /** Open and close in the top layer, and return focus to the trigger if it was inside. */
  const wasOpenRef = useRef(false);
  // biome-ignore lint/correctness/useExhaustiveDependencies: isModal swaps the element
  useLayoutEffect(() => {
    const panel = dropdownRef.current;
    const wasOpen = wasOpenRef.current;
    wasOpenRef.current = open;
    if (!panel) return;

    if (open) {
      if (!topLayer) return;
      if (panel instanceof HTMLDialogElement) {
        if (!panel.open) panel.showModal();
      } else if (!panel.matches(':popover-open')) {
        panel.showPopover();
      }
      return;
    }

    const active = document.activeElement;
    const focusWasInPanel = Boolean(active && panel.contains(active));
    if (topLayer) {
      if (panel instanceof HTMLDialogElement) {
        if (panel.open) panel.close();
      } else if (panel.matches(':popover-open')) {
        panel.hidePopover();
      }
    }
    if (wasOpen && focusWasInPanel) {
      getTrigger()?.focus({ preventScroll: true });
    }
  }, [open, isModal, topLayer, getTrigger]);

  useEffect(() => {
    if (!open || !autoFocus) return;

    const raf = requestAnimationFrame(() => {
      const root = dropdownRef.current;
      if (!root) return;

      const search = root.querySelector<HTMLInputElement>(
        'input[type="search"]:not([disabled]), input[role="searchbox"]:not([disabled]), input[data-dropdown-search]:not([disabled])',
      );

      if (search) {
        const len = search.value.length;
        search.focus({ preventScroll: true });
        try {
          search.setSelectionRange(len, len);
        } catch {}
        return;
      }

      const list = root.querySelector<HTMLElement>('[data-menu-focus]');
      (list ?? root).focus?.({ preventScroll: true });
    });

    return () => cancelAnimationFrame(raf);
  }, [open, autoFocus]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();

        const active = document.activeElement;
        const focusIsInPanel = !active || active === document.body || dropdownRef.current?.contains(active);
        const trigger = focusIsInPanel ? getTrigger() : null;

        onClose();
        trigger?.focus({ preventScroll: true });
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const inContainer = containerRef.current?.contains(target);
      const inDropdown = dropdownRef.current?.contains(target);
      if (!inContainer && !inDropdown) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose, getTrigger]);

  /** Tab past either end of a non-modal panel closes it. */
  useEffect(() => {
    if (!open || isModal) return;

    const root = dropdownRef.current;
    if (!root) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const active = document.activeElement;
      if (!active || !root.contains(active)) return;

      const ahead = e.shiftKey ? Node.DOCUMENT_POSITION_PRECEDING : Node.DOCUMENT_POSITION_FOLLOWING;
      const staysInPanel = getFocusable(root).some((el) => el !== active && active.compareDocumentPosition(el) & ahead);
      if (staysInPanel) return;

      e.preventDefault();
      const trigger = getTrigger();
      onCloseRef.current();
      trigger?.focus({ preventScroll: true });
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, isModal, getTrigger]);

  const dropdownStyles: React.CSSProperties =
    isModal && topLayer
      ? {}
      : fixedPosition && coords.triggerRect
        ? {
            position: 'fixed',
            zIndex: 1000,
            width: 'max-content',
            maxHeight: `${coords.maxHeight}px`,
            overflowY: 'auto',
            [coords.xDir === 'left' ? 'left' : 'right']:
              coords.xDir === 'left' ? coords.triggerRect.left : window.innerWidth - coords.triggerRect.right,
            [coords.yDir === 'bottom' ? 'top' : 'bottom']:
              coords.yDir === 'bottom' ? coords.triggerRect.bottom : window.innerHeight - coords.triggerRect.top,
          }
        : {
            position: 'absolute',
            zIndex: 50,
            width: 'max-content',
            maxHeight: `${coords.maxHeight}px`,
            overflowY: 'auto',
            [coords.xDir]: 0,
            [coords.yDir === 'bottom' ? 'top' : 'bottom']: '100%',
          };

  const Panel = isModal && topLayer ? 'dialog' : 'div';

  const dropdownEl = (
    <Panel
      ref={dropdownRef as React.Ref<HTMLDivElement & HTMLDialogElement>}
      id={panelId}
      popover={Panel === 'div' && topLayer ? 'manual' : undefined}
      // Escape is handled through `open`.
      onCancel={Panel === 'dialog' ? (e: React.SyntheticEvent) => e.preventDefault() : undefined}
      className={cx(styles.dropdown, className)}
      style={dropdownStyles}
      aria-hidden={!open}
      data-variant={variant}
      data-color={color}
      data-expanded={expanded}
      data-size={size}
      data-menu-scope
      tabIndex={-1}
      role={open && isDialog && Panel !== 'dialog' ? 'dialog' : undefined}
      aria-modal={open && isModal && Panel !== 'dialog' ? true : undefined}
      aria-labelledby={open && isDialog && title ? titleId : undefined}
    >
      <header className={styles.header}>
        {title ? (
          <h2 className={styles.title} id={titleId}>
            {title}
          </h2>
        ) : (
          <span />
        )}
        <Button size="sm" variant="outline" onClick={onClose} aria-label={closeLabel ?? getTexts(languageCode).close}>
          <XMarkIcon aria-hidden="true" />
        </Button>
      </header>

      <div className={styles.content}>{children}</div>

      {submitLabel && (
        <footer className={styles.footer}>
          <Button size="lg" variant="solid" onClick={onSubmit || onClose} rounded>
            <span data-size="md">{submitLabel}</span>
          </Button>
        </footer>
      )}
    </Panel>
  );

  return (
    <>
      {backdrop && <div className={styles.backdrop} aria-hidden={!open} />}
      <div id={id + '-root'} ref={containerRef} style={{ position: 'relative', display: 'inline-block' }}>
        {trigger}
        {dropdownEl}
      </div>
    </>
  );
};

// TODO: Move to a common texts files when i18next is added
// This is only a temporary solution for providing texts in different languages in a very simple POC
const getTexts = (languageCode: string | undefined) => {
  switch (languageCode) {
    case 'en':
      return { close: 'Close' };
    default:
      return { close: 'Lukk' };
  }
};
