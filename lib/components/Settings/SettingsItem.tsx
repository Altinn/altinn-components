import {
  Heading,
  ListItemBase,
  type ListItemBaseProps,
  ListItemHeader,
  type ListItemHeaderProps,
  ListItemLabel,
} from '..';

import styles from './settingsItem.module.css';

export interface SettingsItemProps extends ListItemBaseProps, ListItemHeaderProps {
  id?: string;
  collapsible?: boolean;
  expanded?: boolean;
  icon?: ListItemHeaderProps['icon'];
  label?: ListItemHeaderProps['children'];
  value?: string | number;
  title?: string;
  description?: string;
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
  ...item
}: SettingsItemProps) => {
  return (
    <ListItemBase className={styles.item} color={color} size={size} expanded={expanded}>
      <ListItemHeader ariaLabel={title} {...item} className={styles.header} icon={icon}>
        <ListItemLabel className={styles.label}>
          {title && value ? (
            <>
              <Heading as="h3" size="xs" variant="subtle" weight="normal">
                {title}
              </Heading>
              <Heading weight="normal" size="sm">
                {value}
              </Heading>
            </>
          ) : title ? (
            <>
              <Heading weight="normal" size="sm">
                {title || value}
              </Heading>
              {description && (
                <Heading as="h3" size="xs" variant="subtle" weight="normal">
                  {description}
                </Heading>
              )}
            </>
          ) : (
            label
          )}
        </ListItemLabel>
      </ListItemHeader>
      {expanded && children}
    </ListItemBase>
  );
};
