import { DrawerOrDropdown, useRootContext } from '../';
import { AccountMenu, type AccountMenuProps } from '../';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';
import { ToolbarButton } from './ToolbarButton';
import { ToolbarFilterBase } from './ToolbarFilterBase';

export interface ToolbarAccountMenuProps extends AccountMenuProps {
  id?: string;
  isVirtualized?: boolean;
  buttonTestId?: string;
}

export const ToolbarAccountMenu = ({
  currentAccount,
  id = 'toolbar-accounts',
  onSelectAccount,
  buttonTestId,
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
    <ToolbarFilterBase expanded={expanded} onBlurCapture={onBlurCapture} dataTestId={'filter-base-accounts'}>
      <ToolbarButton
        type="switch"
        onToggle={onToggle}
        active={!!currentAccount}
        dataTestId={buttonTestId}
        aria-expanded={expanded}
      >
        {currentAccount?.name}
      </ToolbarButton>
      <DrawerOrDropdown open={expanded} size="lg" drawerTitle="Endre konto" onClose={closeAll}>
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
