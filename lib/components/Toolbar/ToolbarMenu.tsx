import { ChevronUpDownIcon } from '@navikt/aksel-icons';
import { Button, type ButtonProps } from '../Button';
import { Dropdown, type DropdownProps } from '../Dropdown';
import { Menu, type MenuItemProps, type MenuProps } from '../Menu/';
import { useDropdownMenuController } from '../Menu/useDropdownMenuController.tsx';

export interface ToolbarMenuProps extends Omit<MenuProps, 'variant'> {
  title?: string;
  label?: string;
  variant?: ButtonProps['variant'];
  dropdownSize?: DropdownProps['size'];
  onSelectId?: (id: string) => void;
}

export const ToolbarMenu = ({
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
  const selectableItems = items.map((item: MenuItemProps) => {
    return {
      ...item,
      onClick: () => {
        onSelectId?.(item?.id ?? '');
        item?.role !== 'checkbox' && ctrl.setOpen(false);
      },
    };
  });

  return (
    <Dropdown
      id={id}
      variant="drawer-dropdown"
      title={title}
      size={dropdownSize}
      trigger={
        <Button
          variant={variant}
          onClick={ctrl.toggleMenu}
          aria-expanded={ctrl.open}
          aria-haspopup="menu"
          aria-controls={ctrl.open ? ctrl.menuId : undefined}
          ref={ctrl.triggerRef as React.Ref<HTMLButtonElement>}
        >
          <span>{label}</span>
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
  );
};
