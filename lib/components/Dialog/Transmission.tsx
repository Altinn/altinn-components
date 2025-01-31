import { useState } from "react";
import {
  Section,
  Heading,
  AttachmentList,
  type AttachmentLinkProps,
  type AvatarProps,
  ListItem,
  type ListItemProps,
  type TransmissionTypeProps,
  Typography,
} from "..";

import styles from "./transmission.module.css";

export interface TransmissionAttachmentsProps {
  title?: string;
  items?: AttachmentLinkProps[];
}

export interface TransmissionProps extends ListItemProps {
  type?: TransmissionTypeProps;
  createdAt: string;
  createdAtLabel: string;
  sender: AvatarProps;
  title?: string;
  description?: string | undefined;
  summary?: string;
  attachments?: TransmissionAttachmentsProps;
}

export const Transmission = ({
  size = "xs",
  color,
  theme,
  type,
  loading,
  sender,
  createdAt,
  createdAtLabel,
  title,
  description,
  summary,
  attachments,
}: TransmissionProps) => {
  const [expanded, setExpanded] = useState(false);

  const onToggle = () => {
    setExpanded((prevState) => !prevState);
  };

  if (type?.value === "draft") {
    return (
      <ListItem
        as="button"
        size={size}
        color={color}
        theme={theme}
        variant="dotted"
        icon="pencil"
        title={title}
        description={description}
        badge={{ label: type?.label }}
        linkIcon="chevron-right"
      />
    );
  }

  return (
    <ListItem
      as="button"
      size={size}
      color={color}
      theme={theme}
      collapsible={true}
      expanded={expanded}
      onClick={onToggle}
      title={title}
      description={expanded ? "" : description}
      badge={{ label: type?.label }}
    >
      {expanded && (
        <Section padding={6} spacing={4}>
          <Typography size="md">
            <p>{summary}</p>
            {attachments && (
              <Section spacing={1}>
                <Heading as="h2" size="xs">
                  {attachments?.title}
                </Heading>
                <AttachmentList items={attachments?.items} />
              </Section>
            )}
          </Typography>
        </Section>
      )}
    </ListItem>
  );
};
