'use client';
import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { Badge, type BadgeColor, type BadgeVariant } from '../Badge/Badge';
import { DropdownBase } from '../Dropdown/DropdownBase';
import { Icon } from '../Icon/Icon';
import { MenuList, MenuListItem } from '../Menu';
import { MenuItem } from '../Menu/MenuItem';
import { FieldBase, type FieldBaseProps } from './FieldBase';
import { Input, type InputProps } from './Input';
import styles from './textFieldDropdown.module.css';

export interface TextFieldDropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
  badge?: {
    label: string;
    color: BadgeColor;
    variant?: BadgeVariant;
  };
}

export interface TextFieldDropdownProps extends Omit<InputProps, 'value' | 'onChange'> {
  label?: FieldBaseProps['label'];
  helperText?: FieldBaseProps['helperText'];
  value?: string;
  onChange?: (value: string) => void;
  options: TextFieldDropdownOption[];
  validate?: (value: string) => boolean | string;
  badge?: {
    label: string;
    color: BadgeColor;
    variant?: BadgeVariant;
  };
}

export const TextFieldDropdown = ({
  label,
  helperText,
  value = '',
  onChange,
  options,
  validate,
  badge,
  disabled,
  size,
  color: colorProp,
  className,
  ...inputProps
}: TextFieldDropdownProps) => {
  const dropdownId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [validationError, setValidationError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => {
    if (isOpen) {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  });

  const filteredOptions = useMemo(() => {
    if (!inputValue) return options;
    return options.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));
  }, [inputValue, options]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    if (!validate) return;

    const timer = setTimeout(() => {
      const result = validate(inputValue);
      setValidationError(typeof result === 'string' ? result : result ? null : 'Invalid value');
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue, validate]);

  useEffect(() => {
    if (disabled || !inputValue) return;

    const exactMatch = filteredOptions.some((option) => option.label.toLowerCase() === inputValue.toLowerCase());

    if (filteredOptions.length > 0 && !exactMatch && !isOpen) {
      setIsOpen(true);
    } else if (isOpen && filteredOptions.length === 0) {
      setIsOpen(false);
    }
  }, [inputValue, filteredOptions, isOpen, disabled]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onChange?.(newValue);
    },
    [onChange],
  );

  const handleSelectOption = useCallback(
    (option: TextFieldDropdownOption) => {
      setInputValue(option.label);
      onChange?.(option.value);
      setIsOpen(false);
      setActiveIndex(-1);
      inputRef.current?.focus();
    },
    [onChange],
  );

  const handleDropdownToggle = useCallback(() => {
    if (disabled) return;
    if (isOpen) {
      setIsOpen(false);
      setActiveIndex(-1);
    } else if (filteredOptions.length > 0) {
      setIsOpen(true);
    }
  }, [disabled, isOpen, filteredOptions.length]);

  const color = validationError ? 'danger' : colorProp;

  return (
    <FieldBase size={size} color={color} label={label} helperText={validationError || helperText} className={className}>
      <div className={styles.container} ref={containerRef}>
        <Input
          {...inputProps}
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          disabled={disabled}
          size={size}
          color={color}
          className={styles.input}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={dropdownId}
          aria-autocomplete="list"
          aria-activedescendant={activeIndex >= 0 ? `${dropdownId}-option-${activeIndex}` : undefined}
          aria-invalid={!!validationError}
          aria-describedby={validationError ? `${dropdownId}-error` : undefined}
          data-has-badge={!!badge}
        />
        {badge && (
          <span className={styles.badge}>
            <Badge label={badge.label} color={badge.color} variant={badge.variant || 'subtle'} size="sm" />
          </span>
        )}
        <button
          type="button"
          className={styles.dropdownTrigger}
          onClick={handleDropdownToggle}
          disabled={disabled}
          aria-label={isOpen ? 'Close dropdown' : 'Open dropdown'}
          tabIndex={-1}
        >
          <Icon svgElement={isOpen ? ChevronUpIcon : ChevronDownIcon} />
        </button>
        <DropdownBase open={isOpen} onClose={() => setIsOpen(false)} as="div" className={styles.dropdown}>
          {/* biome-ignore lint/a11y/useFocusableInteractive: combobox pattern - focus is on input */}
          {/* biome-ignore lint/a11y/useSemanticElements: custom combobox requires ARIA roles */}
          <div id={dropdownId} ref={dropdownRef} role="listbox">
            {/* biome-ignore lint/a11y/useSemanticElements: ARIA combobox pattern */}
            <MenuList role="group">
              {filteredOptions.map((option, index) => (
                <MenuListItem key={option.value}>
                  <MenuItem
                    id={`${dropdownId}-option-${index}`}
                    role="option"
                    aria-selected={option.value === value}
                    data-active={activeIndex === index}
                    onClick={() => !option.disabled && handleSelectOption(option)}
                    disabled={option.disabled}
                    as="div"
                    title={option.label}
                    badge={option.badge}
                  />
                </MenuListItem>
              ))}
            </MenuList>
          </div>
        </DropdownBase>
      </div>
    </FieldBase>
  );
};
