import { ChevronUpDownIcon, PlusIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { ElementType, MouseEventHandler, ReactNode } from 'react';
import { Button, ComboButton } from '../Button';
import styles from './toolbarButton.module.css';

export type ToolbarButtonType = 'add' | 'select' | 'switch';

export interface ToolbarButtonProps {
  as?: ElementType;
  type?: ToolbarButtonType;
  ariaLabel?: string;
  removable?: boolean;
  selected?: boolean;
  active?: boolean;
  children?: ReactNode;
  onToggle?: MouseEventHandler;
  onRemove?: MouseEventHandler;
}

export const ToolbarButton = ({
  type = 'select',
  selected = false,
  removable = false,
  ariaLabel,
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
        icon={XMarkIcon}
        selected={selected}
        onLabelClick={onToggle}
        onIconClick={onRemove}
        ariaLabel={ariaLabel || 'remove'}
      >
        {children}
      </ComboButton>
    );
  }

  if (type === 'add') {
    return (
      <Button
        variant="dotted"
        size="sm"
        icon={PlusIcon}
        selected={selected}
        onClick={onToggle}
        ariaLabel={ariaLabel || 'add'}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      variant={active ? 'solid' : 'outline'}
      size="sm"
      icon={ChevronUpDownIcon}
      ariaLabel={ariaLabel}
      selected={selected}
      onClick={onToggle}
      reverse
    >
      {children}
    </Button>
  );
};
