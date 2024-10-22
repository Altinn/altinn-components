import type {MouseEventHandler} from 'react';
import {ToolbarButton} from './ToolbarButton';
import {Menu} from '../Menu';
import styles from './toolbar.module.css';

interface ToolbarAddItem {
    label: string;
    name: string;
    onClick: MouseEventHandler;
}

export interface ToolbarAddProps {
  items: ToolbarAddItem[];
  expanded: boolean;
  onToggle?: MouseEventHandler;
  label?: string;
  className?: string;
}

export const ToolbarAdd = ({ expanded = false, onToggle, label = 'Legg til', items }: ToolbarAddProps) => {
  return (
    <div className={styles.toggle}>
      <ToolbarButton as="div" type="add" onToggle={onToggle}>
        {label}
      </ToolbarButton>
      <div aria-expanded={expanded} className={styles?.dropdown}>
        <Menu
          theme="global"
          color="subtle"
          items={items}
        />
      </div>
    </div>
  );
};
