import type { ElementType, MouseEventHandler, ReactNode } from 'react';
import { Button, ComboButton } from '../Button';
import styles from './toolbarButton.module.css';

export type ToolbarButtonType = 'add' | 'select' | 'switch';

export interface ToolbarButtonProps {
  as?: ElementType;
  type?: ToolbarButtonType;
  removable?: boolean;
  selected?: boolean;
  icon?: string;
  active?: boolean;
  children?: ReactNode;
  onToggle?: MouseEventHandler;
  onRemove?: MouseEventHandler;
}

export const ToolbarButton = ({
  type = 'select',
  selected = false,
  removable = false,
  active,
  children,
  onToggle,
  onRemove,
}: ToolbarButtonProps) => {
  if (removable) {
    return (
      <ComboButton
        className={styles.removeButton}
        variant={active ? 'solid' : 'outline'}
        size="sm"
        icon="x-mark"
        selected={selected}
        onLabelClick={onToggle}
        onIconClick={onRemove}
      >
        {children}
      </ComboButton>
    );
  }

  if (type === 'add') {
    return (
      <Button variant="dotted" size="sm" icon="plus" selected={selected} onClick={onToggle}>
        {children}
      </Button>
    );
  }

  return (
    <Button
      variant={active ? 'solid' : 'outline'}
      size="sm"
      icon="chevron-up-down"
      selected={selected}
      onClick={onToggle}
      reverse
    >
      {children}
    </Button>
  );
};
