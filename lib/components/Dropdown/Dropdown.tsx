import { XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { type ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
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

export type DropdownVariant = 'dropdown' | 'drawer' | 'drawer-dropdown';

export interface DropdownProps {
  id?: string;
  className?: string;
  backdrop?: boolean;
  placement?: DropdownPlacement;
  variant?: DropdownVariant;
  trigger: ReactNode; // The button or element that toggles the menu
  children: ReactNode; // The content of the dropdown menu
  open: boolean;
  title?: string;
  /* Drawer: Aria label for close button */
  closeLabel?: string;
  /* Drawer: Label for submit button */
  submitLabel?: string;
  onClose: () => void;
  onSubmit?: () => void;
  size?: DropdownSize;
}

export const Dropdown = ({
  id,
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
}: DropdownProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState({
    yDir: placement.includes('top') ? 'top' : 'bottom',
    xDir: placement.includes('right') ? 'right' : 'left',
    maxHeight: 300,
  });

  const updatePosition = useCallback(() => {
    if (open && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const BUFFER = 16;

      const spaceBelow = viewportHeight - containerRect.bottom;
      const spaceAbove = containerRect.top;

      // Vertical Logic: Flip to top if space is tight below AND top has more room
      const shouldFlipY = spaceBelow < 250 && spaceAbove > spaceBelow;
      const finalYDir = shouldFlipY ? 'top' : 'bottom';
      const finalMaxHeight = (shouldFlipY ? spaceAbove : spaceBelow) - BUFFER;

      setCoords((prev) => ({
        ...prev,
        yDir: finalYDir,
        maxHeight: finalMaxHeight,
      }));
    }
  }, [open]);

  useLayoutEffect(() => {
    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [updatePosition]);

  // Handle ESC key and Click Outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
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

  const dropdownStyles: React.CSSProperties = {
    position: 'absolute',
    zIndex: 50,
    //    minWidth: '100%', // Ensure it's at least as wide as trigger
    width: 'max-content',
    //    maxWidth: '90vw', // Prevent overflow on small screens
    maxHeight: `${coords.maxHeight}px`,
    overflowY: 'auto',
    //    display: open ? 'block' : 'none', // Handle visibility
    [coords.xDir]: 0,
    [coords.yDir === 'bottom' ? 'top' : 'bottom']: '100%',
  };

  return (
    <>
      {backdrop && <div className={styles.backdrop} aria-hidden={!open} />}
      <div id={id} ref={containerRef} style={{ position: 'relative', display: 'inline-block' }}>
        <div
          aria-haspopup="true"
          aria-expanded={open}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
        >
          {trigger}
        </div>
        <div
          ref={dropdownRef}
          className={cx(styles.dropdown, className)}
          role="menu"
          style={dropdownStyles}
          aria-hidden={!open}
          data-variant={variant}
          data-size={size}
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
      </div>
    </>
  );
};
