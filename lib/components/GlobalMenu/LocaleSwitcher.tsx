'use client';
import { ArrowUndoIcon, CheckmarkIcon } from '@navikt/aksel-icons';
import { useMemo } from 'react';
import { type MenuItemProps, MenuItems, type MenuOptionProps } from '../Menu';
import { useRootContext } from '../RootProvider';
import { getCommonTexts } from '../RootProvider/commonTexts.ts';

export interface LocaleSwitcherProps {
  title?: string;
  options: MenuOptionProps[];
  onSelect?: (value: string) => void;
  backLabel?: string;
  onToggle?: () => void;
}

/** Buttons, not radios, since picking one applies it and closes the menu. */
export const LocaleSwitcher = ({ title, options, onSelect, onToggle, backLabel }: LocaleSwitcherProps) => {
  const { closeAll, languageCode } = useRootContext();

  const selectedValue = useMemo(() => {
    const checkedOption = options.find((option) => option.checked);
    return checkedOption?.value ?? options[0]?.value;
  }, [options]);

  const languageItems = useMemo(() => {
    return options.map(({ type: _type, checked: _checked, name: _name, value, ...item }): MenuItemProps => {
      const isCurrent = value === selectedValue;
      return {
        ...item,
        id: String(value),
        groupId: 'locales',
        selected: isCurrent,
        'aria-current': isCurrent ? 'true' : undefined,
        icon: isCurrent ? CheckmarkIcon : ((<span aria-hidden="true" />) as MenuItemProps['icon']),
        onClick: () => {
          onSelect?.(String(value));
          closeAll();
        },
      };
    });
  }, [options, onSelect, closeAll, selectedValue]);

  const group = {
    locales: { title: title || getCommonTexts(languageCode).selectLanguage },
  };

  return (
    <div data-testid="locale-switcher">
      <MenuItems
        variant="default"
        a11yMode="navigation"
        groups={group}
        items={[
          { onClick: onToggle, label: backLabel, as: 'button', icon: ArrowUndoIcon, id: 'back' },
          ...languageItems,
        ]}
      />
    </div>
  );
};
