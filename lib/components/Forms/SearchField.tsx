import { MagnifyingGlassIcon, XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { useId, useMemo, useState } from 'react';
import { Button, FieldBase, type FieldBaseProps, Icon, Input, type InputProps, type MenuItemProps } from '..';
import { Menu, type MenuProps } from '../Menu';
import styles from './searchField.module.css';

export interface SearchFieldMenuProps extends MenuProps {
  open?: boolean;
  onClose: () => void;
}

export interface SearchFieldProps extends InputProps {
  className?: string;
  collapsible?: boolean;
  value?: InputProps['value'];
  label?: FieldBaseProps['label'];
  clearButtonAltText?: string;
  onClear?: () => void;
  menu?: SearchFieldMenuProps;
}

export const SearchField = ({
  className,
  collapsible,
  size,
  color = 'neutral',
  label,
  value,
  onClear,
  clearButtonAltText = 'Clear search',
  menu,
  minLength,
  ...rest
}: SearchFieldProps) => {
  const autoId = useId();
  const [menuOpen, setMenuOpen] = useState(false);
  const inputId = rest.id || `search-field-${autoId}`;
  const listId = `${inputId}-listbox`;
  const [activeDescendantId, setActiveDescendantId] = useState<string | undefined>(undefined);
  const clearButtonId = 'searchfield-clear-button-' + useId();
  const showMenu = useMemo(() => {
    if (!value || (typeof minLength === 'number' && typeof value === 'string' && value.length < minLength)) {
      return false;
    }
    return menuOpen;
  }, [menuOpen, minLength, value]);

  const menuItemsWithToggle: MenuItemProps[] = useMemo(() => {
    return (menu?.items ?? []).map((item) => ({
      ...item,
      onClick: () => {
        item.onClick?.();
        setMenuOpen(false);
      },
    }));
  }, [menu]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter' && showMenu) {
      menu?.items?.[0]?.onClick?.();
      setMenuOpen(false);
      return;
    }

    if (event.key === 'Escape' && showMenu) {
      event.preventDefault();
      event.stopPropagation();
      setMenuOpen(false);
      menu?.onClose();
      const input = document.getElementById(inputId) as HTMLInputElement | null;
      input?.focus();
      return;
    }
    rest.onKeyDown?.(event);

    setMenuOpen(true);
  };

  const handleOnFocus: React.FocusEventHandler<HTMLInputElement> = () => {
    setMenuOpen(true);
  };

  const handleBlurCapture: React.FocusEventHandler = (event) => {
    if (!menuOpen) return;
    const next = event.relatedTarget as Node | null;
    if (next && event.currentTarget.contains(next)) return;
    setMenuOpen(false);
  };

  const handleMenuPointerDown: React.MouseEventHandler<HTMLDivElement> = (event) => {
    // Prevent input blur so menu doesn't unmount before click handlers fire.
    event.preventDefault();
  };

  const handleInputBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
    const next = event.relatedTarget as HTMLElement | null;
    if (next?.id === clearButtonId) {
      setActiveDescendantId(undefined);
    }
    rest.onBlur?.(event);
  };

  return (
    <div className={styles.fieldContainer}>
      <FieldBase
        size={size}
        color={color}
        label={label}
        className={cx(styles.field, className)}
        onBlurCapture={handleBlurCapture}
      >
        <div className={styles.inputContainer}>
          <Input
            {...rest}
            id={inputId}
            type="search"
            value={value}
            className={styles.input}
            data-collapsible={collapsible}
            autoCapitalize="off"
            autoComplete="off"
            minLength={minLength}
            onKeyDown={handleKeyDown}
            onBlur={handleInputBlur}
            {...(menu && {
              role: 'combobox',
              'aria-autocomplete': 'list',
              'aria-expanded': Boolean(showMenu),
              'aria-haspopup': 'listbox',
              'aria-controls': listId,
              'aria-activedescendant': showMenu ? activeDescendantId : undefined,
              onFocus: handleOnFocus,
            })}
          />
          <Icon svgElement={MagnifyingGlassIcon} className={styles.icon} />
          {onClear && !!value && (
            <span className={styles.clear}>
              <Button
                id={clearButtonId}
                data-testid="clear-button"
                size="xs"
                rounded
                icon
                variant="tinted"
                className={styles.clearButton}
                onClick={() => {
                  onClear?.();
                  document.getElementById(inputId)?.focus();
                }}
                aria-label={clearButtonAltText}
                data-action="clear-input"
              >
                <XMarkIcon />
              </Button>
            </span>
          )}
        </div>
      </FieldBase>
      {menu && showMenu && (
        <div className={styles.autocomplete} aria-hidden={!showMenu} onMouseDown={handleMenuPointerDown}>
          <Menu
            {...menu}
            id={listId}
            items={menuItemsWithToggle}
            groups={menu?.groups}
            keyboardEvents
            a11yMode="combobox"
            open={showMenu}
            autoFocusList={false}
            onActiveItemIdChange={setActiveDescendantId}
          />
        </div>
      )}
    </div>
  );
};
