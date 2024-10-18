import { ToolbarButton } from './ToolbarButton';
import { Menu, type MenuItemProps } from '../Menu';
import styles from './toolbar.module.css';

export interface FilterMenuProps {
  label: string;
  value: string | number;
  items: MenuItemProps[];
  className: string;
}

export const ToolbarAdd = ({ label = 'Legg til', value, items }: FilterMenuProps) => {
  return (
    <div>
      <ToolbarButton as="div" type="add" value={value}>
        {label}
      </ToolbarButton>
      <div className={styles?.dropdown}>
        <Menu theme="global" color="subtle" items={items} />
      </div>
    </div>
  );
};
