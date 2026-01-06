import { MenuElipsisHorizontalIcon } from '@navikt/aksel-icons';
import { useState } from 'react';
import { Button } from '../ButtonV2/Button';
import { Dropdown, type DropdownProps } from './Dropdown';
import { Menu, type MenuProps } from './Menu';
import { Tooltip } from './Tooltip';

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
        <Button
          variant="tertiary"
          rounded
          size="xs"
          aria-label={title}
          onClick={() => setOpen(!open)}
          style={{ padding: 0 }}
        >
          <MenuElipsisHorizontalIcon style={{ width: '1.25rem', height: '1.25rem' }} />
        </Button>
      </Tooltip>
    );
  };

  return (
    <Dropdown trigger={<ContextMenuButton />} open={open} onClose={() => setOpen(false)} id={id} placement={placement}>
      <Menu groups={groups} items={items} maxLevels={1} />
    </Dropdown>
  );
};
