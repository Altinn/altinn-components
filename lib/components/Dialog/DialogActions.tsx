'use client';
import { useMemo, useState } from 'react';
import { Button, ComboButton } from '../Button';
import { Menu, type MenuItemProps } from '../Menu';
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
          color="primary"
          variant="solid"
          icon={expanded ? 'chevron-up' : 'chevron-down'}
          size="lg"
          onIconClick={() => setExpanded((expanded) => !expanded)}
        >
          {sortedItems[0].label}
        </ComboButton>
        <div className={styles.dropdown} aria-expanded={expanded}>
          <Menu items={remainingItems} theme="global" />
        </div>
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
            color="primary"
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
