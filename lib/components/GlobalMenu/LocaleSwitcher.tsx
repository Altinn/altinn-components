'use client';
import { CheckmarkIcon } from '@navikt/aksel-icons';
import { useMemo, useRef } from 'react';
import { useEnterKey } from '../../hooks/useEnterKey.ts';
import { type MenuItemProps, MenuItems, type MenuOptionProps } from '../Menu';
import { useRootContext } from '../RootProvider';

export interface LocaleSwitcherProps {
  title?: string;
  options: MenuOptionProps[];
  onSelect?: (value: string) => void;
}

export const LocaleSwitcher = ({ title = 'Select language', options, onSelect }: LocaleSwitcherProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { currentId, closeAll } = useRootContext();
  const expanded = currentId === 'locale';

  const selectedValue = useMemo(() => {
    const checkedOption = options.find((option) => option.checked);
    return checkedOption?.value ?? options[0]?.value;
  }, [options]);

  const itemsWithToggle = useMemo(() => {
    return options.map((item) => {
      const isChecked = item.value === selectedValue;
      return {
        ...item,
        id: String(item.value),
        tabIndex: 0,
        groupId: 'locales',
        role: 'radio',
        name: 'locale',
        checked: isChecked,
        icon: isChecked ? CheckmarkIcon : ((<span aria-hidden="true" />) as MenuItemProps['icon']),
        onClick: () => {
          onSelect?.(String(item.value));
          closeAll();
        },
      };
    });
  }, [options, onSelect, closeAll, selectedValue]);

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

  return (
    <div ref={ref} data-testid="locale-switcher" role="radiogroup">
      <MenuItems groups={group} items={itemsWithToggle} keyboardEvents={false} />
    </div>
  );
};
