import { ChevronUpDownIcon, PlusIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { ElementType, MouseEventHandler, ReactNode } from 'react';
import { Button, ComboButton } from '../Button';
import styles from './toolbarButton.module.css';

export type ToolbarButtonType = 'add' | 'select' | 'switch';

export interface ToolbarButtonProps {
  as?: ElementType;
  type?: ToolbarButtonType;
  ariaLabel?: string;
  iconAltText?: string;
  removable?: boolean;
  selected?: boolean;
  active?: boolean;
  children?: ReactNode;
  onToggle?: MouseEventHandler;
  onRemove?: MouseEventHandler;
  dataTestId?: string;
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
  iconAltText,
  dataTestId,
}: ToolbarButtonProps) => {
  if (removable) {
    return (
      <ComboButton
        className={styles.removeButton}
        variant={active ? 'solid' : 'outline'}
        size="xs"
        icon={XMarkIcon}
        selected={selected}
        onLabelClick={onToggle}
        onIconClick={onRemove}
        iconAltText={iconAltText}
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
        size="xs"
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
      dataTestId={dataTestId}
      variant={active ? 'solid' : 'outline'}
      size="xs"
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
