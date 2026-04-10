import { MenuElipsisHorizontalIcon } from '@navikt/aksel-icons';
import { useMemo } from 'react';
import { Button } from '../Button';
import { Dropdown, type DropdownProps } from '../Dropdown';
import { Menu, type MenuItemColor, type MenuProps } from '../Menu';
import { useDropdownMenuController } from '../Menu/useDropdownMenuController.tsx';
import { useRootContext } from '../RootProvider';
import { Tooltip } from '../Tooltip';

export interface ContextMenuProps extends MenuProps {
  id?: string;
  title?: string;
  placement?: DropdownProps['placement'];
  'aria-label'?: string;
  color?: MenuItemColor;
}

export const ContextMenu = ({
  groups = {},
  items,
  title,
  color,
  id = 'context-menu',
  placement = 'right',
  'aria-label': ariaLabel,
}: ContextMenuProps) => {
  const ctrl = useDropdownMenuController({ id, returnFocusOnClose: true });
  const { languageCode } = useRootContext();
  const itemsWithToggle = useMemo(() => {
    return items.map((item) => ({
      ...item,
      onClick: () => {
        ctrl.setOpen(false);
        item.onClick?.();
      },
    }));
  }, [items, ctrl]);

  const ContextMenuButton = () => {
    return (
      <Tooltip content={title || getTexts(languageCode).title} hidden={ctrl.open}>
        <Button
          ref={ctrl.triggerRef as React.Ref<HTMLButtonElement>}
          icon
          variant="ghost"
          rounded
          size="xs"
          aria-label={ariaLabel}
          onClick={() => ctrl.toggleMenu()}
          aria-haspopup="menu"
          aria-expanded={ctrl.open}
          aria-controls={ctrl.open ? ctrl.menuId : undefined}
          color={color}
        >
          <MenuElipsisHorizontalIcon aria-hidden="true" />
        </Button>
      </Tooltip>
    );
  };

  return (
    <Dropdown
      backdrop={false}
      color={color}
      trigger={<ContextMenuButton />}
      open={ctrl.open}
      onClose={() => ctrl.setOpen(false)}
      id={ctrl.menuId}
      placement={placement}
      useFixedPosition={true}
      {...ctrl.dropdownA11yProps}
    >
      <Menu groups={groups} items={itemsWithToggle} maxLevels={1} keyboardEvents={ctrl.open} {...ctrl.menuA11yProps} />
    </Dropdown>
  );
};

// TODO: Move to a common texts files when i18next is added
// This is only a temporary solution for providing texts in different languages in a very simple POC
const getTexts = (languageCode: string | undefined) => {
  switch (languageCode) {
    case 'nb':
      return {
        title: 'Åpne meny',
      };
    case 'nn':
      return {
        title: 'Opne meny',
      };
    default:
      return {
        title: 'Open menu',
      };
  }
};
