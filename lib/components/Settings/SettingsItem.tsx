import {
  ListItemBase,
  type ListItemBaseProps,
  ListItemHeader,
  type ListItemHeaderProps,
  ListItemLabel,
  type ListItemLabelProps,
  getAriaLabelFromTitle,
} from '..';

import styles from './settingsItem.module.css';

export interface SettingsItemProps extends ListItemBaseProps, ListItemHeaderProps {
  id?: string;
  groupId?: string;
  collapsible?: boolean;
  expanded?: boolean;
  label?: ListItemHeaderProps['children'];
  title?: ListItemLabelProps['title'];
  value?: ListItemLabelProps['value'];
  description?: ListItemLabelProps['description'];
}

export const SettingsItem = ({
  color,
  size,
  expanded,
  icon,
  label,
  title,
  value,
  description,
  children,
  ...props
}: SettingsItemProps) => {
  const ariaLabel = props.ariaLabel || getAriaLabelFromTitle(title);

  return (
    <ListItemBase className={styles.item} color={color} size={size} expanded={expanded}>
      <ListItemHeader {...props} ariaLabel={ariaLabel} className={styles.header} icon={icon}>
        <ListItemLabel className={styles.label} title={title} value={value} description={description}>
          {label}
        </ListItemLabel>
      </ListItemHeader>
      {expanded && children}
    </ListItemBase>
  );
};
