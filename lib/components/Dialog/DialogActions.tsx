'use client';
import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { useMemo } from 'react';
import { Button, type ButtonProps, ComboButton, DropdownBase, Menu, type MenuItemProps, useRootContext } from '..';
import styles from './dialogAction.module.css';

export type DialogButtonPriority = 'primary' | 'secondary' | 'tertiary';

export interface DialogActionButtonProps extends ButtonProps {
  id: string;
  priority: DialogButtonPriority;
  onClick?: () => void;
}

export interface DialogActionsProps {
  /** List of actions */
  items: DialogActionButtonProps[];
  /** How many actions to display before turning into a ComboButton */
  maxItems?: number;
  /** Unique id for the dialog if multiple DialogAction are needed */
  id?: string;
  expandAltLabel?: string;
}

export const DialogActions = ({ items, maxItems = 2, id = 'dialog-actions', expandAltLabel }: DialogActionsProps) => {
  const { currentId, closeAll, toggleId } = useRootContext();
  const expanded = currentId === id;

  const sortedItems = useMemo(() => {
    return (items || [])
      .filter((item) => !item.hidden)
      .sort((a, b) => {
        const priorityOrder = ['primary', 'secondary', 'tertiary'];
        return priorityOrder.indexOf(a?.priority) - priorityOrder.indexOf(b?.priority);
      });
  }, [items]);

  const isDisabled = useMemo(() => {
    return items.find((i) => i.priority === 'primary')?.disabled;
  }, [items]);

  if (!sortedItems.length || maxItems <= 0) {
    return null;
  }

  if (sortedItems.length > maxItems) {
    const remainingItems: MenuItemProps[] = sortedItems.slice(1).map((item) => ({
      id: item.id,
      title: item.label,
      onClick: item.onClick,
      group: item.priority,
      hidden: item.hidden,
    }));
    return (
      <section className={styles.comboButton}>
        <ComboButton
          variant="solid"
          icon={expanded ? ChevronUpIcon : ChevronDownIcon}
          size="md"
          onIconClick={() => toggleId(id)}
          onLabelClick={sortedItems[0].onClick}
          ariaLabel={expanded ? 'chevron up icon' : 'chevron down icon'}
          iconAltText={expandAltLabel}
          disabled={isDisabled}
        >
          {sortedItems[0].label}
        </ComboButton>
        {expanded && (
          <DropdownBase open={expanded} onClose={closeAll}>
            <Menu items={remainingItems} />
          </DropdownBase>
        )}
      </section>
    );
  }

  return (
    <section className={styles.action}>
      {sortedItems.map((item, index) => {
        const { priority, id: _, ...props } = item;
        return (
          <Button key={'button-' + index} variant={priority === 'primary' ? 'solid' : 'outline'} size="md" {...props}>
            {item.label}
          </Button>
        );
      })}
    </section>
  );
};
