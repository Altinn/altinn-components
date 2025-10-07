import {
  ListItemBase,
  type ListItemBaseProps,
  ListItemHeader,
  type ListItemHeaderProps,
  ListItemLabel,
  type ListItemLabelProps,
  getAriaLabelFromTitle,
} from '..';

import styles from './settingsItemBase.module.css';

export interface SettingsItemBaseProps extends ListItemBaseProps, ListItemHeaderProps {
  id?: string;
  groupId?: string;
  collapsible?: boolean;
  expanded?: boolean;
  icon?: ListItemHeaderProps['icon'];
  label?: ListItemHeaderProps['children'];
  title?: ListItemLabelProps['title'];
  value?: ListItemLabelProps['value'];
  description?: ListItemLabelProps['description'];
}

export const SettingsItemBase = ({
  loading,
  color,
  size,
  expanded,
  icon,
  label,
  title,
  value,
  description,
  children,
  highlightWords,
  ...props
}: SettingsItemBaseProps) => {
  const ariaLabel = props.ariaLabel || getAriaLabelFromTitle(title);

  return (
    <ListItemBase className={styles.item} color={color} size={size} expanded={expanded}>
      <ListItemHeader {...props} loading={loading} ariaLabel={ariaLabel} className={styles.header} icon={icon}>
        <ListItemLabel
          loading={loading}
          highlightWords={highlightWords}
          className={styles.label}
          title={title}
          value={value}
          description={description}
        >
          {label}
        </ListItemLabel>
      </ListItemHeader>
      {expanded && children}
    </ListItemBase>
  );
};
