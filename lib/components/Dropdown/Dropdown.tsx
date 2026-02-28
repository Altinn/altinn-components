import { XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { type ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button';
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

export interface DropdownProps {
  id?: string;
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
  activeDescendantId?: string;
  useFixedPosition?: boolean;
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

const focusFirst = (root: HTMLElement) => {
  const els = getFocusable(root);
  els[0]?.focus({ preventScroll: true });
};

export const Dropdown = ({
  id = 'dropdown',
  size = 'sm',
  className,
  backdrop = true,
  placement = 'bottom-left',
  variant = 'dropdown',
  title = 'Title',
  closeLabel = 'Close',
  submitLabel,
  trigger,
  children,
  open,
  onClose,
  onSubmit,
  activeDescendantId,
  useFixedPosition = false,
}: DropdownProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const openRef = useRef(open);
  useEffect(() => {
    openRef.current = open;
  }, [open]);

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

      setCoords((prev) => ({
        ...prev,
        yDir: finalYDir,
        maxHeight: finalMaxHeight,
        xDir: finalXDir,
        triggerRect: useFixedPosition ? referenceRect : undefined,
      }));
    }
  }, [open, useFixedPosition]);

  useLayoutEffect(() => {
    updatePosition();
    window.addEventListener('resize', updatePosition);
    if (useFixedPosition) {
      window.addEventListener('scroll', updatePosition, true);
    }
    return () => {
      window.removeEventListener('resize', updatePosition);
      if (useFixedPosition) {
        window.removeEventListener('scroll', updatePosition, true);
      }
    };
  }, [updatePosition, useFixedPosition]);

  useEffect(() => {
    if (!open) return;

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

      root.focus?.({ preventScroll: true });
    });

    return () => cancelAnimationFrame(raf);
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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
  }, [open, onClose]);

  // Focus trap (Tab wrap + prevent focus leaving the dropdown)
  useEffect(() => {
    if (!open) return;

    const root = dropdownRef.current;
    if (!root) return;

    const onFocusIn = (e: FocusEvent) => {
      if (!openRef.current) {
        return;
      }
      const target = e.target as Node | null;
      if (target && !root.contains(target)) {
        focusFirst(root);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusables = getFocusable(root);

      if (focusables.length === 0) {
        e.preventDefault();
        root.focus?.({ preventScroll: true });
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (active === first) {
          e.preventDefault();
          last.focus({ preventScroll: true });
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus({ preventScroll: true });
        }
      }
    };

    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('focusin', onFocusIn);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const dropdownStyles: React.CSSProperties =
    useFixedPosition && coords.triggerRect
      ? {
          position: 'fixed',
          zIndex: 1000,
          width: 'max-content',
          maxHeight: `${coords.maxHeight}px`,
          overflowY: 'auto',
          [coords.xDir === 'left' ? 'left' : 'right']:
            coords.xDir === 'left' ? coords.triggerRect.left : window.innerWidth - coords.triggerRect.right,
          [coords.yDir === 'bottom' ? 'top' : 'bottom']:
            coords.yDir === 'bottom' ? coords.triggerRect.bottom + 8 : window.innerHeight - coords.triggerRect.top + 8,
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

  const dropdownEl = (
    <div
      ref={dropdownRef}
      className={cx(styles.dropdown, className)}
      style={dropdownStyles}
      aria-hidden={!open}
      data-variant={variant}
      data-size={size}
      tabIndex={-1}
      role="menu"
      aria-modal={variant === 'drawer-dropdown' ? true : undefined}
      aria-activedescendant={activeDescendantId}
    >
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <Button size="sm" variant="outline" onClick={onClose} aria-label={closeLabel}>
          <XMarkIcon />
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
    </div>
  );

  return (
    <>
      {backdrop && <div className={styles.backdrop} aria-hidden={!open} />}
      <div id={id + '-root'} ref={containerRef} style={{ position: 'relative', display: 'inline-block' }}>
        {trigger}
        {useFixedPosition ? createPortal(dropdownEl, document.body) : dropdownEl}
      </div>
    </>
  );
};
