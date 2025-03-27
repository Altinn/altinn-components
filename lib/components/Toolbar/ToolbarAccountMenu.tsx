import { DrawerOrDropdown, useRootContext } from '../';
import { AccountMenu, type AccountMenuProps } from '../';
import { ToolbarButton } from './ToolbarButton';
import { ToolbarFilterBase } from './ToolbarFilterBase';

export interface ToolbarAccountMenuProps extends AccountMenuProps {
  id?: string;
  isVirtualized?: boolean;
}

export const ToolbarAccountMenu = ({
  currentAccount,
  id = 'toolbar-accounts',
  onSelectAccount,
  ...rest
}: ToolbarAccountMenuProps) => {
  const { currentId, toggleId, closeAll } = useRootContext();
  const onToggle = () => toggleId(id);
  const expanded = currentId === id;

  return (
    <ToolbarFilterBase expanded={expanded}>
      <ToolbarButton type="switch" onToggle={onToggle} active={!!currentAccount}>
        {currentAccount?.name}
      </ToolbarButton>
      <DrawerOrDropdown open={expanded} drawerTitle="Endre konto" onClose={closeAll}>
        <AccountMenu
          {...rest}
          key={currentId}
          onSelectAccount={(id: string) => {
            onSelectAccount?.(id);
            closeAll();
          }}
          currentAccount={currentAccount}
        />
      </DrawerOrDropdown>
    </ToolbarFilterBase>
  );
};
