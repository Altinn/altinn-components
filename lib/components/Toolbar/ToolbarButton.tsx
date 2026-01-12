import { ChevronUpDownIcon, PlusIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { AriaAttributes } from 'react';
import type { ElementType, MouseEventHandler, ReactNode } from 'react';
import { Button, ButtonGroup, ButtonGroupDivider } from '../Button';
import styles from './toolbarButton.module.css';

export type ToolbarButtonType = 'add' | 'select' | 'switch';

export type ToolbarButtonProps = {
  as?: ElementType;
  type?: ToolbarButtonType;
  ariaLabel?: string;
  iconAltText?: string;
  removable?: boolean;
  active?: boolean;
  children?: ReactNode;
  onToggle?: MouseEventHandler;
  onRemove?: MouseEventHandler;
  'data-testid'?: string;
  tabIndex?: number;
} & AriaAttributes;

export const ToolbarButton = ({
  type = 'select',
  removable = false,
  ariaLabel,
  active,
  children,
  onToggle,
  onRemove,
  iconAltText,
  'data-testid': dataTestId,
  tabIndex,
  'aria-expanded': ariaExpanded,
}: ToolbarButtonProps) => {
  if (removable) {
    const variant = active ? 'tinted' : 'outline';

    return (
      <ButtonGroup
        connected
        className={styles.removeButton}
        variant={variant}
        size="xs"
        aria-expanded={ariaExpanded}
        data-testid={dataTestId}
        tabIndex={tabIndex}
      >
        <Button variant={variant} onClick={onToggle}>
          {children}
        </Button>
        <ButtonGroupDivider variant={variant} />
        <Button variant={variant} aria-label={iconAltText || 'remove'} onClick={onRemove}>
          <XMarkIcon />
        </Button>
      </ButtonGroup>
    );
  }

  if (type === 'add') {
    return (
      <Button
        variant="outline"
        size="xs"
        onClick={onToggle}
        aria-label={ariaLabel || 'add'}
        aria-expanded={ariaExpanded}
        data-testid={dataTestId}
        tabIndex={tabIndex}
      >
        <PlusIcon />
        <span>{children}</span>
      </Button>
    );
  }

  return (
    <Button
      data-testid={dataTestId}
      variant={active ? 'solid' : 'outline'}
      size="xs"
      aria-label={ariaLabel}
      onClick={onToggle}
      aria-expanded={ariaExpanded}
    >
      <span>{children}</span>
      <ChevronUpDownIcon />
    </Button>
  );
};
