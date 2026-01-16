import { MenuElipsisHorizontalIcon } from '@navikt/aksel-icons';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Dropdown, type DropdownProps } from '../Dropdown/Dropdown';
import { Tooltip } from '../Tooltip/Tooltip';
import { Menu, type MenuProps } from './Menu';

export interface ContextMenuProps extends MenuProps {
  id?: string;
  title?: string;
  placement?: DropdownProps['placement'];
}

export const ContextMenu = ({ groups = {}, items, title = 'Åpne meny', id, placement = 'right' }: ContextMenuProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const ContextMenuButton = () => {
    return (
      <Tooltip content={title} hidden={open}>
        <Button icon variant="ghost" rounded size="xs" aria-label={title} onClick={() => setOpen(!open)}>
          <MenuElipsisHorizontalIcon />
        </Button>
      </Tooltip>
    );
  };

  return (
    <Dropdown
      backdrop={false}
      trigger={<ContextMenuButton />}
      open={open}
      onClose={() => setOpen(false)}
      id={id}
      placement={placement}
    >
      <Menu groups={groups} items={items} maxLevels={1} keyboardEvents={true} />
    </Dropdown>
  );
};
