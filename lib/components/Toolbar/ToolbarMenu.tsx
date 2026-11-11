import { ChevronUpDownIcon } from '@navikt/aksel-icons';
import { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { Button, type ButtonProps } from '../Button';
import { Dropdown, type DropdownProps } from '../Dropdown';
import { Menu, type MenuItemProps, type MenuProps } from '../Menu/';
import { useDropdownMenuController } from '../Menu/useDropdownMenuController.tsx';
import styles from './toolbarMenu.module.css';

export interface ToolbarMenuProps extends Omit<MenuProps, 'variant'> {
  disabled?: boolean;
  title?: string;
  /** Advisory text set as the native HTML `title` attribute (tooltip) on the trigger button. */
  htmlTitle?: string;
  label?: string;
  variant?: ButtonProps['variant'];
  dropdownSize?: DropdownProps['size'];
  onSelectId?: (id: string) => void;
  /** Called when the menu opens or closes, e.g. to fetch items lazily on first open */
  onOpenChange?: (open: boolean) => void;
}

export const ToolbarMenu = memo(
  ({
    disabled,
    label,
    variant = 'solid',
    title,
    htmlTitle,
    items = [],
    dropdownSize = 'sm',
    id = 'toolbar-menu',
    onSelectId,
    onOpenChange,
    ...props
  }: ToolbarMenuProps) => {
    const a11yMode = props.searchable ? 'combobox' : 'listbox';
    const ctrl = useDropdownMenuController({
      id,
      popup: props.searchable ? 'dialog' : 'listbox',
      variant: 'drawer-dropdown',
    });
    const prevOpenRef = useRef(ctrl.open);

    useEffect(() => {
      if (prevOpenRef.current === ctrl.open) return;
      prevOpenRef.current = ctrl.open;
      onOpenChange?.(ctrl.open);
    }, [ctrl.open, onOpenChange]);
    const handleSelect = useCallback(
      (item: MenuItemProps) => {
        onSelectId?.(item?.id ?? '');
        item?.role !== 'checkbox' && ctrl.setOpen(false);
      },
      [onSelectId, ctrl],
    );
    const selectableItems = useMemo(
      () =>
        items.map((item: MenuItemProps) => ({
          ...item,
          onClick: () => handleSelect(item),
        })),
      [items, handleSelect],
    );

    if (disabled) {
      return (
        <Button className={styles.button} variant={variant} title={htmlTitle} disabled>
          <span className={styles.label}>{label}</span>
          <ChevronUpDownIcon aria-hidden="true" focusable="false" />
        </Button>
      );
    }

    return (
      <span className={styles.menu}>
        <Dropdown
          {...ctrl.dropdownProps}
          title={title ?? label}
          size={dropdownSize}
          trigger={
            <Button
              className={styles.button}
              variant={variant}
              title={htmlTitle}
              onClick={ctrl.toggleMenu}
              {...ctrl.triggerProps}
              ref={ctrl.triggerRef as React.Ref<HTMLButtonElement>}
            >
              {title && title !== label && <span className="ds-sr-only">{title}: </span>}
              <span className={styles.label}>{label}</span>
              <ChevronUpDownIcon aria-hidden="true" focusable="false" />
            </Button>
          }
          open={ctrl.open}
          onClose={() => ctrl.setOpen(false)}
        >
          <Menu
            {...props}
            items={selectableItems}
            keyboardEvents={ctrl.open}
            a11yMode={a11yMode}
            open={ctrl.open}
            scrollToTopOnOpen
            {...ctrl.listProps}
            aria-label={title}
          />
        </Dropdown>
      </span>
    );
  },
);
