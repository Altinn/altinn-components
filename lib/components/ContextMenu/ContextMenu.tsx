import { MenuElipsisHorizontalIcon } from '@navikt/aksel-icons';
import { useEffect, useId, useMemo, useRef } from 'react';
import { Button } from '../Button';
import { Dropdown, type DropdownProps } from '../Dropdown';
import { Menu, type MenuItemColor, type MenuProps } from '../Menu';
import { useDropdownMenuController } from '../Menu/useDropdownMenuController.tsx';
import { useRootContext } from '../RootProvider';
import { Tooltip } from '../Tooltip';

export interface ContextMenuProps extends MenuProps {
  id?: string;
  /** Tooltip on the button. Default «Åpne meny». */
  title?: string;
  /** What the menu belongs to, added to the button name: «Åpne meny: Skattemelding 2024». */
  label?: string;
  placement?: DropdownProps['placement'];
  'aria-label'?: string;
  color?: MenuItemColor;
}

export const ContextMenu = ({
  groups = {},
  items,
  title,
  label,
  color,
  id = 'context-menu',
  placement = 'right',
  'aria-label': ariaLabel,
}: ContextMenuProps) => {
  const ctrl = useDropdownMenuController({ id, popup: 'menu' });
  const { languageCode } = useRootContext();
  const triggerName = title || getTexts(languageCode).title;
  /** The tooltip sets aria-label, so the full name is given with aria-labelledby. */
  const fullName = ariaLabel ?? (label ? `${triggerName}: ${label}` : undefined);
  const nameId = useId();

  const prevOpenRef = useRef(ctrl.open);
  useEffect(() => {
    const wasOpen = prevOpenRef.current;
    prevOpenRef.current = ctrl.open;
    if (!wasOpen || ctrl.open) return;
    const trigger = ctrl.triggerRef.current;
    const tooltip = trigger?.getAttribute('data-tooltip');
    if (!trigger || tooltip == null) return;
    trigger.removeAttribute('data-tooltip');
    const raf = requestAnimationFrame(() => trigger.setAttribute('data-tooltip', tooltip));
    return () => cancelAnimationFrame(raf);
  }, [ctrl.open, ctrl.triggerRef]);

  const itemsWithToggle = useMemo(() => {
    return items.map((item) => ({
      ...item,
      onClick: () => {
        ctrl.setOpen(false);
        item.onClick?.();
      },
    }));
  }, [items, ctrl]);

  return (
    <Dropdown
      backdrop={false}
      color={color}
      trigger={
        <Tooltip content={ctrl.open ? '' : triggerName}>
          <Button
            ref={ctrl.triggerRef as React.Ref<HTMLButtonElement>}
            icon
            variant="ghost"
            rounded
            size="xs"
            aria-label={ctrl.open && !fullName ? triggerName : undefined}
            aria-labelledby={fullName ? nameId : undefined}
            onClick={() => ctrl.toggleMenu()}
            {...ctrl.triggerProps}
            color={color}
          >
            <MenuElipsisHorizontalIcon aria-hidden="true" />
            {fullName && (
              <span id={nameId} className="ds-sr-only">
                {fullName}
              </span>
            )}
          </Button>
        </Tooltip>
      }
      open={ctrl.open}
      onClose={() => ctrl.setOpen(false)}
      placement={placement}
      {...ctrl.dropdownProps}
    >
      <Menu
        groups={groups}
        items={itemsWithToggle}
        maxLevels={1}
        keyboardEvents={ctrl.open}
        a11yMode="menu"
        {...ctrl.listProps}
      />
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
