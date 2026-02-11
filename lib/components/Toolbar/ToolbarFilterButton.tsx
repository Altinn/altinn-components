import { ChevronUpDownIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import { Button, ButtonGroup, ButtonGroupDivider, type ButtonProps } from '../Button';
import { Tooltip } from '../Tooltip';

interface ToolbarFilterButtonProps {
  name?: string;
  onClick?: () => void;
  onRemove?: () => void;
  removable?: boolean;
  removeLabel?: string;
  children?: ReactNode;
  open?: boolean;
  menuId?: string;
  ref?: React.Ref<HTMLButtonElement>;
  variant?: ButtonProps['variant'];
}

export function ToolbarFilterButton({
  name,
  onClick,
  removable,
  removeLabel = 'Fjern filter',
  onRemove,
  children,
  open,
  variant,
  ref,
}: ToolbarFilterButtonProps) {
  if (removable) {
    return (
      <ButtonGroup variant={variant} connected>
        <Button variant={variant} onClick={onClick} data-id={`filter-button-${name}`} aria-expanded={open} ref={ref}>
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
            <XMarkIcon aria-hidden="true" />
          </Button>
        </Tooltip>
      </ButtonGroup>
    );
  }

  return (
    <Button variant={variant} onClick={onClick} data-id={`filter-button-${name}`}>
      <span>{children}</span>
      <ChevronUpDownIcon />
    </Button>
  );
}
