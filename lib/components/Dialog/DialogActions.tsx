'use client';
import { ChevronDownIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { useMemo, useState } from 'react';
import { Button, ComboButton, DropdownBase, Menu, type MenuItemProps } from '..';
import styles from './dialogAction.module.css';

export type DialogButtonPriority = 'primary' | 'secondary' | 'tertiary';

export interface DialogActionButtonProps {
  id: string;
  priority: DialogButtonPriority;
  label?: string;
  onClick?: () => void;
  loading?: boolean;
}

export interface DialogActionsProps {
  /** List of actions */
  items: DialogActionButtonProps[];
  /** How many actions to display before turning into a ComboButton */
  maxItems?: number;
}

export const DialogActions = ({ items, maxItems = 2 }: DialogActionsProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const sortedItems = useMemo(() => {
    return (items || []).sort((a, b) => {
      const priorityOrder = ['primary', 'secondary', 'tertiary'];
      return priorityOrder.indexOf(a?.priority) - priorityOrder.indexOf(b?.priority);
    });
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
    }));
    return (
      <section className={styles.comboButton}>
        <ComboButton
          variant="solid"
          icon={expanded ? ChevronUpIcon : ChevronDownIcon}
          size="lg"
          onIconClick={() => setExpanded((expanded) => !expanded)}
          ariaLabel={expanded ? 'chevron up icon' : 'chevron down icon'}
        >
          {sortedItems[0].label}
        </ComboButton>
        <DropdownBase open={expanded}>
          <Menu items={remainingItems} />
        </DropdownBase>
      </section>
    );
  }

  return (
    <section className={styles.action}>
      {sortedItems.map((item, index) => {
        return (
          <Button
            key={'button-' + index}
            onClick={item.onClick}
            variant={item.priority === 'primary' ? 'solid' : 'outline'}
            size="lg"
            loading={item.loading}
          >
            {item.label}
          </Button>
        );
      })}
    </section>
  );
};
