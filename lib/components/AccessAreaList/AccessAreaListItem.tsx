import type { SvgElement } from '../Icon';
import { ListItem } from '../List';
import type { ListItemProps } from '../List';
import styles from './accessAreaListItem.module.css';

export interface AccessAreaListItemProps extends Pick<ListItemProps, 'size' | 'onClick' | 'expanded'> {
  id: string;
  name: string;
  icon: SvgElement;
  children?: React.ReactNode;
}

export const AccessAreaListItem = ({
  name,
  icon,
  size = 'md',
  children,
  expanded = false,
  onClick,
  ...props
}: AccessAreaListItemProps) => {
  return (
    <ListItem
      as="button"
      icon={icon}
      title={name}
      size={size}
      collapsible={true}
      expanded={expanded}
      onClick={onClick}
      {...props}
    >
      {expanded && <div className={styles.content}>{children}</div>}
    </ListItem>
  );
};
