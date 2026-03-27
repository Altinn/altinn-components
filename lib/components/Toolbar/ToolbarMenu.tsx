import { ChevronUpDownIcon } from '@navikt/aksel-icons';
import { useCallback, useMemo } from 'react';
import { Button, type ButtonProps } from '../Button';
import { Dropdown, type DropdownProps } from '../Dropdown';
import { Menu, type MenuItemProps, type MenuProps } from '../Menu/';
import { useDropdownMenuController } from '../Menu/useDropdownMenuController.tsx';
import styles from './toolbarMenu.module.css';

export interface ToolbarMenuProps extends Omit<MenuProps, 'variant'> {
  disabled?: boolean;
  title?: string;
  label?: string;
  variant?: ButtonProps['variant'];
  dropdownSize?: DropdownProps['size'];
  onSelectId?: (id: string) => void;
}

export const ToolbarMenu = ({
  disabled,
  label = 'Label',
  variant = 'solid',
  title = 'Title',
  items = [],
  dropdownSize = 'sm',
  id = 'toolbar-menu',
  onSelectId,
  ...props
}: ToolbarMenuProps) => {
  const ctrl = useDropdownMenuController({ id, returnFocusOnClose: true });
  const a11yMode = props.searchable ? 'combobox' : 'menu';
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
      <Button className={styles.button} variant={variant} disabled>
        <span className={styles.label}>{label}</span>
        <ChevronUpDownIcon aria-hidden="true" focusable="false" />
      </Button>
    );
  }

  return (
    <span className={styles.menu}>
      <Dropdown
        id={id}
        variant="drawer-dropdown"
        title={title}
        size={dropdownSize}
        trigger={
          <Button
            className={styles.button}
            variant={variant}
            onClick={ctrl.toggleMenu}
            aria-expanded={ctrl.open}
            aria-haspopup="menu"
            aria-controls={ctrl.open ? ctrl.menuId : undefined}
            ref={ctrl.triggerRef as React.Ref<HTMLButtonElement>}
          >
            <span className={styles.label}>{label}</span>
            <ChevronUpDownIcon aria-hidden="true" focusable="false" />
          </Button>
        }
        open={ctrl.open}
        onClose={() => ctrl.setOpen(false)}
        {...(props?.searchable ? {} : ctrl.dropdownA11yProps)}
      >
        <Menu
          {...props}
          items={selectableItems}
          keyboardEvents={ctrl.open}
          a11yMode={a11yMode}
          open={ctrl.open}
          scrollToTopOnOpen={props.virtualized}
          {...(a11yMode === 'combobox' ? { id: ctrl.menuId } : ctrl.menuA11yProps)}
        />
      </Dropdown>
    </span>
  );
};
