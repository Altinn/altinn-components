import { ReactNode } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from "@navikt/aksel-icons";
import { ListItem, type ListItemProps, Section, Typography, type ListItemSize, type SvgElement, type BadgeProps } from '../../../components';

export interface AccessAreaItemProps extends ListItemProps {
  id: string;
  expanded?: boolean;
  title: string;
  size?: ListItemSize;
  icon?: SvgElement;
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
  count,
  description = "En beskrivelse av området.",
  children,
  ...props
}:AccessAreaItemProps) => {

  return (
    <ListItem
      {...props}
      expanded={expanded}
      collapsable
      size="md"
      icon={{
        color: accessCount ? "company" : "neutral",
        theme: "surface",
        svgElement: icon
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
