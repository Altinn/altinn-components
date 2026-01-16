import { DrawerOrDropdown, useRootContext } from '../';
import { AccountMenu, type AccountMenuProps } from '../';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';
import { ToolbarButton } from './ToolbarButton';
import { ToolbarFilterBase } from './ToolbarFilterBase';

export interface ToolbarAccountMenuProps extends AccountMenuProps {
  id?: string;
  isVirtualized?: boolean;
  buttonTestId?: string;
  title?: string;
}

export const ToolbarAccountMenu = ({
  currentAccount,
  id = 'toolbar-accounts',
  onSelectAccount,
  buttonTestId,
  title = 'Endre aktør',
  ...rest
}: ToolbarAccountMenuProps) => {
  const { currentId, toggleId, closeAll } = useRootContext();
  const isDesktop = useIsDesktop();
  const onToggle = () => toggleId(id);
  const expanded = currentId === id;

  const onBlurCapture = (e: React.FocusEvent<HTMLElement>) => {
    const nextFocused = e.relatedTarget as HTMLElement | null;
    if (!nextFocused || !e.currentTarget.contains(nextFocused)) {
      closeAll();
    }
  };

  return (
    <ToolbarFilterBase expanded={expanded} onBlurCapture={onBlurCapture} data-testid={'filter-base-accounts'}>
      <ToolbarButton
        type="switch"
        onToggle={onToggle}
        active={!!currentAccount}
        data-testid={buttonTestId}
        aria-expanded={expanded}
      >
        {currentAccount?.name}
      </ToolbarButton>
      <DrawerOrDropdown open={expanded} size="lg" drawerTitle={title} onClose={closeAll}>
        <AccountMenu
          {...rest}
          keyboardEvents={expanded && isDesktop}
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
