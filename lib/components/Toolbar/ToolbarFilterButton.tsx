import { ChevronUpDownIcon, XMarkIcon } from '@navikt/aksel-icons';
import { type ReactNode, useId } from 'react';
import { Button, ButtonGroup, ButtonGroupDivider, type ButtonProps } from '../Button';
import { Tooltip } from '../Tooltip';

interface ToolbarFilterButtonProps {
  disabled?: boolean;
  name?: string;
  onClick?: () => void;
  onRemove?: () => void;
  removable?: boolean;
  removeLabel?: string;
  children?: ReactNode;
  /** Read before the label when the label does not include it */
  purpose?: string;
  triggerProps?: {
    id?: string;
    'aria-haspopup'?: 'menu' | 'listbox' | 'dialog';
    'aria-expanded'?: boolean;
    'aria-controls'?: string;
  };
  ref?: React.Ref<HTMLButtonElement>;
  variant?: ButtonProps['variant'];
  /** Advisory text set as the native HTML `title` attribute (tooltip) on the filter button. */
  htmlTitle?: string;
}

export function ToolbarFilterButton({
  disabled,
  name,
  onClick,
  removable,
  removeLabel = 'Fjern filter',
  onRemove,
  children,
  purpose,
  triggerProps,
  variant,
  ref,
  htmlTitle,
}: ToolbarFilterButtonProps) {
  const labelSaysPurpose =
    typeof children === 'string' && children.toLowerCase().includes((purpose ?? '').toLowerCase());
  const purposePrefix = purpose && !labelSaysPurpose ? <span className="ds-sr-only">{purpose}: </span> : null;

  /** The tooltip sets aria-label, so the full name is given with aria-labelledby. */
  const removeNameId = useId();
  const removeName = typeof children === 'string' && children ? `${removeLabel}: ${children}` : undefined;

  if (removable) {
    return (
      <ButtonGroup disabled={disabled} variant={variant} connected>
        <Button
          variant={variant}
          onClick={onClick}
          data-id={`filter-button-${name}`}
          {...triggerProps}
          title={htmlTitle}
          ref={ref}
        >
          {purposePrefix}
          <span>{children}</span>
        </Button>
        <ButtonGroupDivider variant={variant} />
        <Tooltip content={removeLabel}>
          <Button
            variant={variant}
            onClick={onRemove}
            aria-labelledby={removeName ? removeNameId : undefined}
            style={{
              borderLeft: 'none',
              borderRadius: '0 .25em .25em 0',
            }}
          >
            <XMarkIcon aria-hidden="true" />
            {removeName && (
              <span id={removeNameId} className="ds-sr-only">
                {removeName}
              </span>
            )}
          </Button>
        </Tooltip>
      </ButtonGroup>
    );
  }

  return (
    <Button
      disabled={disabled}
      variant={variant}
      onClick={onClick}
      data-id={`filter-button-${name}`}
      title={htmlTitle}
      {...triggerProps}
      ref={ref}
    >
      {purposePrefix}
      <span>{children}</span>
      <ChevronUpDownIcon aria-hidden="true" />
    </Button>
  );
}
