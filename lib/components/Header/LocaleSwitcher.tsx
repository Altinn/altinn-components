'use client';
import { CheckmarkIcon } from '@navikt/aksel-icons';
import { useMemo, useRef } from 'react';
import { useEnterKey } from '../../hooks/useEnterKey.ts';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';
import { DrawerBase, DropdownBase } from '../Dropdown';
import { type MenuItemProps, MenuItems, type MenuOptionProps } from '../Menu';
import { useRootContext } from '../RootProvider';
import { LocaleButton } from './LocaleButton.tsx';

export interface LocaleSwitcherProps {
  title?: string;
  options: MenuOptionProps[];
  onSelect?: (value: string) => void;
}

export const LocaleSwitcher = ({ title = 'Select language', options, onSelect }: LocaleSwitcherProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const { currentId, toggleId, closeAll } = useRootContext();
  const expanded = currentId === 'locale';

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const itemsWithToggle = useMemo(() => {
    return options.map((item) => {
      return {
        ...item,
        id: String(item.value),
        tabIndex: -1,
        groupId: 'locales',
        icon: item.checked ? CheckmarkIcon : ((<span aria-hidden="true" />) as MenuItemProps['icon']),
        onClick: () => {
          onSelect?.(String(item.value));
          closeAll();
        },
      };
    });
  }, [options, onSelect]);

  const group = {
    locales: { title: title || 'Språk/language' },
  };

  useEnterKey((e) => {
    if (expanded) {
      e.preventDefault();
      const activeItem = ref.current?.querySelector('[data-active="true"]') as HTMLElement | null;
      if (activeItem) {
        const isLink = activeItem.tagName === 'A' && activeItem.hasAttribute('href');
        if (!isLink) {
          activeItem.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        } else {
          activeItem.click();
        }
      }
      closeAll();
    }
  });

  const onBlurCapture = (e: React.FocusEvent<HTMLButtonElement>) => {
    const contextMenuParent = e?.relatedTarget?.closest(`[data-testid="locale-switcher"]`);
    if (!contextMenuParent) {
      closeAll();
    }
  };

  return (
    <div ref={ref} data-testid="locale-switcher">
      <LocaleButton onClick={() => toggleId('locale')} expanded={expanded} onBlurCapture={onBlurCapture} />
      {expanded && isDesktop && (
        <DropdownBase layout="desktop" padding placement="right" open>
          <MenuItems groups={group} items={itemsWithToggle} keyboardEvents />
        </DropdownBase>
      )}
      {expanded && !isDesktop && (
        <DrawerBase open placement="bottom">
          <MenuItems groups={group} items={itemsWithToggle} keyboardEvents />
        </DrawerBase>
      )}
    </div>
  );
};
