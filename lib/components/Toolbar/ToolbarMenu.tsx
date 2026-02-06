import { ChevronUpDownIcon } from '@navikt/aksel-icons';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Menu, type MenuItemProps, type MenuProps } from '../Menu/';
import { useDropdownMenuController } from '../Menu/useDropdownMenuController.tsx';

export interface ToolbarMenuProps extends MenuProps {
  title?: string;
  label?: string;
  onSelectId?: (id: string) => void;
}

export const ToolbarMenu = ({
  title = 'Title',
  label = 'Label',
  items = [],
  onSelectId,
  ...props
}: ToolbarMenuProps) => {
  const ctrl = useDropdownMenuController({ id: 'toolbar-menu', returnFocusOnClose: true });
  const a11yMode = props.searchable ? 'combobox' : 'menu';
  const selectableItems = items.map((item: MenuItemProps) => {
    return {
      ...item,
      onClick: () => {
        onSelectId?.(item?.id ?? '');
        ctrl.setOpen(false);
      },
    };
  });

  return (
    <Dropdown
      id="toolbar-menu"
      variant="drawer-dropdown"
      title={title}
      trigger={
        <Button
          variant="primary"
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
