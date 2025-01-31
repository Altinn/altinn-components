import { ReactNode } from 'react';
import { ListItem, type ListItemProps, Section, Typography, type ListItemSize, type IconName, type BadgeProps } from '../../../components';

export interface AccessAreaItemProps extends ListItemProps {
  id: string;
  expanded?: boolean;
  title: string;
  size?: ListItemSize;
  icon?: IconName;
  count?: number;
  accessCount?: number;
  badge?: BadgeProps;
  children?: ReactNode;
}

export const AccessAreaItem = ({
  expanded,
  icon,
  badge,
  title,
  accessCount,
  userCount,
  count,
  description = "En beskrivelse av området.",
  children,
  ...props
}:AccessAreaItemProps) => {

if (count && accessCount) {
    badge = {
      color: "company",
      label: accessCount + " av " + count
    }
  } else {
    badge = {
      color: "neutral",
      label: "Gi tilgang"
    }
  }


  return (
    <ListItem
      {...props}
      expanded={expanded}
      collapsable
      size="md"
      icon={{
        color: accessCount ? "company" : "neutral",
        theme: "surface",
        name: icon
      }}
      badge={badge}
      title={title}
    >
      {expanded && <Section padding={6} spacing={6}>
        <Typography>{description}</Typography>
        {children}
        </Section>}
    </ListItem>
  )
};
