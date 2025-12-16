import { ChevronUpDownIcon, PlusIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import { Button, ButtonGroup, ButtonGroupDivider, type ButtonProps } from './';
import { Tooltip } from './Tooltip';

interface ToolbarButtonProps extends ButtonProps {
  name?: string;
  onClick?: () => void;
  onRemove?: () => void;
  removable?: boolean;
  removeLabel?: string;
  children?: ReactNode;
}

export function ToolbarButton({
  name,
  variant = 'secondary',
  onClick,
  removable,
  removeLabel = 'Fjern filter',
  onRemove,
  children,
}: ToolbarButtonProps) {
  if (removable) {
    return (
      <ButtonGroup size="xs" variant={variant}>
        <Button
          variant={variant}
          onClick={onClick}
          data-id={`filter-button-${name}`}
          style={{
            borderRight: 'none',
            borderRadius: '.25em 0 0 .25em',
          }}
        >
          <span>{children}</span>
        </Button>
        <ButtonGroupDivider variant={variant} />
        <Tooltip content={removeLabel}>
          <Button
            variant={variant}
            onClick={onRemove}
            style={{
              borderLeft: 'none',
              borderRadius: '0 .25em .25em 0',
            }}
          >
            <XMarkIcon />
          </Button>
        </Tooltip>
      </ButtonGroup>
    );
  }

  return (
    <Button size="xs" variant={variant} onClick={onClick} data-id={`filter-button-${name}`}>
      <span>{children}</span>
      <ChevronUpDownIcon />
    </Button>
  );
}

export function ToolbarResetButton({ children, onClick }: ToolbarButtonProps) {
  return (
    <Button onClick={onClick} size="xs" variant="tertiary">
      <XMarkIcon />
      <span>{children}</span>
    </Button>
  );
}

export function ToolbarAddButton({ children, onClick }: ToolbarButtonProps) {
  return (
    <Button
      size="xs"
      variant="secondary"
      style={{
        borderStyle: 'dashed',
      }}
      onClick={onClick}
    >
      <PlusIcon />
      <span>{children}</span>
    </Button>
  );
}
