import { type ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './dropdown.module.css';

export type DropdownPlacement =
  | 'left'
  | 'right'
  | 'bottom'
  | 'top'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-left'
  | 'top-right';

export interface DropdownProps {
  id?: string;
  placement?: DropdownPlacement;
  trigger: ReactNode; // The button or element that toggles the menu
  children: ReactNode; // The content of the dropdown menu
  open: boolean;
  onClose: () => void;
}

export const Dropdown = ({ id, placement = 'left', trigger, children, open, onClose }: DropdownProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [positionX, setPositionX] = useState<'left' | 'right'>('left');
  const [positionY, setPositionY] = useState<'bottom' | 'top'>('bottom');
  const [maxHeight, setMaxHeight] = useState<number>(300);

  // Set initial position from placement
  useEffect(() => {
    if (placement.includes('left')) {
      setPositionX('left');
    } else if (placement.includes('right')) {
      setPositionX('right');
    }

    if (placement.includes('bottom')) {
      setPositionY('bottom');
    } else if (placement.includes('top')) {
      setPositionY('top');
    }
  }, [placement]);

  // Handle auto-placement and max-height logic
  useLayoutEffect(() => {
    if (open && containerRef.current && dropdownRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      //     const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate space available above and below
      const spaceBelow = viewportHeight - containerRect.bottom;
      const spaceAbove = containerRect.top;

      // Buffer to prevent menu from touching the very edge of the screen
      const BUFFER = 16;

      // Logic: Prefer bottom. If not enough space, check if top has more space.
      // You can adjust '200' to be your minimum required height.
      const notEnoughSpaceBelow = spaceBelow < 200;
      const moreSpaceAbove = spaceAbove > spaceBelow;

      if (notEnoughSpaceBelow && moreSpaceAbove) {
        setPositionY('top');
        setMaxHeight(spaceAbove - BUFFER);
      } else {
        setPositionY('bottom');
        setMaxHeight(spaceBelow - BUFFER);
      }
    }
  }, [open]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <div id={id} ref={containerRef} style={{ position: 'relative', display: 'inline-block', width: 'max-content' }}>
      <div>{trigger}</div>

      <div
        ref={dropdownRef}
        className={styles.dropdown}
        data-position-y={positionY}
        aria-expanded={open}
        style={{
          position: 'absolute',
          zIndex: 50,
          width: 300,
          height: 'max-content',
          maxHeight: `${maxHeight}px`,
          overflowY: 'auto',
          ...(positionX === 'left' ? { left: 0 } : { right: 0 }),
          ...(positionY === 'bottom' ? { top: '100%' } : { bottom: '100%' }),
        }}
      >
        {children}
      </div>
    </div>
  );
};
